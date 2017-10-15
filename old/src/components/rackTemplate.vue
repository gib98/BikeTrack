<template>
  <div class="racktemplate">
    <h1>{{ 'BikeTrack' }}</h1>
    <h3>{{'Rack Info'}}</h3>
    Current values = {{rackCurr}}/{{rackCap}}
    <br />
    Projected Values = {{rackProj}}/{{rackCap}}
    <br />



    <router-link to="/" tag="button">Back</router-link>



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
