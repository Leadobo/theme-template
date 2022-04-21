let mix = require('laravel-mix')

require('./mix')

mix
    .setPublicPath('dist')
    .js('src/js/theme.js', 'js')
    .vue({ version: 3 })
    .postCss('src/css/theme.css', 'css', [
        require('postcss-import'),
        require('tailwindcss'),
    ])
    .leadobo('insurance')

if (mix.inProduction()) {
    mix.version();
}
