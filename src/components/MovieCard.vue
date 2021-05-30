<template>
  <div v-if="movie.vote_average == 0">
    <div class="imgNull">
      <img
        class="card-img"
        style="max-width: 500px"
        :src="movie.backdrop_path"
        :alt="movie.title"
      />
    </div>
  </div>
  <div v-else>
    <div class="card">
      <img
        class="card-img"
        style="max-width: 500px"
        :src="movie.backdrop_path"
        :alt="movie.title"
      />
      <div v-if="movie.title.length < 30">
        <div class="card_left1">
          <span class="tituloCard">{{ movie.title }}</span>
        </div>
      </div>
      <div v-else>
        <div class="card_left2">
          <span class="tituloCard">{{ movie.title }}</span>
        </div>
      </div>
      <div class="card_rigth">
        <i class="bi bi-star-fill" style="color: yellow"></i>
        <span class="popCard">{{ movie.vote_average }}</span>
      </div>
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
