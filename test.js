'use strict';
var assert = require('assert');
var hyphenize = require('./');

it('should returns expected header', function () {
	assert.strictEqual(hyphenize('lowerUpper'), 'lower-upper');
	assert.strictEqual(hyphenize('lowerUpUp'), 'lower-up-up');
	assert.strictEqual(hyphenize('lowerUP'), 'lower-up');
	assert.strictEqual(hyphenize('lowerUPDUser'), 'lower-upd-user');
	assert.strictEqual(hyphenize('lowerUPDUs'), 'lower-updus');
	assert.strictEqual(hyphenize('lowerlowerUpper'), 'lowerlower-upper');
	assert.strictEqual(hyphenize('lower upper'), 'lower-upper');
	assert.strictEqual(hyphenize('lower-Upper'), 'lower-upper');
	assert.strictEqual(hyphenize('lower upper'), 'lower-upper');
	assert.strictEqual(hyphenize('lower.Upper'), 'lower-upper');
	assert.strictEqual(hyphenize('lower.Upper'), 'lower-upper');
	assert.strictEqual(hyphenize(' lowerUpper'), 'lower-upper');
	assert.strictEqual(hyphenize('_lowerUpper'), '_lower-upper');
	assert.strictEqual(hyphenize('.lowerUpper'), 'lower-upper');
	assert.strictEqual(hyphenize('/lowerUpper'), 'lower-upper');
	assert.strictEqual(hyphenize(' /._lowerUpper'), '_lower-upper');
});
