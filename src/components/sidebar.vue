<template>
  <div class="sidebar">
    <div id="container">
      <div id="header">
        <img src="../assets/nysl_logo.png" alt="logo" id="logo">
        <h1>NYSL</h1>
        <div id="close" @click="hideSidebar">
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>
      <div id="nav">
        <ul>
          <li>
            <router-link to="/"><i class="fa fa-home"></i>Home</router-link>
          </li>
          <li>
            <router-link to="/schedule"><i class="fa fa-calendar"></i>Schedule</router-link>
          </li>
          <li>
            <router-link to="/locations"><i class="fa fa-map-marker"></i>Locations</router-link>
          </li>
          <li>
            <router-link to="/register"><i class="fa fa-futbol-o"></i>Register</router-link>
          </li>
        </ul>
      </div>
      <router-view/>      
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  methods: {
    hideSidebar(){
      let sidebar = document.getElementById("container")
        sidebar.classList += "collapse"
        // no puedo volver a tocar el menu?
      }
    }
}

</script>

<style lang="scss" scoped>
  * {
    z-index:1000;
  }
  #container {
    width: 60vw;
    height: 100vh;
    background-color:  #100080;
    border-radius: 0 25px 25px 0px;
    position: absolute;
    top: 0;
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 10px;
    
    #header {
      width: 100%;
      height: 15%;
      font-size: 20px;
      display: flex;
      justify-content: space-around;
      align-items: center;

      img {
        width: 50px;
        height: 50px;
        margin: 0 10px;
      }

      h1 {
        margin: 0;
        font-size: 15px;
        display: inline;
      }

      #close .line{
        position: relative;
        width: 2rem;
        height: 4px;
        background: white;
        border-radius: 5px;

        &:first-child {
          position: absolute;
          transform: rotateZ(45deg)
        }
        &:last-child {
          transform: rotateZ(-45deg)
        }
      }
    }

    #nav {
      text-transform: unset;
      letter-spacing: 0;

      ul {
        padding: 0;
        margin: 0;
        li {
          list-style: none;
          width: 100%;
          a {
            font-weight: bold;
            padding: 15px 20px;
            padding-left: 30px;
            color: #9799ca;
            display: flex;
            justify-content: space-between;
            text-transform: none;

            i{
              font-size: 20px;
            }

            &.router-link-exact-active {
              color: white;
              background-color: #9799caad;
              border-right: 5px #dda448 solid;
            }
          }
        }
      }
    }
  }
</style>