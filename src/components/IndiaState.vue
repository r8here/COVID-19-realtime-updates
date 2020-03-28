<template>
  <div class="india">
    <!-- Display single country data -->
    <div class="card">
      <h2>India</h2>
      <hr class="divider" />
      <div class="_4_col--grid">
        <h2 class="card fs-2">
          Total Cases:
          <br />{{ getCountry("India").cases }}
        </h2>
        <h2 class="card fs-2">
          Today Cases:
          <br />{{ getCountry("India").todayCases }}
        </h2>
        <h2 class="card fs-2">
          Recovered:
          <br />{{ getCountry("India").recovered }}
        </h2>
        <h2 class="card fs-2">
          Deaths:
          <br />{{ getCountry("India").deaths }}
        </h2>
      </div>
      <div class="card">
        <data-bar-chart v-if="this.countries" :chart-data="chartData" />
      </div>
      <!-- Search field -->
      <div class="card affix">
        <label>Filter by: </label>
        <input
          class="search-input"
          v-model="filters.state.value"
          placeholder="Indian State Name"
        />
      </div>

      <!-- Display State-wise data -->
      <div class="table" v-if="!loadingState">
        <v-table class="text-white" :data="states" :filters="filters">
          <thead slot="head">
            <th class="text-left">State</th>
            <th>Cases <br /><small>(Inc. Foreigners)</small></th>
            <th>Discharged/Recovered</th>
            <th>Deaths</th>
          </thead>
          <tbody slot="body" slot-scope="{ displayData }">
            <tr v-for="(state, index) in displayData" :key="index">
              <td class="text-left">{{ state.loc }}</td>
              <td class="text-right">
                {{ state.confirmedCasesIndian + state.confirmedCasesForeign }}
              </td>
              <td class="text-right">{{ state.discharged }}</td>
              <td class="text-right">{{ state.deaths }}</td>
            </tr>
          </tbody>
        </v-table>
      </div>

      <!-- Placeholder loader -->
      <div v-else class="card">
        <content-loader
          width="300"
          height="400"
          :speed="2"
          primaryColor="#032948"
          secondaryColor="#07416f"
        >
          <rect x="15" y="10" rx="0" ry="0" width="295" height="6" />
          <rect x="15" y="20" rx="0" ry="0" width="290" height="6" />
          <rect x="15" y="30" rx="0" ry="0" width="295" height="6" />
          <rect x="15" y="40" rx="0" ry="0" width="295" height="6" />
          <rect x="15" y="60" rx="0" ry="0" width="307" height="6" />
          <rect x="15" y="50" rx="0" ry="0" width="299" height="6" />
        </content-loader>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ContentLoader } from "vue-content-loader";
import DataBarChart from "./DataBarChart";
export default {
  name: "india-state",
  components: {
    ContentLoader,
    DataBarChart
  },
  props: {
    msg: String
  },
  data() {
    return {
      loadingState: false,
      countries: [],
      states: [],
      filters: {
        state: { value: "", keys: ["loc"] }
      }
    };
  },
  mounted() {
    this.fetchCountries();
    this.fetchStates();
  },
  computed: {
    chartData() {
      return {
        labels: ["COVID-19 India"],
        datasets: [
          {
            label: "Cases",
            backgroundColor: "orange",
            data: [this.countries[40].cases]
          },
          {
            label: "Recovered",
            backgroundColor: "green",
            data: [this.countries[40].recovered]
          },
          {
            label: "Deaths",
            backgroundColor: "red",
            data: [this.countries[40].deaths]
          }
        ]
      };
    }
  },
  methods: {
    fetchStates: async function() {
      this.loadingState = true;
      try {
        var response = await axios.get(
          "https://api.rootnet.in/covid19-in/stats/latest"
        );

        this.states = response.data.data.regional;
        this.loadingState = false;
      } catch (error) {}
    },
    fetchCountries: async function() {
      this.loadingCountries = true;
      try {
        var response = await axios.get(
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
    getState(stateName) {
      var filtered = this.states.filter(loc => {
        return states.regional.loc == stateName;
      });

      return filtered.length > 0 ? filtered[0] : [];
    }
  }
};
</script>
