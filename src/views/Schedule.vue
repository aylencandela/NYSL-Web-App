<template>
  <div class="schedule">
    <Navbar viewname="schedule"></Navbar>
    <div id="cards">
      <MonthCard :month="september[0].month" :t1="september[0].team1" :t2="september[0].team2" :day="september[0].date" :time="september[0].time" :location="september[0].location"></MonthCard>
      <MonthCard month="october" t1="U4" t2="U5" day="04/39/12" time="9hs" location="Aksjdf"></MonthCard>

    </div>
  </div>
</template>

<script>
import Navbar from "../components/navbar.vue"
import MonthCard from "../components/monthcard.vue"
import {fallSchedule} from "../game-info.js"

export default {
  name: 'Schedule',
  components: {
    Navbar,
    MonthCard,
  },
  data: function(){
    return {
      september: null,
    }
  },
  methods: {
    getMonthInfo: function(){
      this.september = fallSchedule.september
      console.log(this.september)
    }
  },
  created() {
    this.getMonthInfo()
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