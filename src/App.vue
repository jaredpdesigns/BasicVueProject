<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>
<script>
import Footer from "@/components/Footer";
import Header from "@/components/Header";
export default {
  name: "App",
  components: { Footer, Header }
};
</script>
<style lang="scss">
@import "assets/css/reset";
:root {
  --base: black;
  --highlight: blue;
  --contrast: white;
}
html {
  @include typeFamily(sans);
  background-color: var(--contrast);
  color: var(--base);
  font-size: 100%;
}
h1 {
  @include typeSize(xxl, l);
}
h2 {
  @include typeSize(xl, l);
}
h3 {
  @include typeSize(l, l);
}
h4 {
  @include typeSize(m, l);
}
h5 {
  @include typeSize(s, m);
}
p {
  @include typeSize(m, l);
}
a {
  @include smooth;
  color: var(--highlight);
  &:focus,
  &:hover {
    opacity: 0.75;
  }
}
code {
  background-color: var(--base);
  color: var(--contrast);
  padding: rem(4);
}
</style>