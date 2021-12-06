<template>
  <div id="app">
    <!-- <router-view /> -->
    <section class="todoapp">
      <Header />
      <Todo />
      <Footer />
    </section>
  </div>
</template>

<script>
import "./assets/css/main.css";
import Header from "./components/Header.vue";
import Todo from "./components/Todo.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Todo,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
