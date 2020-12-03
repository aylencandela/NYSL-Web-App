<template>
  <div class="user-info">
    <div class="bg-header">
      <h2>Welcome back,</h2>
      <h1>{{ user.displayName }}</h1>
      <img id="user-photo" :src="user.photoURL" alt="" />
    </div>
    <div class="body">
      <ul>
        <li>
          <div class="icons">
            <svg
              width="20"
              viewBox="-42 0 512 512.002"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m210.351562 246.632812c33.882813 0 63.222657-12.152343 87.195313-36.128906 23.972656-23.972656 36.125-53.304687 36.125-87.191406 0-33.875-12.152344-63.210938-36.128906-87.191406-23.976563-23.96875-53.3125-36.121094-87.191407-36.121094-33.886718 0-63.21875 12.152344-87.191406 36.125s-36.128906 53.308594-36.128906 87.1875c0 33.886719 12.15625 63.222656 36.132812 87.195312 23.976563 23.96875 53.3125 36.125 87.1875 36.125zm0 0"
              />
              <path
                d="m426.128906 393.703125c-.691406-9.976563-2.089844-20.859375-4.148437-32.351563-2.078125-11.578124-4.753907-22.523437-7.957031-32.527343-3.308594-10.339844-7.808594-20.550781-13.371094-30.335938-5.773438-10.15625-12.554688-19-20.164063-26.277343-7.957031-7.613282-17.699219-13.734376-28.964843-18.199219-11.226563-4.441407-23.667969-6.691407-36.976563-6.691407-5.226563 0-10.28125 2.144532-20.042969 8.5-6.007812 3.917969-13.035156 8.449219-20.878906 13.460938-6.707031 4.273438-15.792969 8.277344-27.015625 11.902344-10.949219 3.542968-22.066406 5.339844-33.039063 5.339844-10.972656 0-22.085937-1.796876-33.046874-5.339844-11.210938-3.621094-20.296876-7.625-26.996094-11.898438-7.769532-4.964844-14.800782-9.496094-20.898438-13.46875-9.75-6.355468-14.808594-8.5-20.035156-8.5-13.3125 0-25.75 2.253906-36.972656 6.699219-11.257813 4.457031-21.003906 10.578125-28.96875 18.199219-7.605469 7.28125-14.390625 16.121094-20.15625 26.273437-5.558594 9.785157-10.058594 19.992188-13.371094 30.339844-3.199219 10.003906-5.875 20.945313-7.953125 32.523437-2.058594 11.476563-3.457031 22.363282-4.148437 32.363282-.679688 9.796875-1.023438 19.964844-1.023438 30.234375 0 26.726562 8.496094 48.363281 25.25 64.320312 16.546875 15.746094 38.441406 23.734375 65.066406 23.734375h246.53125c26.625 0 48.511719-7.984375 65.0625-23.734375 16.757813-15.945312 25.253906-37.585937 25.253906-64.324219-.003906-10.316406-.351562-20.492187-1.035156-30.242187zm0 0"
              />
            </svg>
            <h5>Full name:</h5>
          </div>
          <p>{{ user.displayName }}</p>
        </li>
        <li>
          <div class="icons">
            <svg
              width="20"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 433.664 433.664"
              style="enable-background: new 0 0 433.664 433.664"
              xml:space="preserve"
            >
              <g>
                <g>
                  <path
                    d="M229.376,271.616c-4.096,2.56-8.704,3.584-12.8,3.584s-8.704-1.024-12.8-3.584L0,147.2v165.376c0,35.328,28.672,64,64,64
                          h305.664c35.328,0,64-28.672,64-64V147.2L229.376,271.616z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    d="M369.664,57.088H64c-30.208,0-55.808,21.504-61.952,50.176l215.04,131.072l214.528-131.072
                          C425.472,78.592,399.872,57.088,369.664,57.088z"
                  />
                </g>
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
            <h5>Email:</h5>
          </div>
          <p>{{ user.email }}</p>
        </li>
        <li>
          <div class="icons">
            <svg
              width="20"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 27.442 27.442"
              style="enable-background: new 0 0 27.442 27.442"
              xml:space="preserve"
            >
              <g>
                <path
                  d="M19.494,0H7.948C6.843,0,5.951,0.896,5.951,1.999v23.446c0,1.102,0.892,1.997,1.997,1.997h11.546
                  c1.103,0,1.997-0.895,1.997-1.997V1.999C21.491,0.896,20.597,0,19.494,0z M10.872,1.214h5.7c0.144,0,0.261,0.215,0.261,0.481
                  s-0.117,0.482-0.261,0.482h-5.7c-0.145,0-0.26-0.216-0.26-0.482C10.612,1.429,10.727,1.214,10.872,1.214z M13.722,25.469
                  c-0.703,0-1.275-0.572-1.275-1.276s0.572-1.274,1.275-1.274c0.701,0,1.273,0.57,1.273,1.274S14.423,25.469,13.722,25.469z
                  M19.995,21.1H7.448V3.373h12.547V21.1z"
                />
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
            <h5>Phone number:</h5>
          </div>
          <p>{{ user.phoneNumber }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "UserInfo",
  computed: {
    ...mapState(["user"]),
  },
};
</script>

<style lang="scss" scoped>
.bg-header {
  width: 100vw;
  height: 25vh;
  background: linear-gradient(130deg, #100080, #2f33a8);
  border-radius: 0 0 35% 35%;
  box-shadow: 0px 10px 50px 10px grey;
  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  color: white;
  h2 {
    font-size: 16px;
  }
  h1 {
    text-align: center;
    font-size: 24px;
    letter-spacing: 4px;
    text-shadow: 0px 0px 10px black;
    text-transform: uppercase;
  }
}

#user-photo {
  width: 6em;
  border-radius: 50%;
  position: absolute;
  bottom: -3em;
  border: 5px solid #9799ca;
  border-left-color: #50c35d;
  border-top-color: #dda448;
  border-bottom-color: #100080;
}
.body {
  margin-top: 20vh;
  height: 30vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  ul li {
    display: flex;
    flex-direction: column;
    .icons {
      display: flex;
      h5 {
        font-family: "Montserrat", sans-serif;
        font-size: 15px;
        letter-spacing: 4px;
        text-transform: uppercase;
      }
      svg {
        margin-right: 1em;
      }
    }
    p {
      margin-top: 1em;
      font-family: sans-serif;
      width: 78vw;
      height: 2.5em;
      padding-top: 0.5em;
      padding-left: 0.5em;
      background-color: #a9abdfbe;
      border-radius: 5px;
      border-bottom: 5px #dda448 solid;
    }
  }
}
</style>