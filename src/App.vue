<template>
  <div id="app">
      <nav class="navbar navbar-dark bg-primary sticky-top" >
        <div class="container" id="nav">
          <router-link to="/populares" style="font-size: 13px">POPULARES</router-link>
          <router-link to="/valoradas" style="font-size: 13px">TOPRATED</router-link>
        </div>
      </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  display: flex;
  justify-content: flex-end;
}

#nav a {
  font-weight: bold;
  color:white;
  padding: 10px;
  border-radius: 5px 5px 5px 5px;
  text-decoration: none;
  margin-left: 15px;
}

#nav a.router-link-exact-active {
  background-color: rgb(37, 139, 255);
}
</style>
