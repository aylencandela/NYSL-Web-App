<template>
  <div class="schedule">
    <Navbar viewname="schedule"></Navbar>
    <MonthCard month="september" t1="asd" t2="asdd" day="04/39/12" time="9hs" location="Aksjdf"></MonthCard>
  </div>
</template>

<script>
import Navbar from "../components/navbar.vue"
import MonthCard from "../components/card.vue"

export default {
  name: 'Schedule',
  components: {
    Navbar,
    MonthCard,
  }
}
</script>

<style lang="scss" scoped>
    *{
        margin: 0;
        padding: 0;
    }
</style>