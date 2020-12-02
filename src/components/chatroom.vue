<template>
  <div id="chatroom">
    <template v-if="user == null">
      <p>
        We're sorry, you can't access to the private chatrooms if you're not
        logged in.
      </p>
      <router-link to="/user" tag="button"> Login </router-link>
    </template>
    <template v-else>
      <Nav viewname="Forum"></Nav>
      <div class="contenedor">
        <h3>Game #{{ this.$route.params.month + this.$route.params.id }}</h3>
        <div id="message-cont">
          <div v-for="(message, index) in messages" :key="index">
            <div>{{ message.date }}</div>
            <div class="bubble">
              <img
                :src="message.photo"
                alt="photo_author"
                class="profile-pic"
              />
              <div class="info">
                <p>
                  <strong>{{ message.author }} said: </strong>
                </p>
                <p>{{ message.body }}</p>
                <p class="detail">
                  <i>{{ message.time }}</i>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="form">
          <form action="" @submit.prevent="post()">
            <input
              type="text"
              placeholder="Enter your message..."
              id="box"
              v-model="input"
            />
            <b-button pill type="submit" variant="primary">Send</b-button>
          </form>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import Nav from "./nav";
import { mapState } from "vuex";
import { db } from "../firebase/db";

export default {
  name: "Chatroom",
  // props: {
  //     date: String,
  // },
  components: {
    Nav,
  },
  computed: {
    ...mapState(["user"]),
  },
  data() {
    return {
      messages: [],
      input: null,
    };
  },
  methods: {
    post: function () {
      // const input = document.querySelector('#box')
      // console.log(this.input)
      let folder = db.ref(
        "forum/matches/" +
          this.$route.params.month +
          "/" +
          this.$route.params.id
      );
      let message = {
        body: this.input,
        photo: this.user.photoURL,
        author: this.user.displayName,
        time: new Date().toLocaleTimeString(),
        date: new Date().toLocaleDateString(),
      };

      folder.push(message);
      this.input = null;

      // let folder = db.ref('users/' + this.user.uid)
      // let post = document.querySelector('#box').nodeValue
      // folder.push(post)
    },
  },
  mounted() {
    this.messages = [];
    db.ref(
      "forum/matches/" + this.$route.params.month + "/" + this.$route.params.id
    ).on("child_added", (snapshot) => {
      this.messages.push(snapshot.val());
    });
  },
};
</script>

<style lang="scss" scoped>
.contenedor {
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-size: 18px;
    letter-spacing: 3px;
    font-family: "Montserrat", sans-serif;
    text-transform: uppercase;
  }

  #message-cont {
    width: 90vw;
    height: 68vh;
    overflow: scroll;
  }
}

.bubble {
  background-color: white;
  border-radius: 15px;
  width: 90vw;
  min-height: 20vh;
  padding: 1em;
  margin: 1em 0;
  display: flex;
  overflow: hidden;
  .info {
    display: flex;
    flex-direction: column;
    width: 85vw;
    max-width: 85vw;
    min-height: 10vh;
    .detail {
      align-self: flex-end;
      color: #9799ca;
    }
  }
}
.profile-pic {
  border-radius: 50%;
  width: 4em;
  height: 4em;
  margin: 0 1em 0 0;
  align-self: center;
}

.btn-primary {
  background-color: #100080;
  border-color: #100080;
}
.form {
  position: absolute;
  bottom: 0;
  margin: 1em;
  #box {
    width: 68vw;
    border-radius: 20px;
    padding: 0.4em;
    margin-right: 1em;
  }
}
</style>