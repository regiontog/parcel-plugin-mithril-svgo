const { Asset } = require('parcel-bundler');
const escape = require('js-string-escape');
const SVGO = require('svgo');

module.exports = class extends Asset {
    constructor(...args) {
        super(...args);
        this.type = 'js';
    }

    async transform() {
        if (this.options.production) {
            const cfg = await this.getConfig(['.svgorc', 'svgo.config.js']) || {};
            const svgo = new SVGO(cfg);

            this.contents = (await svgo.optimize(this.contents, {
                path: this.name,
            })).data;
        }
    }

    async generate() {
        return [
            {
                type: 'js',
                value: `
                    var __svg = require('mithril').trust('${escape(this.contents)}');module.exports={view:function(){return __svg;}};
                `,
            }
        ]
    }
};