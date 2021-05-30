<template>
  <div class="about">
    <div class="container" style="margin-top: 1%">
      <div class="row mx-0">
        <router-link
          class="col-md-3"
          v-for="pop in populares"
          :key="pop.title"
          :to="`movie/${pop.id}`"
        >
          <MovieCard :movie="pop">
            {{ pop.title }}
          </MovieCard>
        </router-link>
        <div class="col-12" id="verMas">
          <button class="btn btn-primary m-2" @click="getPopulares(page + 1)">
            VER MÁS
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../services/api.services";
import Movie from "../models/Movie";
import MovieCard from "../components/MovieCard";

export default {
  components: {
    MovieCard,
  },
  data() {
    return {
      page: 1,
      populares: [],
    };
  },
  mounted() {
    this.getPopulares(1);
  },
  methods: {
    async getPopulares(page) {
      this.page = page;
      const { data } = await api.getPopular(this.page);

      if (page < 2) {
        this.populares = data.results;

        this.populares = await Promise.all(
          data.results.map((pop) => this.getPopular(pop.id))
        );
      } else {
        const actual = this.populares;
        var nuevas = data.results;

        nuevas = await Promise.all(
          data.results.map((pop) => this.getPopular(pop.id))
        );

        const inject = [...actual, ...nuevas];
        this.populares = inject;
      }
    },
    async getPopular(id) {
      const { data } = await api.getMovie(id);
      return new Movie(data);
    },
  },
};
</script>

