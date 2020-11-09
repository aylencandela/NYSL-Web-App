<template>
  <div class="schedule">
    <Nav viewname="schedule"></Nav>
    <div id="cards">
      <MonthCard :month="september" color="bg-green"></MonthCard>
      <MonthCard :month="october" color="bg-yellow"></MonthCard>
    </div>
  </div>
</template>

<script>
import Nav from "../components/nav.vue";
import MonthCard from "../components/monthcard.vue";
import { fallSchedule } from "../game-info.js";

export default {
  name: "Schedule",
  components: {
    Nav,
    MonthCard,
  },
  data: function () {
    return {
      september: fallSchedule.september,
      october: fallSchedule.october,
    };
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
#cards {
  width: 100vw;
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>