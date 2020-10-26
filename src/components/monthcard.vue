<template>
  <div class="card">
    <div id="title">
      <h1>{{month}}</h1>
    </div>
    <div id="description">
      <div id="teams">
        <h3>{{t1}} vs {{t2}}</h3>
      </div>
      <div id="info">
        <ul>
          <li><i class="fa fa-calendar-o" aria-hidden="true"></i>{{day}}</li>
          <li><i class="fa fa-clock-o" aria-hidden="true"></i>{{time}}</li>
          <li><i class="fa fa-map-marker" aria-hidden="true"></i>{{location}}</li>
          <li><i class="fa fa-comments" aria-hidden="true"></i>Chat</li>
        </ul>
      </div>
    </div>
    <div id="nav"></div>
  </div>
</template>

<script>
export default {
  name: 'MonthCard',
  props: ['month', 't1', 't2', 'day', 'time', 'location']
}
</script>

<style lang="scss" scoped>

  *{
    margin: 0;
    padding: 0;
  }

  .card {
    width: 95vw;
    height: 200px;
    border-radius: 15px;
    box-shadow: 0px 0px 10px grey;
    background-image: linear-gradient(to bottom, #bdbdbd, #efece6);
    display: grid;
    grid-template-areas:  "title"
                          "description"
                          "nav";
    grid-template-rows: 15% 80% 5%;
    margin-bottom: 25px;

    #title {
      grid-area: title;
      background-color: #50c35d;
      border-radius: 15px 15px 0 0;
      display: flex;
      justify-content: center;
      align-items: center;
      
      h1{
        color: white;
        font-family: 'Montserrat', sans-serif;
        font-size: 15px;
        text-transform: uppercase;
        letter-spacing: 10px;
      }
    }

    #description {
      grid-area: description;
      display: flex;
      align-items: center;

      #teams {
        width: 55%;
        align-self: flex-start;
        padding: 15px;
        
        h3 {
          font-weight: 700;
          color: #100080;
        }
      }

      #info {
        width: 45%;
        
        li {
          text-align: start;
          list-style: none;
          font-weight: 700;
          font-size: 16px;
          margin-bottom: 5px;
          color: black;
          
          i {
            font-weight: 800;
            margin-right: 10px;
          }
        }
      }
    }

    #nav{
      grid-area: nav;
    }
  }
</style>