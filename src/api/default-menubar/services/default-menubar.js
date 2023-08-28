'use strict';

/**
 * default-menubar service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::default-menubar.default-menubar');
