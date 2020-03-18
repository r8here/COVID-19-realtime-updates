<template>
	<div>
		<!-- <h1>CORONA</h1> -->
		<div v-if="!loadingAll" class="_3_col--grid">
			<h2 class="card">
				Total Cases:
				<br />
				{{ all.cases }}
			</h2>
			<h2 class="card">
				Total Recovered:
				<br />
				{{ all.recovered }}
			</h2>
			<h2 class="card">
				Total Deaths:
				<br />
				{{ all.deaths }}
			</h2>
		</div>
		<div v-else class="card">Loading..</div>

		<div class="card">
			<h2>India</h2>
			<div class="_5_col--grid">
				<div>
					Total Cases:
					<h3>{{ getCountry('India').cases }}</h3>
				</div>
				<div>
					Today Cases:
					<h3>{{ getCountry('India').todayCases }}</h3>
				</div>
				<div>
					Recovered:
					<h3>{{ getCountry('India').recovered }}</h3>
				</div>
				<div>
					Deaths:
					<h3>{{ getCountry('India').deaths }}</h3>
				</div>
				<div>
					Today Deaths:
					<h3>{{ getCountry('India').todayDeaths }}</h3>
				</div>
			</div>
		</div>

		<div class="card">
			<label>Filter by Country Name:</label>
			<input class="form-control" v-model="filters.country.value" />
		</div>

		<div class="table" v-if="!loadingCountries">
			<v-table class="text-white" :data="countries" :filters="filters">
				<thead slot="head">
					<th>Country</th>
					<th>Cases</th>
					<th>Today Cases</th>
					<th>Deaths</th>
					<th>Today Deaths</th>
					<th>Recovered</th>
				</thead>
				<tbody slot="body" slot-scope="{ displayData }">
					<tr v-for="(country, index) in displayData" :key="index">
						<td>{{ country.country }}</td>
						<td>{{ country.cases }}</td>
						<td>{{ country.todayCases }}</td>
						<td>{{ country.deaths }}</td>
						<td>{{ country.todayDeaths }}</td>
						<td>{{ country.recovered }}</td>
					</tr>
				</tbody>
			</v-table>
		</div>

		<div v-else class="card">Loading ...</div>
	</div>
</template>

<script>
import axios from "axios";

export default {
	name: "Index",
	props: {
		msg: String
	},
	data() {
		return {
			loadingAll: false,
			loadingCountries: false,
			all: {},
			countries: [],
			filters: {
				country: { value: "", keys: ["country"] }
			}
		};
	},
	mounted() {
		this.fetchAll();
		this.fetchCountries();
		this.fetchAndRefreshData();
	},
	methods: {
		fetchAll: async function() {
			this.loadingAll = true;
			try {
				var response = await axios.get("https://corona.lmao.ninja/all");

				this.all = response.data;
				this.loadingAll = false;
				this.getCountry("India");
			} catch (error) {}
		},
		fetchCountries: async function() {
			this.loadingCountries = true;
			try {
				var response = await axios.get(
					// "https://corona.lmao.ninja/countries"
					"https://coronavirus-19-api.herokuapp.com/countries"
				);

				this.countries = response.data;
				this.loadingCountries = false;
			} catch (error) {}
		},
		getCountry(countryName) {
			var filtered = this.countries.filter(country => {
				return country.country == countryName;
			});

			return filtered.length > 0 ? filtered[0] : {};
		},
		fetchAndRefreshData() {
			setTimeout(() => {
				this.fetchAll();
    			this.fetchCountries();
				this.fetchAndRefreshData()
			}, 30000)
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
	li {
		display: inline-block;
		margin: 0 10px;
	}
}
a {
	color: #42b983;
}
._3_col--grid {
	display: grid;
	grid-template-columns: repeat(3, auto);
	grid-gap: 1rem;
}
._4_col--grid {
	display: grid;
	grid-template-columns: repeat(4, auto);
	grid-gap: 0.5rem;
	h3 {
		margin: 1rem;
	}
}
._5_col--grid {
	display: grid;
	grid-template-columns: repeat(5, auto);
	grid-gap: 0.5rem;
	h3 {
		margin: 1rem;
	}
}
.table {
	max-width: 45rem;
	overflow-x: auto;
	table {
		min-width: 40rem;
		width: 100%;
		border-collapse: collapse;
		th,
		td {
			border: 1px solid #07416f;
			padding: 5px;
		}
	}
}
</style>
