// This is all you.

require('./prism.js')

import GLightbox from 'glightbox';

const lightbox = GLightbox({
    touchNavigation: false,
    loop: true,
});

import Alpine from 'alpinejs'
import intersect from '@alpinejs/intersect'
import tooltip from "@ryangjchandler/alpine-tooltip"

Alpine.plugin(intersect)
Alpine.plugin(tooltip)

window.Alpine = Alpine

Alpine.start()
