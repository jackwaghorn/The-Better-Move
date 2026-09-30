<script setup>
import { components } from "~/slices";
const prismic = usePrismic();
const { data: page } = await useAsyncData("better_move", () =>
    prismic.client.getSingle("better_move"),
);
</script>

<template>
    <UiNavBar />
     <!-- <SectionsLandingPage :image="page?.data?.landing?.url" /> -->
       <main class="w-full overflow-x-clip">
    <SliceZone :slices="page?.data.slices ?? []" :components="components" />
  </main>
    <!--
    <MapWithMarkers />
    <SectionsAboutSection :image="page?.data?.summary_image" :text="page?.data?.summary_text" />
    <SectionsKeyThemes :recommendations="page?.data?.recommendations" />
    <SectionsPreviewSection :previews="page?.data?.previews" />
    <SectionsQuoteSection :image="page?.data?.quote_image" />
    <SectionsDownloadSection />
     -->
    <UiTheFooter />
</template>