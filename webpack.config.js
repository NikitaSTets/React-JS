const path = require('path');

module.exports = {
    entry: {
        a2: './src/test1.js',
        b2: {
            runtime: 'a1',
            dependOn: 'a2',
            import: './src/test2.js',
        },
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};