<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  name: 'App',
  components: {
    
  },
  methods: {
    ...mapMutations(['listenResize'])
  },
  beforeMount() {
    this.listenResize()
  }
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  min-height: 100vh;
  background-color: #efece6;
}

</style>
