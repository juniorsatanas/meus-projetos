import {readFileSync} from 'fs';
import {argv} from 'yargs';

let resolve = require.resolve;

// --------------
// Configuration.
export const ENV              = argv['env']         || 'dev';
export const DEBUG            = argv['debug']       || false;

export const PORT             = argv['port']        || 5555;
export const LIVE_RELOAD_PORT = argv['reload-port'] || 4002;
export const APP_BASE         = argv['base']        || '/';

export const APP_SRC          = 'app';
export const APP_DEST         = 'dist';
export const ANGULAR_BUNDLES  = './node_modules/angular2/bundles';
export const VERSION          = version();

export const PATH = {
    cwd: process.cwd(),
    tools: 'tools',
    dest: {
        all: APP_DEST,
        dev: {
            all: `${APP_DEST}/${ENV}`,
            lib: `${APP_DEST}/${ENV}/lib`,
            css: `${APP_DEST}/${ENV}/frontend/css`,
            fonts: `${APP_DEST}/${ENV}/frontend/fonts`
        },
        test: 'test',
        tmp: '.tmp'
    },
    src: {
        all: APP_SRC,
        jslib_inject: [
            // Order is quite important here for the HTML tag injection.
            resolve('es6-shim/es6-shim.min.js'),
            resolve('es6-shim/es6-shim.map'),
            resolve('reflect-metadata/Reflect.js'),
            resolve('reflect-metadata/Reflect.js.map'),
            resolve('systemjs/dist/system.src.js'),
            resolve('material-design-lite/dist/material.js'),

            `${APP_SRC}/system.config.js`,
            `${APP_SRC}/frontend/init.js`,
            `${ANGULAR_BUNDLES}/angular2.dev.js`,
            `${ANGULAR_BUNDLES}/router.dev.js`,
            `${ANGULAR_BUNDLES}/http.dev.js`
        ],
        jslib_copy_only: [
            resolve('systemjs/dist/system-polyfills.js'),
            resolve('systemjs/dist/system-polyfills.js.map')
        ],
        csslib: [
            resolve('material-design-lite/dist/material.css'),
            resolve('material-design-lite/dist/material-grid.css'),
            resolve('font-awesome/css/font-awesome.min.css')
        ],
        fonts: [
            resolve('font-awesome/fonts/fontawesome-webfont.eot'),
            resolve('font-awesome/fonts/fontawesome-webfont.ttf'),
            resolve('font-awesome/fonts/fontawesome-webfont.woff'),
            resolve('font-awesome/fonts/FontAwesome.otf')
        ]
    }
};

// --------------
// Private.
function version(): number|string {
    var pkg = JSON.parse(readFileSync('package.json').toString());
    return pkg.version;
}
