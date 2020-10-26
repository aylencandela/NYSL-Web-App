<template>
  <div class="navbar">
    <div id="header">
      <div id="toggle">
        <div id="menu" role="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div> 
        <div class="collapse" id="collapseExample">
          <Sidebar></Sidebar>
        </div>
      </div>
      <h1>{{viewname}}</h1>
      <img src="../assets/nysl_logo.png" alt="logo" id="logo">
    </div>
  </div>
</template>

<script>
import Sidebar from "./sidebar"

  export default {
      name: "Navbar",
      props: {
          viewname: String
      },
      components: {
        Sidebar
      }
  }
</script>

<style lang="scss" scoped>
  * , .navbar{
      padding: 0;
      margin: 0;
      font-family: 'Montserrat', sans-serif;
      font-size: 15px;
  }

  #header {
    background-color: #100080;
    border-radius: 0 0 25px 25px;
    color: #efece6;
    width: 100vw;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
      h1 {
        text-transform: uppercase;
        letter-spacing: 10px;
      }
  
      #logo {
        width: 40px;
        height: 40px;
        margin-right: 15px;
      } 

      #menu .line{
        margin: 5px 15px;
        width: 2rem;
        height: 3px;
        background: white;
        border-radius: 5px;
      }
  }

  #nav {
    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>