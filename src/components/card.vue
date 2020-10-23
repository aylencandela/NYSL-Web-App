<template>
  <div class="monthCard">
    <div id="card">
      <h3>{{month}}</h3>
      <p>{{t1}} vs {{t2}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MonthCard',
  props: ['month', 't1', 't2', 'day', 'time', 'location']
}
</script>

<style lang="scss" scoped>
  .monthCard{
    display: flex;
    justify-content: center;
  }

  #card {
    position: relative;
    width: 300px;
    height: 200px;
    border-radius: 15px;
    box-shadow: 0px 0px 10px grey;
    background-image: linear-gradient(to bottom, #bdbdbd, #efece6);

    h3 {
      position: absolute;
      top: 0;
      background-color: #50c35d;
      width: 100%;
      height: 15%;
      border-radius: 15px 15px 0 0;
      color: white;
      font-family: 'Montserrat', sans-serif;
      font-size: 15px;
      text-transform: uppercase;
      letter-spacing: 10px;
     }
    }
</style>