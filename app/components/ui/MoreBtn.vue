<template>
  <div data-aos="fade-in">
    <button @click="toDownload" class="more-btn btn btn-outline-light">
      Find Out More
    </button>
  </div>
</template>
<script>
export default {
  methods: {
    toDownload() {
      const y =
        document.getElementById(`download`).getBoundingClientRect().top +
        window.scrollY;
      window.scroll({
        top: y,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.more-btn {
  padding: 0.8rem 1.2rem 0.8rem 1.2rem;
  border: 1px solid white;
  border-radius: 30px;
}
.more-btn:hover {
  background: #d9d9d9;
}
</style>