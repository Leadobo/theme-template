let mix = require('laravel-mix')
const tailwindcss = require('tailwindcss')

require('./mix')

mix
    .setPublicPath('dist')
    .js('src/js/theme.js', 'js')
        .vue({ version: 3 })
    .sass('src/css/theme.scss', 'css')
        .options({
            processCssUrls: false,
            postCss: [ tailwindcss('tailwind.config.js') ],
        })
    .copyDirectory('src/blade', 'blade')
    .leadobo('insurance')

if (mix.inProduction()) {
    mix.version();
}
