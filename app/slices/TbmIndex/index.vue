<script setup lang="ts">
import type { Content } from "@prismicio/client";

defineProps(getSliceComponentProps<Content.TbmIndexSlice>());
</script>
<template>
  <section
    id="index"
    class="bg-grey flex justify-center flex-col gap-12 items-center px-20 py-40"
  >
    <div class="w-full">
      <div
        class="text-base text-brown flex flex-col justify-center text-center items-center"
      >
        <div class="rotate-2">The Better Move</div>

        <span
          class="self-center -rotate-2 font-bold relative inline-block before:absolute before:inset-x-0 before:top-[10%] before:h-[80%] before:-z-[1] before:bg-orange"
        >
          Index
        </span>
      </div>
    </div>
    <!-- Text -->
    <div class="w-full flex items-start justify-center gap-12 relative z-10">
      <div class="w-5/12 tbm-about text-sm">
        <PrismicRichText class="" :field="slice.primary.column_one_body" />
      </div>
      <div class="w-5/12 tbm-about text-sm">
        <PrismicRichText class="" :field="slice.primary.column_two_body" />
      </div>
    </div>

    <div class="w-full flex items-center justify-center rounded-lg overflow-hidden">
      <iframe
        src="https://7my37nsm8cb.typeform.com/to/Z8W9i8Zl"
        style="width: 100%; height: 600px; border: 0"
        allow="camera; microphone; autoplay; encrypted-media;"
      ></iframe>
    </div>
  </section>
</template>

<style>
.tbm-about p {
  color: var(--color-brown);
}
</style>
