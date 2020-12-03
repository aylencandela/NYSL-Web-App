<template>
  <div>
    <div class="navbar">
      <div id="cont">
        <div id="toggle" v-b-toggle.sidebar-backdrop>
          <div id="menu">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
        </div>
        <h1>{{ viewname }}</h1>
        <b-img
          :src="require('../assets/nysl_logo.png')"
          alt="logo"
          width="35"
          height="35"
        ></b-img>
      </div>
    </div>

    <b-sidebar
      id="sidebar-backdrop"
      aria-labelledby="title"
      backdrop-variant="dark"
      backdrop
      shadow
      no-header
    >
      <template #default="{ hide }">
        <div id="sidebar">
          <div id="header">
            <b-img
              :src="require('../assets/nysl_logo.png')"
              alt="logo"
              width="50"
              height="50"
            ></b-img>
            <h1 id="title">NYSL</h1>
            <div id="close" @click="hide">
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
                <router-link to="/schedule"
                  ><i class="fa fa-calendar"></i>Schedule</router-link
                >
              </li>
              <li>
                <router-link to="/locations"
                  ><i class="fa fa-map-marker"></i>Locations</router-link
                >
              </li>
              <li>
                <router-link to="/register"
                  ><i class="fa fa-futbol-o"></i>Register</router-link
                >
              </li>
              <li>
                <router-link to="/user"
                  ><i class="fa fa-user"></i>User</router-link
                >
              </li>
            </ul>
          </div>
          <router-view />
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: "Nav",
  props: {
    viewname: String,
  },
};
</script>

<style lang="scss" scoped>
// Navbar styles
.navbar {
  padding: 0;
  margin: 0;
  font-family: "Montserrat", sans-serif;
}

#cont {
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
    font-size: 15px;
    margin: 0;
  }

  img {
    margin-right: 15px;
  }

  #menu .line {
    margin: 5px 15px;
    width: 2rem;
    height: 3px;
    background: white;
    border-radius: 10px;
  }
}

// Sidebar styles

#sidebar {
  width: 100%;
  height: 100%;
  background-color: #100080;
  position: absolute;
  top: 0;
  color: white;
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 10px;

  #header {
    width: 100%;
    height: 20%;
    font-size: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    img {
      margin: 0 5px;
    }

    h1 {
      margin: 0;
      font-size: 15px;
      display: inline;
    }

    #close .line {
      position: relative;
      width: 2rem;
      height: 4px;
      background: white;
      border-radius: 5px;

      &:first-child {
        position: absolute;
        transform: rotateZ(45deg);
      }
      &:last-child {
        transform: rotateZ(-45deg);
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
          text-decoration: none;

          i {
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