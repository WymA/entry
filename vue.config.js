// vue.config.js
module.exports = {
    css: {
        loaderOptions: {
            less: {
                lessOptions: {
                    modifyVars: {
                        // overide with less vars

                        // or override with less file
                        hack: `true; @import "./src/assets/entry.less";`,
                    },
                },
            },
        },
    },
};