<template>
  <div>
    <h1>Works of Art</h1>
    <hr />
    <table class="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Style</th>
          <th>Artist</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="anArt in theArt" :key="anArt.ArtPK">
          <th>{{ anArt.Title }}</th>
          <th>{{ anArt.ArtStyle }}</th>
          <th>{{ anArt.ArtistName }}</th>
          <th>
            <img src="../assets/40.jpg" class="img-thumbnail" />
          </th>
          <th>
            <router-link :to="`/art/${anArt.ArtPK}`"
              ><button class="btn btn-success">Details</button></router-link
            >
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    theArt() {
      return this.$store.state.art;
    },
  },
};
</script>

<style></style>
