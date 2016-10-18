require('babel-register')();

const { jsdom } = require('jsdom');
const { expect } = require('chai');

const document = global.document = jsdom();
const window = global.window = document.defaultView;

global.navigator = window.navigator = {
	userAgent: 'node.js'
};
global.Node = window.Node;

window.mocha = {};
window.expect = global.expect = expect;
window.beforeEach = global.beforeEach;
window.afterEach = global.afterEach;

/*
 * Since angular and angular-mocks are both singletons created once with one window-object
 * and mocha doesn't reload modules from node_modules on watch mode we'll have to
 * invalidate the cached singletons manually.
 */
[ 'angular', 'angular/angular', 'angular-mocks' ].forEach((dep) => delete require.cache[require.resolve(dep)]);

require('angular/angular');
require('angular-mocks');

global.angular = window.angular;
