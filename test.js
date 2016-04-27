const assert = require('assert');
const convertPath  = require('./index.js').convertPath;

describe('path conversion', () => {

    it('should convert a path from unix style to windows style', () => {
        assert.equal(convertPath('foo/bar/baz'), 'foo\\bar\\baz');
    });

    it('should remove ./ prefixes', () => {
        assert.equal(convertPath('./do/me/now'), 'do\\me\\now');
    });
});
