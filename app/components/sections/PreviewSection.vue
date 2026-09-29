<script setup lang="ts">

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(['previews']
);

const clickedFeature = ref(null)
function toggleFeature(e: any) {
  if (clickedFeature.value === e) {
    clickedFeature.value = null;
  } else {
    clickedFeature.value = e;
  }
}
function toDownload() {
  const y =
    document.getElementById(`download`).getBoundingClientRect().top +
    window.scrollY;
  window.scroll({
    top: y,
    behavior: "smooth",
  });
}
</script>
<template>
  <section id="preview"
    class="h-auto min-h-auto flex flex-col items-center overflow-x-clip justify-center relative md:min-h-[120vh] p-0 my-40">
    <!-- Circle shape background -->
    <div
      class="absolute rotate-12 right-[-70%] md:right-[-20%] top-0 bottom-0 m-auto bg-green opacity-10 rounded-full size-[120vw] md:size-[70vw] z-0 ">
    </div>
    <!-- Content -->
    <h1 class="w-full text-xl flex-1 block md:hidden mt-5 text-center leading-12 px-4 pb-20">
      Preview the report
    </h1>

    <div class=" w-full h-full flex gap-6 items-center justify-center z-10 relative">
      <div class="overflow-x-scroll overflow-y-hidden flex gap-0 md:gap-10 bio-wrapper flex-nowrap scroll-snap-x ">
        <div
          class="shrink-0 md:flex self-center grow hidden items-center justify-center relative h-full w-[60vw] title-snap">
          <div class="w-full flex flex-col items-center justify-center">
            <h1 class="text-center text-xl leading-15">Preview the <br> report</h1>

            <div class="mt-4 rotate-[-90deg]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1"
                stroke="currentColor" class="size-12 animate-bounce">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
          </div>

        </div>
        <div
          class="bio-card ms-6 w-[16rem] md:w-[20rem] flex flex-col relative justify-center items-center shrink-0 my-12"
          v-for="(cover, index) in previews" :key="index">

          <div :data-aos="[index % 2 == 0 ? 'fade-up' : 'fade-down']"
            class="w-full relative p-0 rounded-lg">
            <NuxtImg loading="lazy" :src="cover?.cover?.url" class=" w-full rounded-lg" sizes="md:50vw" />
          </div>
        </div>

        <div class="md:w-40 me-6 md:me-20 m-auto pt-16 flex items-center h-full justify-center shrink-0 relative">
          <div @click="toDownload"
            class="hidden md:block px-12 py-4 outline-green hover:bg-green hover:text-dark outline-1 outline rounded-full  transition absolute bottom-0">
            Read
          </div>
        </div>
      </div>
    </div>



  </section>
</template>

<style scoped>
.title-snap {

  scroll-snap-align: center;
  scroll-margin: 0
}

/* .bio-card:nth-child(even) {
  margin-top: 0;
}

.bio-card:nth-child(odd) {
  margin-top: 0;
} */

.bio-card {
  scroll-snap-align: center;
  scroll-margin: 0;
}


.bio-card-preview {
  width: 100%;
}

.bio-wrapper {
  top: 0;
  bottom: 0;
  min-height: auto;
  height: auto;
  scroll-snap-type: x mandatory;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.bio-wrapper::-webkit-scrollbar {
  display: none;
}

.bio-card:nth-child(even) {
    margin-top: 60px;
  }

  .bio-card:nth-child(odd) {
    margin-top: 0;
  }
@media (min-width: 768px) {


  



  .bio-wrapper {
    min-height: 100vh;
  }
}

.extended-wrapper {
  overflow: scroll;
}
</style>
