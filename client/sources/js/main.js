'use strict';
const app = angular.module('app', ['ui.router'])

const routes = require('./routes');
app.config(routes);
