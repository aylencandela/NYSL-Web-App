<template>
  <div class="navbar">
    <div id="header">
      <div id="toggle">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
      </div>
      <h1>{{viewname}}</h1>
      <img src="../assets/nysl_logo.png" alt="logo" id="logo">
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/schedule">Schedule</router-link> |
      <router-link to="/locations">Locations</router-link> |
      <router-link to="/register">Register</router-link>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Navbar",
        props: {
            viewname: String
        }
    }
</script>

<style lang="scss">
    *{
        margin:0;
    }

    #header{
        background-color: #100080;
        border-radius: 0 0 25px 25px;
        color: #efece6;
        width: 100vw;
        height: 10vh;
        display: flex;
        justify-content: space-between;
            #toggle{
            width: 20%;
            height: 50%;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            
                .line{
                width: 30px;
                height: 5px;
                background-color: white;
                }
            }
            #logo{
                width: 60px;
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