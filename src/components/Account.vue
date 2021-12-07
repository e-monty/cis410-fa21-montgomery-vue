<template>
  <div>
    <h1>Account</h1>
    <hr />
    <h3>{{ firstName }}'s Reviews</h3>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      reviewsByUser: null,
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
      .get("/reviews/me", {
        headers: {
          Authorization: `Bearer ${this.$store.state.token}`,
        },
      })
      .then((theResponse) => {
        console.log("the response", theResponse);
      });
  },
};
</script>

<style></style>
