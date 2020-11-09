<template>
  <div class="home">
    <template v-if="!landscape">
      <Nav viewname="home"></Nav>
      <Carrousel
        title="August 4"
        desc="NYSL Fundraiser"
        title2="August 6"
        desc2="Season Kick-Off: Meet the Teams"
        fstimg="1"
        sndimg="2"
        trdimg="3"
        fthimg="4"
      ></Carrousel>
      <Carrousel
        title="September 1"
        desc="First Game of the Season (Check Schedule for details)"
        fstimg="5"
        sndimg="6"
        trdimg="7"
        fthimg="8"
      ></Carrousel>
    </template>
    <template v-else>
      <Nav viewname="home"></Nav>
    </template>
  </div>
</template>

<script>
import Carrousel from "../components/carrousel.vue";
import Nav from "../components/nav.vue";
import { mapState } from "vuex";

export default {
  name: "home",
  components: {
    Nav,
    Carrousel,
  },
  data: function () {
    return {};
  },
  computed: {
    ...mapState(["landscape"]),
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
</style>
