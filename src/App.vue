<template>
  <div id="app">
    <transition name="slide" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "App",
  components: {},
  methods: {
    ...mapMutations(["listenResize", "listenUser"]),
  },
  beforeMount() {
    this.listenResize();
    this.listenUser();
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  min-height: 100vh;
  background-color: #efece6;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.3s, transform 0.5s;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translatex(100%);
}
</style>
