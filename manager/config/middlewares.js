/*
 * This file is part of GEO Reviewers.
 * Copyright (C) 2023 GEO Secretariat.
 *
 * GEO Reviewers is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

/*
  General definitions
*/
const AWS_S3_BUCKET = process.env.AWS_BUCKET;
const AWS_S3_REGION = process.env.AWS_REGION;
const AWS_S3_ENDPOINT = `${AWS_S3_BUCKET}.s3.${AWS_S3_REGION}.amazonaws.com`;

/*
  Export
*/
module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            AWS_S3_ENDPOINT,
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            AWS_S3_ENDPOINT,
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  {
    name: 'strapi::body',
    config: {
      formLimit: '256mb', // modify form body
      jsonLimit: '256mb', // modify JSON body
      textLimit: '256mb', // modify text body
      formidable: {
        maxFileSize: 15 * 1024 * 1024 * 1024, // multipart data, modify here limit of uploaded file size
      },
    },
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
