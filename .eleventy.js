const slugify = require("slugify");
const util = require("util");
const eleventySass = require("eleventy-sass");

module.exports = function (eleventyConfig) {


    eleventyConfig.addPlugin(eleventySass);

    // replace default slug with better imp
    eleventyConfig.addFilter("slug", (input) => {
        if (!input) {
            console.log('error');
            return '';
        }
        const options = {
            replacement: "-",
            remove: /[&,+()$~%.'":*?<>{}]/g,
            lower: true
        };
        return slugify(input, options);
    });

    eleventyConfig.addFilter("filter", (list, field, value) => {
        return list.filter(e => e[field] === value);
    });

    eleventyConfig.addFilter("sort", (list, field) => {
        return list.sort((a,b) => a[field] > b[field] ? 1 : -1);
    });

    eleventyConfig.addFilter('console', function(value) {
        const str = util.inspect(value);
        return `<div style="white-space: pre-wrap;">${unescape(str)}</div>;`
    });

    // copy assets
    eleventyConfig.addPassthroughCopy("src/assets/");

    return {
        dir: {
            output: "dist",
            input: "src"
        },
        templateFormats: ["njk"]
    };

};

