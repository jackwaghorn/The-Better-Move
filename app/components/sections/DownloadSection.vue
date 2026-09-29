<script setup lang="ts">
const hoveringDownload = ref(false)
</script>

<template>
  <section id="download" class="w-full flex justify-center flex-col context-center py-20 bg-gradient-to-t from-transprent to-purple">
    <h1 class="text-center text-xl">Download</h1>
    <div class="text-base leading-8 md:leading-10 text-center my-8 px-4">Click the button below to access the full PDF report.</div>
    <div class="w-full  relative flex items-center justify-center">
      <div class="col-12 btn-container position-relative">
        <div :class="[hoveringDownload ? 'download-text-light' : '']" @click="download" class="download-text">
          Read the report
        </div>
        <a target="_blank" href="https://7my37nsm8cb.typeform.com/to/yIjtQoPS">
          <svg class="ripple" xmlns="http://www.w3.org/2000/svg" height="100%" width="100%">
            <g id="anims">
              <circle id="rp1" r="1.8em" />
              <circle id="rp2" r="1.8em" />
              <circle id="rp3" r="1.8em" />
              <circle id="rp4" r="1.8em" />
            </g>

            <circle @mouseover="hoveringDownload = true" @mouseout="hoveringDownload = false" @click="download"
              class="download-btn" r="5em" cx="50%" cy="50%" stroke="#e8fcd4" stroke-width="1" />
          </svg>
        </a>
      </div>
    </div>
    <!-- Logos -->
    <div class="w-full flex items-center px-4 md:px-0 justify-center gap-4 md:gap-20 pb-8">
      <a target="_blank" href="https://www.nighttime.org/">
        <img loading="lazy" class="w-[6rem] md:w-[12rem]" src="~/assets/images/nf-logo.png" />
      </a>

    </div>

    <!-- Share -->
    <div class="w-full px-4 flex flex-col items-center justify-between md:justify-center">
      <div class="w-full text-sm text-center my-1">Share</div>
      <div
        class="py-4 rounded-full w-full md:w-auto px-6 md:px-12 flex items-center justify-between md:justify-center gap-4 md:gap-12 outline-1 outline-green outline">
        <SocialShare network="facebook" :label="false" />
        <SocialShare network="twitter" :label="false" />
        <SocialShare network="linkedin" :label="false" />
        <SocialShare network="whatsapp" :label="false" />
        <SocialShare network="email" :label="false" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.logo {
  width: 10rem;
}

.penn-logo {
  width: 6.5rem;
}
.mtl-logo {
  width: 13rem;
}
.rdam-logo {
  width: 8rem;
}
h3 {
  font-family: SkModernistRegular;
}
.download-text {
  height: 1.3rem;
  width: 8rem;
  bottom: 0;
  text-align: center;
  top: 0;
  margin: auto;
  z-index: 2;
  position: absolute;
  left: 0;
  right: 0;
  color: black;
}
.share-container {
  border:1px solid #e8fcd4;
  border-radius:40px;
  /* background:#e8fcd4; */

}
.share-text {
    color: #e8fcd4;
}
.download-text-light {
  color: #201f1d;
}
.download-text {
  pointer-events: none;
}

.download-btn {
  transition: transform ease 100ms, fill 0.15s ease-in-out;
  transform-origin: center center;
}
.download-btn:hover {
  transform-origin: center center;
  transform: scale(0.9);
  cursor: pointer;

  fill: #e8fcd4 !important;
}

/* circle:last-child:hover {
  fill: #d9d9d9 !important;
} */

.title {
  font-family: SkModernistRegular;
  line-height: 2rem;
  font-size: 1.8rem;
  color: #e8fcd4;
}
@media (min-width: 768px) {
  .title {
    font-size: 2.8rem;
    line-height: 2.8rem;
  }
}

.btn-container {
  height: 34rem;
}

.ripple {
  bottom: 0;
  top: 0;
  margin: auto;
  position: absolute;

  left: 0;
  right: 0;
}
.download {
  height: auto;
  min-height: 100vh;
  background: #201f1d;
  overflow: hidden;
}

circle {
  fill: #747474;
  opacity: 0.3;
}
svg > circle:last-child {
  fill: #e8fcd4 !important;
  opacity: 1;
}
svg g {
  transform: translate(50%, 50%);
}
#rp1 {
  animation: ripple1 2s linear infinite;
  position: absolute;
  bottom: 0;
}
@keyframes ripple1 {
  0% {
    transform: scale(5.5);
    opacity: 0.3;
  }
  100% {
    transform: scale(8.5);
    opacity: 0;
  }
}
h3 {
  color: #e8fcd4;
}

#rp2 {
  animation: ripple2 2s linear infinite;
}
@keyframes ripple2 {
  0% {
    transform: scale(3.5);
  }
  100% {
    transform: scale(5.5);
  }
}
#rp3 {
  animation: ripple3 2s linear infinite;
}
@keyframes ripple3 {
  0% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(3.5);
  }
}
#rp4 {
  animation: ripple4 2s linear infinite;
}
@keyframes ripple4 {
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1.5);
  }
}
</style>