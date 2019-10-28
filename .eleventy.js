const config = eleventyConfig => {
  eleventyConfig.addPassthroughCopy('styles')
  eleventyConfig.addPassthroughCopy({ './node_modules/tachyons/css/tachyons.css': 'vendor/tachyons.css' })
  eleventyConfig.addPassthroughCopy({ './node_modules/colors.css/css/colors.css': 'vendor/colors.css' })
}

module.exports = config
