<template>
  <div class="schedule">
    <Navbar viewname="schedule"></Navbar>
    <div id="cards">
      <MonthCard :month="september"></MonthCard>
      <MonthCard :month="october"></MonthCard>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/navbar.vue"
import MonthCard from "../components/monthcard2.vue"
import {fallSchedule} from "../game-info.js"

export default {
  name: 'Schedule',
  components: {
    Navbar,
    MonthCard,
  },
  data: function(){
    return {
      september: fallSchedule.september,
      october: fallSchedule.october
    }
  }
}
</script>

<style lang="scss" scoped>
    *{
        margin: 0;
        padding: 0;
    }
    #cards{
      margin-top: 5vh;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
</style>