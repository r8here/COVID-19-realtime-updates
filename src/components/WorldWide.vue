<template>
  <div>
    <div class="card">
      <!-- Display global data -->
      <h2>World</h2>
      <hr class="divider" />

      <div v-if="!loadingAll" class="_3_col--grid">
        <h2 class="card fs-2">
          Total Cases:
          <br />
          {{ all.cases }}
        </h2>
        <h2 class="card fs-2">
          Total Recovered:
          <br />
          {{ all.recovered }}
        </h2>
        <h2 class="card fs-2">
          Total Deaths:
          <br />
          {{ all.deaths }}
        </h2>
      </div>

      <!-- Placeholder loader -->
      <div v-else class="card">
        <content-loader
          width="300"
          height="50"
          :speed="2"
          primaryColor="#032948"
          secondaryColor="#07416f"
        >
          <rect x="1" y="0" rx="0" ry="0" width="295" height="6" />
          <rect x="1" y="10" rx="0" ry="0" width="290" height="6" />
          <rect x="1" y="20" rx="0" ry="0" width="295" height="6" />
          <rect x="1" y="30" rx="0" ry="0" width="295" height="6" />
        </content-loader>
      </div>
      <!-- Global data chart -->
      <div class="card">
        <data-bar-chart v-if="all" :chart-data="chartData" />
      </div>

      <!-- Search field -->
      <div class="card affix">
        <label>Filter by: </label>
        <input
          class="search-input"
          v-model="filters.country.value"
          placeholder="Country Name"
        />
      </div>

      <!-- Display country-wise data -->
      <div class="table" v-if="!loadingCountries">
        <v-table class="text-white" :data="countries" :filters="filters">
          <thead slot="head">
            <th class="text-left">Country</th>
            <th>Cases</th>
            <th>Today Cases</th>
            <th>Recovered</th>
          </thead>
          <tbody slot="body" slot-scope="{ displayData }">
            <tr v-for="(country, index) in displayData" :key="index">
              <td class="text-left">{{ country.country }}</td>
              <td class="text-right">{{ country.cases }}</td>
              <td class="text-right">{{ country.todayCases }}</td>
              <td class="text-right">{{ country.recovered }}</td>
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
  name: "Index",
  components: {
    ContentLoader,
    DataBarChart
  },
  props: {
    msg: String
  },
  data() {
    return {
      loadingAll: false,
      loadingCountries: false,
      all: {
        cases: 0,
        deaths: 0,
        recovered: 0
      },
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
  computed: {
    chartData() {
      return {
        labels: ["COVID-19"],
        datasets: [
          {
            label: "Cases",
            backgroundColor: "orange",
            data: [this.all.cases]
          },
          {
            label: "Recovered",
            backgroundColor: "green",
            data: [this.all.recovered]
          },
          {
            label: "Deaths",
            backgroundColor: "red",
            data: [this.all.deaths]
          }
        ]
      };
    }
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
        this.fetchAndRefreshData();
      }, 60000);
    }
  }
};
</script>
