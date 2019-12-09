<template>
	<div>
		<div v-bind:key="beer.id" v-for="beer in beerDetails">
			<Beer v-bin:beer="beer" />
		</div>
	</div>
</template>

<script>
import Beer from './Beer.vue';

export default {
	name: 'Beers',
	components: {
		Beer
	},
	props: ['beers']
}
</script>

<style scoped>

</style>
