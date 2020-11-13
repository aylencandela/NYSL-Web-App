<template>
  <div class="home">
    <Nav viewname="home"></Nav>
    <template v-if="!landscape">
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
      <Carrousel2
        fstimg="1"
        sndimg="2"
        trdimg="3"
        fthimg="4"
      ></Carrousel2>
    </template>
  </div>
</template>

<script>
import Carrousel from "../components/carrousel.vue";
import Carrousel2 from "../components/landscapecarrousel.vue";
import Nav from "../components/nav.vue";
import { mapState } from "vuex";

export default {
  name: "home",
  components: {
    Nav,
    Carrousel,
    Carrousel2
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
