<template>
  <gmap-map
    :center="center"
    :zoom="7"
    style="width: 500px; height: 300px"
  >
    <gmap-marker
       :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="center=m.position"
    ></gmap-marker>
  </gmap-map>
</template>

<script>
    /////////////////////////////////////////
    // New in 0.4.0
    import * as VueGoogleMaps from 'vue2-google-maps';
import Vue from 'vue';

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyC6_lGUllSRIbvmF2IDO-KJRz7F13PPZpY',
    }
});

export default {
    data () {
        return {
            center: {lat: 10.0, lng: 10.0},
            markers: [{
                position: {lat: 10.0, lng: 10.0},
                label: "!"
            }, {
          position: {lat: 11.0, lng: 11.0}
            }]
        }
    }
}
</script>
