<script setup lang="ts">
import type { Content } from "@prismicio/client";

defineProps(getSliceComponentProps<Content.TbmAboutSlice>());
</script>

<template>
  <section id="about" class="bg-pink flex md:flex-row flex-col justify-center gap-8 md:gap-20 items-center px-4 md:px-20 py-12 md:py-20">
    <div class="w-8/12 rotate-2 md:rotate-1 md:w-4/12">
      <NuxtImg
        loading="lazy"
        :src="slice?.primary?.image.url"
        class="w-full"
        sizes="md:50vw"
      />
    </div>
    <div class="w-full md:w-6/12 tbm-about text-sm">
   <div class="text-base text-red font-bold rotate-2 flex">
  <span
    class="relative inline-block
           before:absolute before:inset-x-0
           before:top-[10%] before:h-[80%]
           before:-z-[1] before:bg-yellow"
  >
    {{ slice.primary.title }}
  </span>
</div>

      <PrismicRichText class="" :field="slice.primary.body" />
    </div>
  </section>
</template>

<style>
.tbm-about p {
  color: var(--color-red);
}
</style>
