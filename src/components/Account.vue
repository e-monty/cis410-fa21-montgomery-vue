<template>
  <div>
    <h1>Account</h1>
    <hr />
    <h3>{{ firstName }}'s Reviews</h3>

    <p v-if="accountError" class="text-danger">
      Cannot get your account information, please try again later.
    </p>
    <table v-if="ratingsByUser" class="table">
      <thead>
        <th>Title</th>
        <th>Review</th>
        <th>Is it Fridge-worthy?</th>
      </thead>
      <tbody>
        <tr v-for="thisRating in ratingsByUser" :key="thisRating.RatingPK">
          <th>
            <router-link class="link" :to="`/art/${thisRating.ArtFK}`">{{
              thisRating.Title
            }}</router-link>
          </th>
          <th>{{ thisRating.Review }}</th>
          <th>
            {{ thisRating.PassFail ? "Yes" : "No" }}
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      ratingsByUser: null,
      accountError: false,
    };
  },
  computed: {
    firstName() {
      console.log("store so far", this.$store.state);
      return this.$store.state.user.NameFirst;
    },
  },
  created() {
    axios
      .get("/rating/me", {
        headers: {
          Authorization: `Bearer ${this.$store.state.token}`,
        },
      })
      .then((theResponse) => {
        console.log("the response", theResponse);
        this.ratingsByUser = theResponse.data;
      })
      .catch(() => {
        this.accountError = true;
      });
  },
};
</script>

<style>
.link {
  color: black;
}
th {
  border: none;
}
</style>
