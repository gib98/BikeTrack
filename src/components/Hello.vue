<template>
  <div class="hello">
    <h1>{{ 'BikeTrack' }}</h1>
    <!--<h3>{{'Bike Rack List'}}</h3>

    <router-link to="/rack1" tag ="button">Rack1</router-link>
    <br />
    <router-link to="/rack2" tag ="button">Rack2</router-link>
    <br />
    <router-link to="/rack3" tag ="button">Rack3</router-link>
    <<br />-->
    <div id="map">




    </div>
  </div>



</template>




<script>



export default {
  name: 'hello',
  data() {
    return {
      rackCurr :0,
      rackCap :0,
      rackProj :0,

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
