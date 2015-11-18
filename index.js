'use strict';

module.exports = function (h) {
	return h.replace(/^(\W|-|\.)*/g, '')
					.replace(/(|\W|\s)*$/g, '')
					.replace(/([A-Z])([A-Z])([a-z0-9]){1,2}./g, function (match) {
						return match.substr(0, 1) + '-' + match.substr(1).toLowerCase();
					})
					.replace(/([a-z\d])([A-Z])/g, function (match, a, b) {
						return a + (match.indexOf('-') >= 0 ? '' : '-') + b.toLowerCase();
					})
					.replace(/([a-z0-9])([A-Z\d])([a-z0-9]){1,2}./g, function (match, a, b) {
						return a.toLowerCase() + '-' + b;
					})
					.replace(/ |\./g, '-')
					.toLowerCase();
};
