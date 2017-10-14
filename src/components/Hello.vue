<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div id="turtle-count">
        We have <span v-bind:class="{'many-turtles': turtle > maxTurtles}">{{turtle}}</span> turtles.
    </div>

    Turtle: {{ turtle }}
  </div>
</template>



<script src="https://www.gstatic.com/firebasejs/4.5.1/firebase.js"></script>

<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC4hI9EJEgtlyuTE_S-s-LHnZ-AOR8MLmo",
    authDomain: "bike-track-238aa.firebaseapp.com",
    databaseURL: "https://bike-track-238aa.firebaseio.com",
    projectId: "bike-track-238aa",
    storageBucket: "bike-track-238aa.appspot.com",
    messagingSenderId: "383183824291"
  };
  firebase.initializeApp(config);

export default {
  name: 'hello',
  mixins: [mixin],
  data() {
    return {
      msg: 'Welcome to Your Vue.js PWA',
      turtle: 4,
      maxTurtles: 4
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
