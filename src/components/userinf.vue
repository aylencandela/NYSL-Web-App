<template>
  <div class="user-info">
      <div id="header">

      </div>
      <img id="user-photo" :src="user.photoURL" alt="">
      <h2>{{user.displayName}}</h2>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Userinf',
    computed: {
        ...mapState(['user'])
    }
}
</script>

<style lang="scss" scoped>
#header {
    width: 100vw;
    height: 20vh;
    
}

#user-photo {
    width: 100px;
    border-radius: 50%;
}

</style>