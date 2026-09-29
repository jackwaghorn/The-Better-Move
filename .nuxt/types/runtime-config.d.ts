import { RuntimeConfig as UserRuntimeConfig, PublicRuntimeConfig as UserPublicRuntimeConfig } from 'nuxt/schema'
  interface SharedRuntimeConfig {
   app: {
      buildId: string,

      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },
  }
  interface SharedPublicRuntimeConfig {
   socialShare: {
      baseUrl: string,

      styled: boolean,

      label: boolean,

      icon: boolean,
   },

   prismic: {
      endpoint: string,

      environment: string,

      clientConfig: any,

      client: string,

      linkResolver: string,

      richTextSerializer: string,

      injectComponents: boolean,

      components: {
         linkRel: string,

         richTextComponents: string,

         sliceZoneDefaultComponent: string,
      },

      preview: string,

      toolbar: boolean,

      devtools: boolean,
   },
  }
declare module '@nuxt/schema' {
  interface RuntimeConfig extends UserRuntimeConfig {}
  interface PublicRuntimeConfig extends UserPublicRuntimeConfig {}
}
declare module 'nuxt/schema' {
  interface RuntimeConfig extends SharedRuntimeConfig {}
  interface PublicRuntimeConfig extends SharedPublicRuntimeConfig {}
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: UserRuntimeConfig
        }
      }