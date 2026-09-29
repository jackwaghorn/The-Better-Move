<script setup lang="ts">
const props = defineProps(['text', 'image'])
const showText = ref(false)
function goToDownload() {
  const y = document.getElementById('download').getBoundingClientRect().top +
    window.scrollY;
  window.scroll({
    top: y - 60,
    behavior: "smooth",
  });
}

</script>

<template>
  <section id="about" class="w-full h-auto relative">

    <div class="absolute top-0 opacity-50 w-full min-h-screen z-0">

      <div class="bg-cover h-full absolute top-0 left-0 w-full md:bg-fixed transition"
        :class="[showText ? 'brightness-50' : '']" :style="`background-image:url(${image?.url});`">
      </div>
      <div class="w-full h-[20%] bg-gradient-to-b from-black absolute top-0 left-0 z-1">
      </div>

      <div class="w-full h-[20%] bg-gradient-to-t from-black absolute bottom-0 left-0">
      </div>
    </div>

    <div class="relative h-auto min-h-screen flex items-center justify-center w-full text-center z-10">

      <!-- Button -->


      <!-- Para -->
      <div   class="w-full h-full items-center grid md:grid-cols-2">
        <div data-aos="fade-up" class="col-span-1 justify-center flex flex-col items-center mb-10 md:mb-0">
          <h1 class="mb-4 text-xl leading-12 md:leading-16 mt-30 md:mt-0">About the <br> Project</h1>
          <!-- <div v-if="showText" @click="goToDownload()"
            class="mt-6 px-12 py-4 outline-green outline-1 rounded-full hover:cursor-pointer hover:bg-dark hover:outline-dark hover:text-green  transition">
            Find out more</div> -->
        
        </div>
       
        <div class="col-span-1 text-start p-4 md:pe-6 " data-aos="fade-up" data-aos-delay="50">
          <p class="text-start mb-8 text-2xl leading-[1.4rem] md:leading-[1.7rem] lg:leading-[2.1rem]">
            The NTEReport is a magazine-style report that spotlights projects and initiatives in the global night-time
            industry.
<br><br>
            It is the first of its kind to bring together <b>cultural, social</b> and <b>economic insights</b> with actionable strategies
            —positioning nightlife as both a <b>vital cultural asset</b> and an emerging field for <b>strategic, long-term
            investment.</b>
          </p>
          <div class="w-full flex items-center justify-center">
 <button @click="goToDownload()"
 
            class="mt-3  m-auto self-center px-12 py-4 outline-green outline-1 rounded-full hover:cursor-pointer hover:bg-dark hover:outline-dark hover:text-green  transition">
           Find out more</button>
          </div>
             
          <!-- <PrismicRichText v-if="showText" class="text-sm text-bullet" :field="text" /> -->

        </div>
      </div>



    </div>
  </section>
</template>
