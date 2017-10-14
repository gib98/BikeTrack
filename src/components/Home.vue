<template>
  <div class="home">
    <h1>{{ 'BikeTrack' }}</h1>

    <!--<router-link to="/rack1" tag ="button">Rack1</router-link>
    <br />
    <router-link to="/rack2" tag ="button">Rack2</router-link>
    <br />
    <router-link to="/rack3" tag ="button">Rack3</router-link>
    <br />-->
    <div id="addressInput" v-if='Math.abs(currLoc-bikeLoc)>=50'>
      <input v-model="message" placeholder="Enter Destination">
      <button id="enter">Enter</button>

    </div>


    <div id="map">




    </div>
    <div v-if='Math.abs(currLoc-bikeLoc)<=50'>
      <input v-model="message" placeholder="enter number of bikes">
      <button id="enter">Enter</button>
    </div>

    <!--<script src=""></script>
    <script src=""></script>-->


  </div>



</template>




<script>



export default {
  name: 'home',
  data() {
    return {
      currLoc: 500,
      bikeLoc: 500,


    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
  color: #35495E;
}
</style>
