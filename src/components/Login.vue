<template>
  <div class="login">
      <div id="firebaseui-auth-container"></div>
  </div>
</template>




<script>
import firebase from 'firebase';
import firebaseui from 'firebaseui';
import {config} from '../helpers/firebaseConfig';

export default {
  name: 'login',
  mounted() {
      var uiConfig = {
          signInSuccessUrl: '/',
          signInOptions: [
              firebase.auth.GoogleAuthProvider.PROVIDER_ID,
              firebase.auth.EmailAuthProvider.PROVIDER_ID
          ]
      };
      var ui = new firebaseui.auth.AuthUI(firebase.auth());
      ui.start('#firebaseui-auth-container',uiConfig);
  },
  data() {
    return {

    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

.many-turtles {
    color: red;
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
  color: #35495E;
}
</style>
