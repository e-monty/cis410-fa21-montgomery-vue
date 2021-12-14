<template>
  <div>
    <div class="card">
      <div class="card-header">Meet the Artist</div>
      <br />

      <!-- CARD CONTAINER -->
      <div class="container">
        <div class="row">
          <!-- LEFT CARD -->
          <div class="col-sm-6">
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item" style="border: none">
                  Style: <br /><strong>{{ art.ArtistName }}</strong>
                </li>

                <li class="list-group-item">
                  Artist: <br /><strong>{{ art.ArtistName }}</strong>
                </li>
              </ul>
            </div>
          </div>
          <!-- RIGHT CARD -->
          <div class="col-sm-6">
            <div class="card">
              <img src="../assets/Emma.jpg" alt="Emma" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
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
    auth() {
      return this.$store.state.token;
    },
  },
};
</script>

<style></style>
