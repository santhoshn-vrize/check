'use strict';

/**
 * sandwich-meal service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sandwich-meal.sandwich-meal');
