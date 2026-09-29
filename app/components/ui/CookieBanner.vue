<template>
  <div v-if="isOpen" class="cookie">
    <div class="container-fluid row p-2 m-0 ">
      <div class="cookie_content col-md-9 col-12 my-md-3 my-0 mt-2 ">
      
        {{ message }}
      </div>
      <div class="col-auto  my-3 d-flex justify-content-between"> <div @click="accept" class="cookie_button accept btn btn-outline-light me-4">
        {{ buttonTextAccept }}
      </div>
      <div @click="deny" class="cookie_button deny btn btn-outline-light">
        {{ buttonTextDeny }}
      </div></div>
     
    </div>
  </div>
</template>
<script>
export default {
  name: "CookieBanner",
  props: {
    buttonTextAccept: {
      type: String,
      default: "Accept",
    },
    buttonTextDeny: {
      type: String,
      default: "Deny",
    },
    message: {
      type: String,
      default: "This website utilises cookies to enhance your browsing experience and improve our services. By continuing to explore our site, you consent to the use of cookies.",
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },

  created() {
    if (!this.getGDPR() === true) {
      this.isOpen = true;
    }
    
  },
  methods: {
    getGDPR() {
      return localStorage.getItem("GDPR:accepted", true);
    },
    accept() {
      this.isOpen = false;
      localStorage.setItem("GDPR:accepted", true);
    },
    deny() {
      this.isOpen = false;
      localStorage.setItem("GDPR:accepted", false);
    },
  },
};
</script>
<style scoped>
.cookie {
  position: fixed;
box-shadow:0px 0px 15px 5px #0000004f;
  background: #201f1d;
  z-index: 10;
  width: 100%;
  bottom: 0;
}
.cookie_content {
  text-align: left;
  color: #a0a592;
}

.cookie_button.accept {
  text-align: center;
  color: #a0a592 !important;
  cursor: pointer;
  padding: 0.8rem 2rem 0.8rem 2rem;
  border-radius: 30px;
  border-color: #a0a592 !important;
}
.cookie_button.accept:hover {
  background: #a0a592 !important;
  color:#201f1d !important;
}
.cookie_button.deny:hover {
  background: #a0a592 !important;
  color:#201f1d !important;
}
.cookie_button.deny {
    border-color: #a0a592 !important;
  text-align: center;
  color: #a0a592 !important;
  cursor: pointer;
  padding: 0.8rem 2rem 0.8rem 2rem;
  border-radius: 30px;
}
</style>