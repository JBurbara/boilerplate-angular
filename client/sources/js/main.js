'use strict';

const directives = require('./directives/directives');
const routes = require('./routes');

const app = angular.module('app', ['ui.router', 'directives'])
app.config(routes);

