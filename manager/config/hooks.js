/*
 * This file is part of GEO Reviewers.
 * Copyright (C) 2023 GEO Secretariat.
 *
 * GEO Reviewers is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

module.exports = {
  settings: {
    twitter: {
      appKey: process.env.TWITTER_APP_KEY,
      appSecret: process.env.TWITTER_APP_SECRET,
      accessToken: process.env.TWITTER_ACCESS_TOKEN,
      accessSecret: process.env.TWITTER_ACCESS_SECRET,
    },
  },
};
