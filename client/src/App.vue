<template>
  <div id="app">
    <h1>{{ msg }}</h1>
      <div v-if="loggedIn === false">
        <g-signin-button
          :params="googleSignInParams"
          @success="onSignInSuccess"
          @error="onSignInError">
          Sign in with Google
        </g-signin-button>
      </div>
      <div v-if="loggedIn">
        <OrderForm/>
      </div>


  </div>
</template>

<script>
import OrderForm from './components/OrderForm';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Orderdroid',
      loggedIn: false,

      googleSignInParams: {
        client_id: '500421207324-4v1n543mv2v4njkv2tcjdujopunrkqge.apps.googleusercontent.com',
        hosted_domain: 'storyous.com'
      }
    }
  },

  components: {
    OrderForm
  },

    methods: {
      onSignInSuccess (googleUser) {
        // `googleUser` is the GoogleUser object that represents the just-signed-in user. 
        // See https://developers.google.com/identity/sign-in/web/reference#users 
        const profile = googleUser.getBasicProfile() // etc etc 
        //console.log(profile);
        this.loggedIn = true;
        this.msg = "Orderdroid"
      },
      onSignInError (error) {
        // `error` contains any error occurred. 
        console.log('OH NOES', error)
        this.loggedIn = false;
      }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.g-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #3c82f7;
  color: #fff;
  box-shadow: 0 3px 0 #0f69ff;
}

</style>
