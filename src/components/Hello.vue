<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div id="turtle-count">
        We have <span v-bind:class="{'many-turtles': turtle > maxTurtles}">{{turtle}}</span> turtles.
    </div>

    Turtle: {{ turtle }}
    <div id = "button">

      <button v-on:click="turtle += 1">rack 1</button>
      <button v-on:click="turtle += 1">rack 2</button>
      <button v-on:click="turtle += 1">rack 3</button>
    </div>



  </div>
</template>




<script>


export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js PWA',
      turtle: 0,
      maxTurtles: 4,
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
