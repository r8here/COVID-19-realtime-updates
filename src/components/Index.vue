<template>
  <div>
    <div class="text-white mb-1">
      <h1 class="mb-0">
        COVID-19 CORONAVIRUS <small class="fs12">Live</small>
      </h1>
      <small class="fs12">
        Auto refresh in 60s
      </small>
    </div>
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
    <div v-else class="card">
      <content-loader
        width="300"
        height="400"
        :speed="2"
        primaryColor="#032948"
        secondaryColor="#07416f"
      >
        <rect x="0" y="0" rx="0" ry="0" width="363" height="96" />
        <rect x="1" y="123" rx="0" ry="0" width="295" height="6" />
        <rect x="1" y="133" rx="0" ry="0" width="290" height="6" />
        <rect x="1" y="143" rx="0" ry="0" width="295" height="6" />
        <rect x="1" y="153" rx="0" ry="0" width="295" height="6" />
        <rect x="1" y="173" rx="0" ry="0" width="307" height="6" />
        <rect x="1" y="163" rx="0" ry="0" width="299" height="6" />
        <rect x="1" y="195" rx="0" ry="0" width="295" height="6" />
        <rect x="1" y="205" rx="0" ry="0" width="300" height="6" />
        <rect x="1" y="215" rx="0" ry="0" width="295" height="6" />
        <rect x="1" y="225" rx="0" ry="0" width="295" height="6" />
        <rect x="1" y="245" rx="0" ry="0" width="307" height="6" />
        <rect x="1" y="235" rx="0" ry="0" width="299" height="6" />
      </content-loader>
    </div>

    <div class="card country">
      <h2>India</h2>
      <div class="_4_col--grid">
        <div>
          Total Cases:
          <h3>{{ getCountry("India").cases }}</h3>
        </div>
        <div>
          Today Cases:
          <h3>{{ getCountry("India").todayCases }}</h3>
        </div>
        <div>
          Recovered:
          <h3>{{ getCountry("India").recovered }}</h3>
        </div>
        <div>
          Deaths:
          <h3>{{ getCountry("India").deaths }}</h3>
        </div>
      </div>
    </div>

    <div class="card">
      <label>Filter by: </label>
      <input
        class="form-control"
        v-model="filters.country.value"
        placeholder="Country Name"
      />
    </div>

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
</template>

<script>
import axios from "axios";
import { ContentLoader } from "vue-content-loader";

export default {
  name: "Index",
  components: {
    ContentLoader
  },
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.fs12 {
  font-size: 12px;
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
.table {
  max-width: 45rem;
  overflow-x: auto;
  color: #d9dee3;
  table {
    width: 40rem;
    // width: 100%;
    margin: auto;
    border-collapse: collapse;
    th {
      background-color: #032948;
    }
    th,
    td {
      border: 1px solid #07416f;
      padding: 5px 15px;
    }
  }
}
.form-control {
  padding: 0.5rem;
  border: 0;
}
.country {
  margin-top: 0.09rem;
}
@media screen and (max-width: 500px) {
  ._3_col--grid,
  ._4_col--grid {
    grid-template-columns: repeat(1, auto);
    grid-gap: 0;
  }
}
</style>
