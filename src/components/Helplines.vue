<template>
  <div class="card">
    <h2>Authorized Gov. Helplines</h2>
    <hr class="divider" />
    <!-- Search field -->
    <div class="card affix">
      <label>Filter by: </label>
      <input
        class="search-input"
        v-model="filters.helpline.value"
        placeholder="State Name"
      />
    </div>

    <!-- Display State-wise data -->
    <div class="table--helpline" v-if="!loadingHelpline">
      <v-table class="text-white" :data="helplines" :filters="filters">
        <thead slot="head">
          <th class="text-left">State</th>
          <th>Helpline(s)</th>
        </thead>
        <tbody slot="body" slot-scope="{ displayData }">
          <tr v-for="(helpline, index) in displayData" :key="index">
            <td class="text-left">{{ helpline.loc }}</td>
            <td class="text-left">{{ helpline.number }}</td>
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
</template>

<script>
import axios from "axios";
import { ContentLoader } from "vue-content-loader";
export default {
  name: "india-state-helplines",
  components: {
    ContentLoader
  },
  props: {
    msg: String
  },
  data() {
    return {
      loadingHelpline: false,
      helplines: [],
      filters: {
        helpline: { value: "", keys: ["loc"] }
      }
    };
  },
  mounted() {
    this.fetchHelplines();
  },

  methods: {
    fetchHelplines: async function() {
      this.loadingHelpline = true;
      try {
        var response = await axios.get(
          "https://api.rootnet.in/covid19-in/contacts"
        );

        this.helplines = response.data.data.contacts.regional;
        this.loadingHelpline = false;
      } catch (error) {}
    },
    getHelpline(contactNumber) {
      var filtered = this.helplines.filter(loc => {
        return helplines.regional.loc == contactNumber;
      });

      return filtered.length > 0 ? filtered[0] : [];
    }
  }
};
</script>

<style lang="scss" scoped>
.table--helpline {
  table {
    table-layout: fixed !important;
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
</style>
