// Source - https://stackoverflow.com/a
// Posted by Ynod
// Retrieved 2025-12-04, License - CC BY-SA 4.0

import AOS from "aos"

import "aos/dist/aos.css"

export default defineNuxtPlugin((nuxtApp) => {
    if (typeof window !== "undefined") {
        nuxtApp.AOS = AOS.init() // eslint-disable-line new-cap
    }
})
