<template>
	<div class="container">
		<p class="error" v-if="error">{{ error }}</p>
		<form class="search" action="" method="GET">
			<label for="food">Recommendation with food</label>
			<input type="text" id="food" name="food">
			<label for="food">Beer Name</label>
			<input type="text" id="food" name="food">
			<button class="submit" id="#submit-new-post" type="submit">Submit</button>
		</form>
		<div class="beer" v-bind:key="beer.id" v-for="beer in beers">
			<div class="wrapper">
				<figure class="front">
					<div class="header">
						<p><b>Name:</b> {{ beer.name }}</p>
						<p><b>Quote:</b> {{ beer.tagline }}</p>
						<p><b>Alcohol content:</b> {{ beer.abv }}%</p>
					</div>
					<img class="beer-image" v-bind:src="beer.image_url">
				</figure>
				<figure class="back">
					<p><b>Name:</b> {{ beer.name }}</p>
					<p class="description"><b>Description:</b> {{ beer.description }}</p>
					<p><b>Recommended with these dishes:</b></p>
					<ul class="food-pairing">
						<!-- eslint-disable-next-line -->
						<li v-for="food in beer.food_pairing">{{ food }}</li>
					</ul>
				</figure>
			</div>
			<div class="shopping-area">
				<input type="number" min="0" max="12" step="1" value="0" name="beerAmount"/>
				<img class="shopping-cart" src="../assets/shopping-cart.png">
			</div>
		</div>
	</div>
</template>

<script>
// import Beer from './Beer.vue';
import BeerService from '../BeerService';

export default {
	name: 'Beers',
	data() {
		return {
			beers: [],
			error: ''
		}
	},
	async created() {
		try {
			this.beers = await BeerService.getBeers();
		} catch (error) {
			this.error = error.message;
		}
	}
}
</script>

<style scoped>
.container {
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	margin: 20px auto 20px auto;
	width: 90%;
}

.header {
	height: 130px;
}

.beer {
	display: flex;
	flex-direction: column;
	height: 550px;
	margin: 40px;
	width: 220px;
}

.wrapper {
	height: 100%;
	transform-style: preserve-3d;
	transition: transform 1s ease-in-out;
	width: 100%;
}

.wrapper figure {
	background-color: #bcffb8;
	border: 1px solid black;
	border-radius: 5px;
	height: 100%;
	margin: 0;
	padding: 5px;
	position: absolute;
	width: 100%;
}

.wrapper .back {
	transform: rotateY(180deg);
}

.beer:hover .wrapper {
	transform: rotateY(180deg);
}

.beer-image {
	height: 275px;
}

.description {
	max-height: 300px;
	overflow-y: auto;
}


.shopping-area {
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	margin: 30px auto 0 auto;
	width: 50%;
}

.shopping-area:hover {
	cursor: pointer;
}

.shopping-cart {
	color: grey;
	width: 30px;
}

.food-pairing {
	list-style-type: none;
	padding: 0;
}
</style>
