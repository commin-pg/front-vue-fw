<template>
  <div id="app">
    <!-- <router-view /> -->
    <section class="todoapp">
      <Header @insertTodo="insertTodo" />
      <Todo
        v-bind:todos="todos"
        @removeTodo="removeTodo"
        @updateDone="updateDone"
      />
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
  data() {
    return {
      todos: [
        {
          id: new Date(),
          text: "Vue 공부하기",
          isDone: true,
        },
        {
          id: new Date() + 1,
          text: "치킨 먹기",
          isDone: false,
        },
      ],
    };
  },
  methods: {
    insertTodo(text) {
      this.todos = [
        ...this.todos,
        {
          id: new Date().getTime(),
          text,
          isDone: false,
        },
      ];
    },
    removeTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    updateDone(id) {
      const todos = [...this.todos];
      const todo = todos.find((todo) => todo.id === id);

      if (todo) {
        todo.isDone = !todo.isDone;
        this.todos = todos;
      }
    },
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
