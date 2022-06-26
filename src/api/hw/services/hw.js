'use strict';

/**
 * hw service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hw.hw');
