<template>
  <div class="about">
    <div class="container" style="margin-top: 1%">
      <div class="row">
        <router-link
          class="col-md-3"
          v-for="val in valoradas"
          :key="val.title"
          :to="`movie/${val.id}`"
        >
          <MovieCard :movie="val">
            {{ val.title }}
          </MovieCard>
        </router-link>
        <div class="col-12" id="verMas">
          <button class="btn btn-primary m-2" @click="getValoradas(page + 1)">
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
      valoradas: [],
    };
  },
  mounted() {
    this.getValoradas(1);
  },
  methods: {
    async getValoradas(page) {
      this.page = page;
      const { data } = await api.getTopRated(this.page);

      if (page < 2) {
        this.valoradas = data.results;

        this.valoradas = await Promise.all(
          data.results.map((val) => this.getValorada(val.id))
        );
      } else {
        const actual = this.valoradas;
        var nuevas = data.results;

        nuevas = await Promise.all(
          data.results.map((val) => this.getValorada(val.id))
        );

        const inject = [...actual, ...nuevas];
        this.valoradas = inject;
      }
    },
    async getValorada(id) {
      const { data } = await api.getMovie(id);
      return new Movie(data);
    },
  },
};
</script>
