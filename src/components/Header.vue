<template >
  <header class="header">
    <h1>Todos</h1>
    <input
      class="new-todo"
      autofocus
      autocomplate="off"
      placeholder="What needs to be done?"
    />
  </header>
</template>
<script>
export default {};
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