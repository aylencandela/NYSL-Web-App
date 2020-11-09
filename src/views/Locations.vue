<template>
  <div class="locations">
    <Nav viewname="locations"></Nav>
    <div id="accordion">
      <Accordion></Accordion>
    </div>
  </div>
</template>

<script>
import Nav from "../components/nav.vue";
import Accordion from "../components/locataccordion.vue";

export default {
  name: "Locations",
  components: {
    Nav,
    Accordion,
  },
};
</script>

<style lang="scss" scoped>
#accordion {
  margin-top: 5vh;
  display: flex;
  justify-content: center;
}
</style>