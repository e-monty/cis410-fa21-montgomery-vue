<template>
  <div>
    <div class="card">
      <div class="card-header">{{ art.Title }}</div>
      <br />
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item" style="border: none">
                  Style: <br /><strong>{{ art.ArtStyle }}</strong>
                </li>

                <li class="list-group-item">
                  Artist: <br /><strong>{{ art.ArtistName }}</strong>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card-body">
              <img src="../assets/Beach.jpg" />
            </div>
          </div>
        </div>
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

      console.log("this art", thisArt);

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
