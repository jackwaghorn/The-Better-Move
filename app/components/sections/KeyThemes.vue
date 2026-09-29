<script setup lang="ts">
defineProps(['recommendations']
);
</script>

<template>
  <div class="w-full p-4 flex flex-col justify-center items-center py-40 md:py-60 px-4 md:px-60 relative">
    <div class="absolute max-w-full overflow-x-clip opacity-25">
      <img class="w-[140vw]" src="~/assets/images/background.jpg" alt="">
    </div>
    <h1 data-aos="fade-in"
      class="w-full text-start pt-0 pb-12 hyphens-auto break-words text-base leading-[2rem] md:leading-[2.5rem]">
      The <i>NTEReport</i> is organised into 5 sections: Night-time Research, Policy & Global Trends; Technology & Innovation;
      Economic Power & Resilience, Culture, Community & Wellbeing; and Placemaking, Experiences & Sustainable Spaces.
<br><br>
      The report includes:

    </h1>

    <div class="w-full flex gap-6 flex-col list-none ps-0 text-2xl leading-[1.4rem] md:leading-[1.7rem] lg:leading-[2.1rem]">
      <li data-aos="fade-up" 
        class=" relative select-none group outline outline-green rounded-4xl overflow-hidden">
        <div
          class="absolute w-full h-full group-hover: group-hover:outline-green opacity-10   text-dark "
         ></div>
        <!-- Header -->
        <div class="text-[#b4c3a4ca]">
          <div class="flex justify-between relative z-10 p-5">
            <div class="z-10 transition ">
              <p><b class="text-green">12 features</b> written by researchers, policy experts, investors and practitioners</p>
            </div>
           
          </div>
        </div>
      </li>
      <li data-aos="fade-up" class=" relative select-none group outline outline-green rounded-4xl overflow-hidden">

        <div
          class="absolute w-full h-full group-hover: group-hover:outline-green opacity-10   text-dark ">
        </div>
        <!-- Header -->
        <div class="text-[#b4c3a4ca]">
          <div class="flex justify-between relative z-10 p-5">
            <div class="z-10 transition ">
              <p><b class="text-green">25 case studies</b> on innovative projects, initiatives and organisations from around the world</p>
            </div>

          </div>
        </div>
      </li>
      <li data-aos="fade-up" class=" relative select-none group outline outline-green rounded-4xl overflow-hidden">

        <div
          class="absolute w-full h-full group-hover: group-hover:outline-green opacity-10   text-dark ">
        </div>
        <!-- Header -->
        <div class="text-[#b4c3a4ca]">
          <div class="flex justify-between relative z-10 p-5">
            <div class="z-10 transition ">
              <p><b class="text-green">Insights on the global NTE</b> extracted by analysing <b class="text-green">324 reports,</b> academic articles and white papers</p>
            </div>

          </div>
        </div>
      </li>


    </div>


  </div>
</template>
<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.expand-enter,
.expand-leave-to {
  height: 0;
  opacity: 0;
}
</style>