<template>
  <ul
    class="secMenu absolute sm:static z-20 grid font-roboto font-light top-36 sm:top-0 tracking-widest text-10-b text-3xl pl-6"
  >
    <router-link @click="close" class="link" to="/">Home</router-link>
    <router-link @click="close" class="link" to="/about">About</router-link>
    <router-link @click="close" class="link" to="/work">Work</router-link>
    <router-link @click="close" class="link" to="/contact">Contact</router-link>
  </ul>
</template>

<script>
export default { name: "SecondNav" };
</script>

<style>
.secMenu .router-link-active {
  opacity: 1;
  margin-left: 1rem;
  transition: all 200 ease-in-out;
}
</style>
