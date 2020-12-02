<template>
    <div>
        <template v-if="user == null">
            <div class="bg-top">
                <h3>Welcome back!</h3>
                <p>Please login to have full access to the chatrooms</p>
            </div>
            <div class="bg-bottom">
                <button @click="login()">Login with Google</button>
            </div>
        </template>
        <template v-else>
            <button>
                <router-link to="user-info">
                    My Info
                </router-link>
            </button>
            <button @click="logout()">Log Out</button>
        </template>
    </div>
</template>

<script>
import firebase from "firebase/app";
import 'firebase/auth';
import { mapState } from 'vuex';

export default {
    name: 'User',
    computed: {
        ...mapState(['user'])
    },
    methods: {
        login() {
            let provider = new firebase.auth.GoogleAuthProvider()
            firebase
            .auth()
            .signInWithPopup(provider)
            .then(result => {
                // this.changeUserInfo(result.user)
                console.log('Logged In ' + result.user.email)
            })
            .catch(error => {
                console.log(error.code)
            })
        },
        logout() {
            firebase
            .auth()
            .signOut()
            .then(() => {
                // this.changeUserInfo(null)
                console.log('Logged Out')

            })
            .catch(error => {
                console.log(error.code)
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.bg-top {
    display: block;
    height: 50vh;
    width: 100vw;
    background-color: #9799ca;
    border-radius: 0 0 60% 0;
}
.bg-bottom {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>