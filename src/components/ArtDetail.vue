<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h2 class="text-primary">{{ art.Title }}</h2>
        <br />

        <p>
          Style: <br /><strong>{{ art.ArtStyle }}</strong>
        </p>
        <p>
          Artist: <br /><strong>{{ art.ArtistFK }}</strong>
        </p>
      </div>
    </div>
    <br />

    <router-link v-if="auth" :to="`/art/${this.$route.params.pk}/review`"
      ><button class="btn btn-success">Add a Review</button></router-link
    >

    <router-link v-else :to="`/login`"
      ><button class="btn btn-outline-success">
        Sign In to Add a Review
      </button></router-link
    >
    <br /><br />
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    art() {
      let allArt = this.$store.state.art;

      let thisArt = allArt.find((anArt) => {
        return anArt.ArtPK == this.$route.params.pk;
      });

      return thisArt;
    },
    // formattedBudget(){
    //   return new Intl.NumberFormat("en-US",{
    //     style: "currency",
    //     currency: "USD"
    //   }).format(this.movie.Budget)
    // },
    auth() {
      return this.$store.state.token;
    },
  },
};
</script>

<style></style>
