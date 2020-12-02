<template>
  <!-- siempre tiene que haber un div que englobe todo, por es no andaba el v-for -->
  <div>
    <b-carousel id="carousel-games" controls :interval="4000">
      <b-carousel-slide v-for="(game, index) in month" :key="index">
        <template slot="img">
          <div class="contenedor">
            <div class="myCard">
              <div id="title" :class="color">
                <h1>{{ game.month }}</h1>
              </div>
              <div id="description">
                <div id="teams">
                  <h3>{{ game.team1 }} vs {{ game.team2 }}</h3>
                  <img
                    :src="require('../assets/shields/' + game.team1 + '.png')"
                    class="shields mr-3"
                  />
                  <img
                    :src="require('../assets/shields/' + game.team2 + '.png')"
                    class="shields"
                  />
                </div>
                <div id="info">
                  <ul>
                    <li>
                      <i class="fa fa-calendar-o" aria-hidden="true"></i
                      >{{ game.date }}
                    </li>
                    <li>
                      <i class="fa fa-clock-o" aria-hidden="true"></i
                      >{{ game.time }}
                    </li>
                    <li>
                      <i class="fa fa-map-marker" aria-hidden="true"></i
                      >{{ game.location }}
                    </li>
                    <li>
                      <router-link
                        :to="'/chatroom/' + game.month + '/' + index"
                      >
                        <i class="fa fa-comments" aria-hidden="true"></i>Chat
                      </router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "MonthCard",
  props: {
    month: Array,
    color: String,
  },
};
</script>

<style lang="scss" scoped>
.contenedor {
  width: 100vw;
  height: 290px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.myCard {
  width: 90vw;
  height: 200px;
  border-radius: 15px;
  box-shadow: 0px 0px 10px grey;
  background-image: linear-gradient(to bottom, #bdbdbd, #efece6);
  display: grid;
  grid-template-areas:
    "title"
    "description";
  grid-template-rows: 15% 85%;
  margin-bottom: 25px;

  #title {
    grid-area: title;
    padding-top: 7px;
    border-radius: 15px 15px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;

    &.bg-yellow {
      background-color: #dda448;
    }

    &.bg-green {
      background-color: #50c35d;
    }

    h1 {
      color: white;
      font-family: "Montserrat", sans-serif;
      font-size: 15px;
      text-transform: uppercase;
      letter-spacing: 10px;
    }
  }

  #description {
    grid-area: description;
    display: flex;
    justify-content: center;
    align-items: center;

    #teams {
      width: 55%;
      align-self: flex-start;
      text-align: center;
      padding-top: 15px;

      h3 {
        font-weight: 700;
        color: #100080;
      }

      .shields {
        width: 4em;
      }
    }

    #info {
      width: 45%;

      ul {
        padding-left: 5px;
      }

      li {
        text-align: start;
        list-style: none;
        font-weight: 700;
        font-size: 14px;
        margin-bottom: 5px;
        color: black;

        i {
          font-weight: 800;
          margin-right: 10px;
        }
      }
    }
  }
}
</style>