/*
 * This file is part of GEO Reviewers.
 * Copyright (C) 2023 GEO Secretariat.
 *
 * GEO Reviewers is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
});
