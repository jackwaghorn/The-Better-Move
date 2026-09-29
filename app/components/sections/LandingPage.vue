<script setup lang="ts">
defineProps(['image'])
const circleStyle = (el) => {
  const op = (100 * el) / 30;
  const opacity = (60 * el) / 30;
  const size = op / 60 + 1.5;

  return `transform:scale(${size}); opacity:${opacity}%;animation-delay: ${op * 6}ms;`;
};

const goDown = () => {
  const summaryEl = document.getElementById('summary');
  if (summaryEl) {
    const y = summaryEl.getBoundingClientRect().top + window.scrollY;
    window.scroll({
      top: y,
      behavior: 'smooth',
    });
  }
};
const blurAmount = ref(0)

function updateBlur() {
  const scrollY = window.scrollY
  const maxBlur = 100                // max blur intensity you want
  const triggerHeight = window.innerHeight // blur completed after 100vh scroll

  const progress = Math.min(scrollY / triggerHeight, 1)
  blurAmount.value = progress * maxBlur
}

onMounted(() => {
  window.addEventListener('scroll', updateBlur)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateBlur)
})
const hideButton = ref(false)
onMounted(() => {
  const lines = document.querySelectorAll('.reveal-line')

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
          hideButton.value = true;
        } else {
          entry.target.classList.remove('in-view')
          hideButton.value = false;
        }
      })
    },
    { threshold: [0, 0.3, 1], rootMargin: "0px 0px -20% 0px" }
  )

  lines.forEach(line => observer.observe(line))
})
</script>

<template>
  <div data-section="landing" class="relative flex min-h-screen h-full w-full overflow-visible z-1">


    <div class="w-full h-full absolute top-0 left-0 max-w-screen overflow-x-clip  overflow-visible pointer-events-none">
      <div v-for="index in 40" :key="index" :style="circleStyle(index)" class="circle-shape"></div>
    </div>

    <div class="z-10 ms-0 my-auto w-full md:w-1/2 h-full">
      <div class="flex flex-col items-center justify-end h-full px-4 md:px-10 w-full">
        <div class="z-1 mt-4 md:mt-4 flex flex-col gap-4 md:gap-6">
         
          <div>
            <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100" data-aos-offset="-300"
              class=" font-bold text-[6rem] leading-[6rem]  lg:text-[8rem] xl:text-[12rem] lg:leading-36 tracking-tighter text-center me-3">
              NTER</h1>
            <h2 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200" data-aos-offset="-300"
              class="text-base leading-8 w-full text-center">Night Time Economy
              Report
              2026
            </h2>
            <p data-aos="fade" data-aos-duration="1500" data-aos-delay="700" data-aos-offset="-300"
              class="text-sm leading-4 md:leading-6 mt-6 w-full lg:w-11/12 text-center mx-auto">
              An annual publication by the Nighttime Foundation.
              Launched internationally at the World Economic Forum Annual Meeting in Davos.
            </p>
          </div>


          <!-- <div class="absolute bottom-2 w-1/2 left-0">
            <p data-aos="fade" data-aos-duration="2000" data-aos-delay="600" data-aos-offset="-300"
              class="text-sm text-center w-full">
              Nighttime Foundation; The Future of Nightlife begins here
            </p>
          </div> -->

        </div>
      </div>
    </div>

    <div class="absolute left-0 right-0 top-0 w-full h-full overflow-x-clip brightness-50 md:brightness-100">
      <div class="circle-bg " :style="`background-image:url(${image});filter: blur(${blurAmount}px)`"></div>



    </div>


    <div class="absolute bottom-3 left-0 right-0 z-10 h-10 w-full animate-bounce">
      <div class="flex justify-center w-full" :class="[hideButton ? 'opacity-0' : 'opacity-100']">
        <svg @click="goDown" style="transform: rotate(180deg)" class="cursor-pointer size-10" viewBox="0 0 48 48"
          fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="23.5" fill="transparent" stroke="#e8fcd4"></circle>
          <path d="M18 26L24.5 20L31 26" stroke="#e8fcd4" stroke-width="1.5" stroke-linecap="round"></path>
        </svg>
      </div>
    </div>
    <div class="absolute bottom-0 left-0 right-0 w-full flex items-center justify-center z-1000 mt-20 -mb-35">
      <div class="reveal-box w-50 lg:w-60 text-base leading-6 lg:leading-8 tracking-tight">
        <h2 class="reveal-line">The Future</h2>
        <h2 class="reveal-line text-end">of Nightlife</h2>
        <h2 class="reveal-line">begins here</h2>
        <div class="w-full animate-bounce">
          <svg style="transform: rotate(180deg)"
            class="reveal-line cursor-pointer size-10 text-center mx-auto" viewBox="0 0 48 48"
            fill="none" xmlns="http://www.w3.org/2000/svg">

            <path d="M18 26L24.5 20L31 26" stroke="#e8fcd4" stroke-width="1.5" stroke-linecap="round"></path>
          </svg>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.reveal-line {
  opacity: 0.25;

  transition: opacity 0.6s ease, transform 0.6s ease;
}

.reveal-line.in-view {
  opacity: 1;

}

.vibelab-logo {
  height: 1.5rem;
}


.circle-bg {
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-attachment: cover;
  position: absolute;
  right: -22%;
  left: inherit;
  top: 0;
  bottom: 0;
  margin: auto;
  height: 110vw;
  width: 110vw;
  filter: brightness(0.7);
  z-index: 0;
}

@media (min-width: 768px) {


  .circle-bg {
    position: absolute;
    right: -70%;
    top: 0;
    left: inherit;
    bottom: 0;
    margin: auto;
    height: 90vw;
    width: 90vw;
    border-radius: 50%;
    filter: brightness(1);
    z-index: 0;
  }
}


.circle-shape {
  position: absolute;
  top: 0;
  left: 15vw;
  bottom: 0;
  margin: auto;
  height: 70vw;
  width: 70vw;
  border-radius: 50%;
  z-index: 0;
  animation: flash 3s infinite linear;
}

@media (min-width: 768px) {
  .circle-shape {
    position: absolute;
    right: -30%;
    top: 0;
    left: auto;
    bottom: 0;
    margin: auto;
    height: 60vw;
    width: 60vw;
    border-radius: 50%;
    z-index: 0;
    animation: flash 4s infinite linear;
  }


}

@keyframes flash {
  0% {
    border: solid 1px transparent;
  }

  12% {
    border: solid 1px transparent;
  }

  15% {
    border: solid 1px rgb(114, 127, 75);
  }

  30% {
    border: solid 1px rgba(114, 127, 75, 0.116);
  }

  48% {
    border: solid 1px rgba(114, 127, 75, 0);
  }

  75% {
    border: solid 1px transparent;
  }

  100% {
    border: solid 1px transparent;
  }
}



img.portrait {
  width: 16rem;
  border-radius: 2rem;
}

.presents {
  position: absolute;
  top: 5rem;
  text-align: center;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 1;
}

.report-title-e {
  line-height: 2rem;
  font-size: 1.5rem;
}



.sub-title {
  z-index: 1;
  font-size: 3.5rem;
  line-height: 3.5rem;
}
</style>