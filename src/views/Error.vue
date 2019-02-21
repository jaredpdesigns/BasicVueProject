<template>
  <main :class="$options.name">
    <Head
      :title="$options.name + ' | Basic Project'"
    />
    <article>
      <h1>Uh-oh, something weird happened.</h1>
      <p><router-link to="/">Return home</router-link></p>
    </article>
  </main>
</template>
<script>
export default {
  name: "Error"
};
</script>
<style lang="scss">
</style>