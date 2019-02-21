<template>
  <main :class="$options.name">
    <Head :title="$options.name + ' | Basic Project'"/>
    <article>
      <h1>Basic Project</h1>
      <p>Basic Project description</p>
    </article>
  </main>
</template>
<script>
export default {
  name: "Home"
};
</script>
<style lang="scss">
</style>