import { apiEndpoint, repositoryName } from "./slicemachine.config.json";
import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devServer: {
  //   host: '0.0.0.0', 
  //   port: 3000,
  // },
  nitro: {
    prerender: {
      routes: ['/'],
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: "The Better Move",
      meta: [
        {
          name: "description",
          content: "How to bring dance back to the dancefloor."
        },
        {
          name: "author",
          content: "VibeLab"
        },
        {
          property: "og:type",
          content: "website"
        },
        {
          name: "og:description",
          content: "How to bring dance back to the dancefloor"
        },
        {
          name: "twitter:description",
          content: "How to bring dance back to the dancefloor"
        },
        {
          name: "og:title",
          content: "The Better Move"
        },
        {
          property: "og:url",
          content: "https://nter.report/"
        },
        {
          name: "og:image",
          content: "./preview.jpg"
        },
        {
          name: "twitter:image",
          content: "./preview.jpg"
        },
      ],
      // link: [
      //   {
      //     rel: "canonical",
      //     href: "https://nter.report/"
      //   }
      // ],
    }
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  modules: [
    '@nuxt/image',
    '@stefanobartoletti/nuxt-social-share',
    '@nuxtjs/prismic',
    "@nuxt/fonts",
  ],
  plugins: [{ src: '~/plugins/aos.client.js', mode: 'client' },],

  socialShare: {
    baseUrl: 'https://nter.report/' // required!
    // other optional module options
  },
  prismic: {
    endpoint: apiEndpoint || repositoryName
  },
  css: ['./assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})