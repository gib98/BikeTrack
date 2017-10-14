<template>
  <div id="app">
    <header>


        <img id='logo' src="./assets/logo.png" alt="Vue.js PWA" style='float:left;width:48px;height:48px;'></img>
        <span style= 'float:left;'>{{appName}}</span>
    </header>

    <main>
      <router-view></router-view>
    </main>
  </div>
</template>


<script>

export default {
  name: 'app',
  data() {
      return {
          appName: 'BikeTrack'
      }
  },
};
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0px 16px 0px 16px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
