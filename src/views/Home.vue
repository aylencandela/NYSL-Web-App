<template>
  <div class="home">
    <Navbar viewname="home"></Navbar>
    <Carrousel title="August 4" desc="NYSL Fundraiser" title2="August 6" desc2="Season Kick-Off: Meet the Teams" fstimg="1" sndimg="2" trdimg="3" fthimg="4"></Carrousel>
    <Carrousel title="September 1" desc="First Game of the Season (Check Schedule for details)" fstimg="5" sndimg="6" trdimg="7" fthimg="8"></Carrousel>
  </div>
</template>

<script>
import Navbar from "../components/navbar.vue"
import Carrousel from "../components/carrousel.vue"

export default {
  name: 'home',
  components: {
    Navbar,
    Carrousel
  }
}
</script>

<style lang="scss" scoped>
  * {
    margin: 0;
    padding: 0;
  }
  h1 {
    position: absolute;
    bottom: 0;
    color: white;
    font-family: 'Montserrat';
  }
</style>
