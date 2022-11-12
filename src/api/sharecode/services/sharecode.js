'use strict';

/**
 * sharecode service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sharecode.sharecode');
