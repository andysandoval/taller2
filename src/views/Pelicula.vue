<template>
  <div>
      <MovieDesc :movie="movie"/>
  </div>
</template>

<script>
import api from "../services/api.services";
import Movie from "../models/Movie";
import MovieDesc from "../components/MovieDesc";

export default {
  components: {
    MovieDesc,
  },
  data() {
    return {
      movie: {},
    };
  },
  mounted() {
    this.getMovie();
  },
  methods: {
    async getMovie() {
      const { data } = await api.getMovie(this.$route.params.id);
      this.movie = new Movie(data);
    },
  },
};
</script>

<style>
</style>