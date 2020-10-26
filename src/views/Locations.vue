<template>
  <div class="locations">
    <Navbar viewname="locations"></Navbar>
    <div id="accordion">
      <Accordion></Accordion>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/navbar.vue";
import Accordion from "../components/locataccordion.vue"

export default {
  name: 'Locations',
  components: {
    Navbar,
    Accordion
  }
}
</script>

<style lang="scss" scoped>
  #accordion{
    margin-top: 5vh;
    display: flex;
    justify-content: center;
  }
</style>