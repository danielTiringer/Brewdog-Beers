<template>
  <div id="app">
		<header id="header">
			<img id="bulldog-image" src="./assets/bulldog.jpeg">
			<h1>Welcome to Brewdog Beers!</h1>
			<img id="bulldog-image" src="./assets/bulldog.jpeg">
		</header>
    <Beers v-bind:Beers="Beers" />
  </div>
</template>

<script>
import Beers from './components/Beers.vue'

export default {
  name: 'app',
  components: {
    Beers
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#header {
	display: flex;
	justify-content: center;
}

#bulldog-image {
	height: 100px;
}
</style>
