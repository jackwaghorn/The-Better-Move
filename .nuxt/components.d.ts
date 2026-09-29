
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T


export const MapWithMarkers: typeof import("../app/components/MapWithMarkers.vue")['default']
export const SectionsAboutSection: typeof import("../app/components/sections/AboutSection.vue")['default']
export const SectionsBentoSection: typeof import("../app/components/sections/BentoSection.vue")['default']
export const SectionsBentoSectionBackup: typeof import("../app/components/sections/BentoSectionBackup.vue")['default']
export const SectionsDownloadSection: typeof import("../app/components/sections/DownloadSection.vue")['default']
export const SectionsFindingsSection: typeof import("../app/components/sections/FindingsSection.vue")['default']
export const SectionsGallerySection: typeof import("../app/components/sections/GallerySection.vue")['default']
export const SectionsKeyThemes: typeof import("../app/components/sections/KeyThemes.vue")['default']
export const SectionsLandingPage: typeof import("../app/components/sections/LandingPage.vue")['default']
export const SectionsNumbersSection: typeof import("../app/components/sections/NumbersSection.vue")['default']
export const SectionsPreviewSection: typeof import("../app/components/sections/PreviewSection.vue")['default']
export const SectionsQuoteSection: typeof import("../app/components/sections/QuoteSection.vue")['default']
export const UiCookieBanner: typeof import("../app/components/ui/CookieBanner.vue")['default']
export const UiDataChart: typeof import("../app/components/ui/DataChart.vue")['default']
export const UiDlBtn: typeof import("../app/components/ui/DlBtn.vue")['default']
export const UiMenuIcon: typeof import("../app/components/ui/MenuIcon.vue")['default']
export const UiMoreBtn: typeof import("../app/components/ui/MoreBtn.vue")['default']
export const UiNavBar: typeof import("../app/components/ui/NavBar.vue")['default']
export const UiTheFooter: typeof import("../app/components/ui/TheFooter.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_5baa3dda3e3267b4ee8e4823832c1353/node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_5baa3dda3e3267b4ee8e4823832c1353/node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_5baa3dda3e3267b4ee8e4823832c1353/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_5baa3dda3e3267b4ee8e4823832c1353/node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_5baa3dda3e3267b4ee8e4823832c1353/node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_5baa3dda3e3267b4ee8e4823832c1353/node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_5baa3dda3e3267b4ee8e4823832c1353/node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_5baa3dda3e3267b4ee8e4823832c1353/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_5baa3dda3e3267b4ee8e4823832c1353/node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_5baa3dda3e3267b4ee8e4823832c1353/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtAnnouncer: typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_5baa3dda3e3267b4ee8e4823832c1353/node_modules/nuxt/dist/app/components/nuxt-announcer")['default']
export const NuxtImg: typeof import("../node_modules/.pnpm/@nuxt+image@2.0.0_db0@0.3.4_better-sqlite3@12.11.1__ioredis@5.11.1_magic-string@1.4.2_m_40589f3a305c9fe7ba9ba8d140ed126a/node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
export const NuxtPicture: typeof import("../node_modules/.pnpm/@nuxt+image@2.0.0_db0@0.3.4_better-sqlite3@12.11.1__ioredis@5.11.1_magic-string@1.4.2_m_40589f3a305c9fe7ba9ba8d140ed126a/node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
export const SocialShare: typeof import("../node_modules/.pnpm/@stefanobartoletti+nuxt-social-share@2.3.0_magic-string@1.4.2_magicast@0.5.5_rolldown@1_a1f7a033c8a95dd4f05665c6e81126d8/node_modules/@stefanobartoletti/nuxt-social-share/dist/runtime/SocialShare.vue")['default']
export const PrismicEmbed: typeof import("@prismicio/vue")['PrismicEmbed']
export const PrismicImage: typeof import("@prismicio/vue")['PrismicImage']
export const PrismicLink: typeof import("@prismicio/vue")['PrismicLink']
export const PrismicText: typeof import("@prismicio/vue")['PrismicText']
export const PrismicRichText: typeof import("@prismicio/vue")['PrismicRichText']
export const PrismicTable: typeof import("@prismicio/vue")['PrismicTable']
export const SliceZone: typeof import("@prismicio/vue")['SliceZone']
export const NuxtPage: typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_5baa3dda3e3267b4ee8e4823832c1353/node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_5baa3dda3e3267b4ee8e4823832c1353/node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_5baa3dda3e3267b4ee8e4823832c1353/node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_5baa3dda3e3267b4ee8e4823832c1353/node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_5baa3dda3e3267b4ee8e4823832c1353/node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_5baa3dda3e3267b4ee8e4823832c1353/node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_5baa3dda3e3267b4ee8e4823832c1353/node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_5baa3dda3e3267b4ee8e4823832c1353/node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_5baa3dda3e3267b4ee8e4823832c1353/node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_5baa3dda3e3267b4ee8e4823832c1353/node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_5baa3dda3e3267b4ee8e4823832c1353/node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyMapWithMarkers: LazyComponent<typeof import("../app/components/MapWithMarkers.vue")['default']>
export const LazySectionsAboutSection: LazyComponent<typeof import("../app/components/sections/AboutSection.vue")['default']>
export const LazySectionsBentoSection: LazyComponent<typeof import("../app/components/sections/BentoSection.vue")['default']>
export const LazySectionsBentoSectionBackup: LazyComponent<typeof import("../app/components/sections/BentoSectionBackup.vue")['default']>
export const LazySectionsDownloadSection: LazyComponent<typeof import("../app/components/sections/DownloadSection.vue")['default']>
export const LazySectionsFindingsSection: LazyComponent<typeof import("../app/components/sections/FindingsSection.vue")['default']>
export const LazySectionsGallerySection: LazyComponent<typeof import("../app/components/sections/GallerySection.vue")['default']>
export const LazySectionsKeyThemes: LazyComponent<typeof import("../app/components/sections/KeyThemes.vue")['default']>
export const LazySectionsLandingPage: LazyComponent<typeof import("../app/components/sections/LandingPage.vue")['default']>
export const LazySectionsNumbersSection: LazyComponent<typeof import("../app/components/sections/NumbersSection.vue")['default']>
export const LazySectionsPreviewSection: LazyComponent<typeof import("../app/components/sections/PreviewSection.vue")['default']>
export const LazySectionsQuoteSection: LazyComponent<typeof import("../app/components/sections/QuoteSection.vue")['default']>
export const LazyUiCookieBanner: LazyComponent<typeof import("../app/components/ui/CookieBanner.vue")['default']>
export const LazyUiDataChart: LazyComponent<typeof import("../app/components/ui/DataChart.vue")['default']>
export const LazyUiDlBtn: LazyComponent<typeof import("../app/components/ui/DlBtn.vue")['default']>
export const LazyUiMenuIcon: LazyComponent<typeof import("../app/components/ui/MenuIcon.vue")['default']>
export const LazyUiMoreBtn: LazyComponent<typeof import("../app/components/ui/MoreBtn.vue")['default']>
export const LazyUiNavBar: LazyComponent<typeof import("../app/components/ui/NavBar.vue")['default']>
export const LazyUiTheFooter: LazyComponent<typeof import("../app/components/ui/TheFooter.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_5baa3dda3e3267b4ee8e4823832c1353/node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_5baa3dda3e3267b4ee8e4823832c1353/node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_5baa3dda3e3267b4ee8e4823832c1353/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_5baa3dda3e3267b4ee8e4823832c1353/node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_5baa3dda3e3267b4ee8e4823832c1353/node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_5baa3dda3e3267b4ee8e4823832c1353/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_5baa3dda3e3267b4ee8e4823832c1353/node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_5baa3dda3e3267b4ee8e4823832c1353/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_5baa3dda3e3267b4ee8e4823832c1353/node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_5baa3dda3e3267b4ee8e4823832c1353/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtAnnouncer: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_5baa3dda3e3267b4ee8e4823832c1353/node_modules/nuxt/dist/app/components/nuxt-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/.pnpm/@nuxt+image@2.0.0_db0@0.3.4_better-sqlite3@12.11.1__ioredis@5.11.1_magic-string@1.4.2_m_40589f3a305c9fe7ba9ba8d140ed126a/node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/.pnpm/@nuxt+image@2.0.0_db0@0.3.4_better-sqlite3@12.11.1__ioredis@5.11.1_magic-string@1.4.2_m_40589f3a305c9fe7ba9ba8d140ed126a/node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
export const LazySocialShare: LazyComponent<typeof import("../node_modules/.pnpm/@stefanobartoletti+nuxt-social-share@2.3.0_magic-string@1.4.2_magicast@0.5.5_rolldown@1_a1f7a033c8a95dd4f05665c6e81126d8/node_modules/@stefanobartoletti/nuxt-social-share/dist/runtime/SocialShare.vue")['default']>
export const LazyPrismicEmbed: LazyComponent<typeof import("@prismicio/vue")['PrismicEmbed']>
export const LazyPrismicImage: LazyComponent<typeof import("@prismicio/vue")['PrismicImage']>
export const LazyPrismicLink: LazyComponent<typeof import("@prismicio/vue")['PrismicLink']>
export const LazyPrismicText: LazyComponent<typeof import("@prismicio/vue")['PrismicText']>
export const LazyPrismicRichText: LazyComponent<typeof import("@prismicio/vue")['PrismicRichText']>
export const LazyPrismicTable: LazyComponent<typeof import("@prismicio/vue")['PrismicTable']>
export const LazySliceZone: LazyComponent<typeof import("@prismicio/vue")['SliceZone']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_5baa3dda3e3267b4ee8e4823832c1353/node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_5baa3dda3e3267b4ee8e4823832c1353/node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_5baa3dda3e3267b4ee8e4823832c1353/node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_5baa3dda3e3267b4ee8e4823832c1353/node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_5baa3dda3e3267b4ee8e4823832c1353/node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_5baa3dda3e3267b4ee8e4823832c1353/node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_5baa3dda3e3267b4ee8e4823832c1353/node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_5baa3dda3e3267b4ee8e4823832c1353/node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_5baa3dda3e3267b4ee8e4823832c1353/node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_5baa3dda3e3267b4ee8e4823832c1353/node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7__@babel+plugin-syntax-typ_5baa3dda3e3267b4ee8e4823832c1353/node_modules/nuxt/dist/app/components/nuxt-island")['default']>

export const componentNames: string[]
