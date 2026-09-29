<template>
  <div class="dl-btn d-flex justify-content-center">
    <div class="wrapper">
      <svg
      :class="[darkmode ? '' : 'filter']"
        class="rotating"
        width="200"
        height="200"
        viewBox="0 0 200 200"
        color="#201f1d"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="spinner-secondHalf">
            <stop offset="0%" stop-opacity="0" stop-color="currentColor" />
            <stop offset="100%" stop-opacity="0.5" stop-color="currentColor" />
          </linearGradient>
          <linearGradient id="spinner-firstHalf">
            <stop offset="0%" stop-opacity="1" stop-color="currentColor" />
            <stop offset="100%" stop-opacity="0.5" stop-color="currentColor" />
          </linearGradient>
        </defs>

        <g stroke-width="5">
          <path
            stroke="url(#spinner-secondHalf)"
            d="M 4 100 A 96 96 0 0 1 196 100"
          />
          <path
            stroke="url(#spinner-firstHalf)"
            d="M 196 100 A 96 96 0 0 1 4 100"
          />

          <!-- 1deg extra path to have the round end cap -->
          <path stroke="currentColor" d="M 4 100 A 96 96 0 0 1 4 98" />
        </g>

        <animateTransform
          from="0 0 0"
          to="360 0 0"
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="5300ms"
        />
      </svg>
    </div>
    <div :class="[darkmode ? 'dark-text' : 'light-text']" class="text">
      Read the report
   
    </div>
  </div>
</template>
<script>
export default {
  props: ["darkmode"],
};
</script>

<style scoped>
.filter {
  filter: invert(100%);
}
.dark-text {
  color: black;
}
.light-text {
  color: white;
}
.text {
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  height: 1.5rem;
}
.dl-btn {
  position: relative;
  width: auto;
  height: auto;
}

.wrapper {
  transition: transform ease 150ms;
}

.wrapper:hover {
  cursor: pointer;
  animation-play-state: paused;
  transform: scale(0.9);
}
.text:hover {
  cursor: pointer;
}
.text:hover .wrapper {
  cursor: pointer;
  transform: scale(0.9);
}

@-webkit-keyframes rotating /* Safari and Chrome */ {
  from {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotating {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.rotating {
  -webkit-animation: rotating 3s linear infinite;
  -moz-animation: rotating 3s linear infinite;
  -ms-animation: rotating 3s linear infinite;
  -o-animation: rotating 3s linear infinite;
  animation: rotating 3s linear infinite;
}
</style>