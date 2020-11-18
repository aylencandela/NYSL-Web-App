<template>
  <div class="locations">
  <Nav viewname="locations"></Nav>
    <template v-if="!landscape">
        <div id="accordion">
          <Accordion></Accordion>
        </div>
    </template>
    <template v-else>
      <div class="cont">
          <Modal v-for="(loc,index) in locations" :key="index" :location="loc" :modalId="index"></Modal>
      </div>
    </template>
  </div>
</template>

<script>
import Nav from "../components/nav.vue";
import { locations } from "../location-info.js";
import Accordion from "../components/locataccordion.vue";
import Modal from "../components/locAccLandscape.vue"
import { mapState } from 'vuex'

export default {
  name: "Locations",
  components: {
    Nav,
    Accordion,
    Modal
  },
  data: function () {
    return {
      locations: locations.data
    };
  },
  computed: {
    ...mapState(["landscape"]),
  },
};
</script>

<style lang="scss" scoped>
#accordion {
  margin-top: 5vh;
  display: flex;
  justify-content: center;
}

.cont {
  margin-top: 5vh;
  max-width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>