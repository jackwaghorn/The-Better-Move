<template>
  <div
    @click="menuOpen = !menuOpen"
    class="nav-btn d-flex justify-content-center align-items-center flex-column"
  >
    <span :class="[menuOpen ? 'open-first' : '']"></span>
    <span :class="[menuOpen ? 'open-second' : '']"></span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuOpen: false,
    };
  },
};
</script>
<style scoped>
.nav-btn {
  width: 2.6rem;
  height: 3rem;
}
.nav-btn:hover {
  cursor: pointer;
}
span {
  width: 100%;
  height: 2px;
  background: #201f1d;
  border-radius: 2px;
  transition: transform .5s cubic-bezier(.77,.2,.05,1);
}
span:nth-child(odd) {
  margin-top: 1.5;
  transform-origin: center left;
}
span:nth-child(even) {
  margin-top: 0.6rem;
  transform-origin: center left;
}

.open-first {
  transform: translate(0.3rem, -0.5rem) rotate(42deg);
}
.open-second {
  transform: translate(0.3rem, 0.5rem) rotate(-42deg);
}
</style>