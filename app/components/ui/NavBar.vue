<script setup>
const links = ref([
  {
    name: 'Landing',
    link: 'landing',
    pos: -100
  },
  {
    name: 'About',
    link: 'about',
    pos: 0
  },
  {
    name: 'The Guide',
    link: 'guide',
    pos: 100
  },
  {
    name: 'TBM Index',
    link: 'index',
    pos: 200
  },
])

const currentIndex = ref(0)
let faders;

function changeChapter(link, index) {
  const y = document.getElementById(`${link.link}`).getBoundingClientRect().top +
    window.scrollY;
  window.scroll({
    top: y - 60,
    behavior: "smooth",
  });
  currentIndex.value = index;

}
function observe() {
  faders = document.querySelectorAll("section");

  const appearOnScroll = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {

        if (entry.isIntersecting) {
          history.pushState({}, "", `#${entry.target.id}`);
          let currentlyObserving = links.value.find(
            (link) => link.link === entry.target.id
          );

          currentIndex.value = links.value.findIndex(
            (link) => link === currentlyObserving
          );
          if (!slideViaHover.value) {
            bgPos.value = currentlyObserving.pos;

          }
        }
      });
    },
    {
      rootMargin: `-100px`,
    }
  );
  faders.forEach((fader) => {
    appearOnScroll.observe(fader);
  });
}

const menuOpen = ref(false)

const slideViaHover = ref(false)
const bgPos = ref(-100)

function slideBg(link) {
  slideViaHover.value = true;
  bgPos.value = link.pos;
  console.log(link)
}

function defaultBg() {
  slideViaHover.value = false;
  bgPos.value = links.value[currentIndex.value].pos;
}

onMounted(() => {
  setTimeout(() => {
    observe();
  }, 1000);
})
</script>

<template>
  <nav class="w-full fixed h-16 z-20">
    <!-- First set -->
    <div
      class="col-span-6 bg-[#e8d4827e] text-brown backdrop-blur-xl overflow-hidden group rounded-full md:flex top-6 left-0 right-0 m-auto w-[768px] fixed hidden">
      <div @click="changeChapter(link, index)" v-for="(link, index) in links" :key="'link-' + index"
        :class="[currentIndex === index ? 'text-dark' : 'text-green']"
        class="select-none first:hidden flex-1  hover:text-dark hover:underline group-hover:text-green py-4 leading-6 rounded-full h-full flex justify-center items-center hover:cursor-pointer  transition text-sm"
        @mouseover="slideBg(link)" @mouseleave="defaultBg">
        {{ link.name }} 
      </div>
      <div :style="[`transform: translateX(${bgPos}%)`]"
        class="z-[-2] w-1/3 rounded-full left-0 top-0 transition absolute h-full bg-yellow"></div>
      
    </div>
    <!-- Mobile button -->
    <div class="fixed top-0 left-0 ps-5 grid grid-cols-3 md:hidden  z-101 w-full">
      <div @click="menuOpen = !menuOpen" class="w-12 h-12 flex flex-col justify-center items-center">
        <span :class="[menuOpen ? 'open-first' : '']"></span>
        <span :class="[menuOpen ? 'open-second' : '']"></span>
      </div>
      <!-- Logo -->
          <!-- <div class="w-30 left-0 right-0 top-0 mt-2.5 absolute mx-auto">
            <img class="w-full h-auto" src="~/assets/images/nf-logo-black.png" alt="" />
          </div> -->
        </div>

        <div>

        </div>
    <!-- Mobile menu -->
    <div class="w-full h-16 fixed  bg-yellow mobile-nav  z-100 md:hidden"
      :class="[menuOpen ? 'rounded-none' : 'rounded-[50px]']">
      <div :class="[menuOpen ? 'translate-y-0' : 'translate-y-full']"
        class="ease-[cubic-bezier(0.77,_0.2,_0.05,_1)] duration-500 bg-green transition top-0 fixed bottom-0 left-0 right-0 w-screen h-screen">
        <div class="w-full mt-10 flex flex-col text-black p-5 ">
          <div @click="changeChapter(link, index)" v-for="(link, index) in links" :key="index"
            class="text-start my-3 first:hidden">
            <div class="text-base" @click="menuOpen = !menuOpen">
              {{ link.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<style scoped>
.mobile-nav {
  transition: border-radius 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
}

.mobile-fullpage {
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
}


span {
  width: 100%;
  height: 2px;
  background: #201f1d;
  border-radius: 2px;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
}

span:nth-child(odd) {
  margin-top: 1rem;
  transform-origin: center left;
}

span:nth-child(even) {
  margin-top: 0.6rem;
  transform-origin: center left;
}

.open-first {
  transform: translate(0.4rem, -0.6rem) rotate(42deg);
}

.open-second {
  transform: translate(0.4rem, 0.6rem) rotate(-42deg);
}
</style>