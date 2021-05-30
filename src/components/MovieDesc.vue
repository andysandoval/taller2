<template>
  <div class="container" style="margin-top: 1%">
    <div class="titulo">
      <span class="tituloDesc">{{ movie.title }}</span>
    </div>
    <div class="card">
      <img
        class="card-img"
        style="max-width: 600px"
        :src="movie.backdrop_path"
      />
      <div class="vote">
        <i class="bi bi-star-fill" style="color: yellow"></i>
        <span class="popCard">{{ movie.vote_average }}</span>
      </div>
    </div>
    <div class="generos">
      <span v-for="gen in movie.genres" :key="gen.genres">
        {{ gen.name }}
      </span>
    </div>
    <div class="resumen">
      <span>{{ movie.overview }}</span>
    </div>
    <div class="poster">
      <img
        class="poster-img"
        :src="movie.poster_path"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      required: true,
      type: Object,
    },
  },
};
</script>
