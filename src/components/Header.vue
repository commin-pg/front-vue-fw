<template>
  <header class="header">
    <h1>todos</h1>
    <input
      class="new-todo"
      autofocus
      autocomplete="off"
      placeholder="What needs to be done?"
      v-model="text"
      @keypress="handleTodo"
    />
    <!-- @ = v-on -->
  </header>
</template>

<script>
export default {
  date() {
    return {
      text: "",
    };
  },
  methods: {
    handleTodo({ keyCode }) {
      const { text } = this;
      console.log(this, keyCode);

      if (keyCode === 13 && text !== "") {
        this.$emit("insertTodo", text);
        this.text = "";
      }
    },
  },
};
</script>
<style scoped>
h1 {
  position: absolute;
  top: -155px;
  width: 100%;
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  color: rgba(175, 47, 47, 0.15);
  -webkit-text-rendering: optimizeLegibility;
  -moz-text-rendering: optimizeLegibility;
  text-rendering: optimizeLegibility;
}
</style>