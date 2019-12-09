<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
		<h1>Welcome to Brewdog Beers!</h1>
    <Beers v-bind:beers="beers" />
  </div>
</template>

<script>
import Beers from './components/Beers.vue'

export default {
  name: 'app',
  components: {
    Beers
  },
	data: function(){
		return {
			beerDetails: []
		}
	},
	created() {
		fetch(`https://api.punkapi.com/v2/beers/random`, { method: 'GET' })
			.then(response => response.json())
			.then(response => this.beerDetails = response)
			// eslint-disable-next-line no-console
			.then(console.log(this.beerDetails))
			// eslint-disable-next-line no-console
			.catch(err => console.log(err))
	}
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
</style>
