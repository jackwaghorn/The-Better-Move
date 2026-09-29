<script setup lang="ts">
import type { Content } from "@prismicio/client";

defineProps(getSliceComponentProps<Content.TbmAboutSlice>());
</script>

<template>
  <section id="about" class="bg-pink flex justify-center gap-20 items-center px-20 py-20">
    <div class="w-4/12">
      <NuxtImg
        loading="lazy"
        :src="slice?.primary?.image.url"
        class="w-full"
        sizes="md:50vw"
      />
    </div>
    <div class="w-6/12 tbm-about text-sm">
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
