#!/usr/bin/env node --harmony

'use strict';

function main() {
    const cp = require('child_process');
    let cmd;

    if(process.platform === 'win32') {
        cmd = convertPaths(process.argv.slice(2));
    } else {
        cmd = process.argv.slice(2);
    }

    const output = cp.execSync(cmd.join(' ')).toString()
    console.log(output);
}

function convertPaths(args){
    return args.map(convertPath);
}

function convertPath(path){
    return path.
        // remove cwd prefix 
        replace(/^\.\//,'').
        // substitute all '/' for '\\'
        replace(/\//g,'\\'); 
}

// for testing
module.exports = { convertPath }

if( require.main === module ) {
    main();
}
