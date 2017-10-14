<template>
  <div class="home">
    <h1>{{ 'BikeTrack' }}</h1>

    <!--<router-link to="/rack1" tag ="button">Rack1</router-link>
    <br />
    <router-link to="/rack2" tag ="button">Rack2</router-link>
    <br />
    <router-link to="/rack3" tag ="button">Rack3</router-link>
    <br />-->
    <div id="adrBox" v-if='Math.abs(currLoc-bikeLoc)>=50'>
      <input v-model="message" placeholder="Enter Destination">
      <button id="submit">Submit</button>

    </div>


    <div id="map">

    <script src="../maps.js" type="text/javascript"></script>
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC6_lGUllSRIbvmF2IDO-KJRz7F13PPZpY&callback=initMap"
            type="text/javascript"></script>

    </div>

    <div v-if='Math.abs(currLoc-bikeLoc)<=50' id='report'>
      <input v-model="numBikes" placeholder="Enter Current Number of Bikes">
      <button id="enter">Enter</button>
    </div>


    <div id= 'newBikeRack' v-if='Math.abs(currLoc-bikeLoc)>=50'>
        <br>
        <h3>{{'Add a Bike Rack at Current Location'}}</h3>
        <input v-model="numBikes" placeholder="Current # of Bikes">
        <input v-model="totBikes" placeholder="Total Bike Capacity">
        <br>
        <br>
        <button id="submit">Submit</button>
    </div>




  </div>




</template>




<script>


export default {
  name: 'home',
  data() {
    return {
      currLoc: 500,
      bikeLoc: 100,



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
