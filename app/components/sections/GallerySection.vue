<template>
  <div
    class="
      gallery
      container-fluid
      d-flex
      justify-content-center
      align-items-center
      p-0
    "
  >
    <Swiper
      :modules="modules"
      :slidesPerView="1"
      :spaceBetween="0"
      :loop="true"
      class="d-flex justify-content-center align-items-center mt-5 mt-md-0"
      navigation
    >
      <SwiperSlide
        v-for="(image, index) in galleryData"
        :key="index"
        class="
          d-flex
          justify-content-center
          flex-column
          align-items-center
          p-0 p-md-5
        "
      >
        <img
          class="img-fluid p-md-4 p-0 lazyload"
          :data-src="image.image.url"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>
<script>
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
  data() {
    return {
      galleryData: [],
    };
  },
  methods: {
    getData() {
      this.$prismic.client.getSingle("gallery").then((response) => {
        this.galleryData = response.data.gallery;
      });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
<style scoped>
.gallery {
  min-height: 100vh;
  background: #201f1d;
}
img {
  border-radius: 50px;
  user-select: none;
}
</style>