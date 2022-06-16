<template>
  <div
    v-if="!loaded"
    class="preloader grid place-items-center fixed inset-0 w-screen h-screen overflow-y-hidden bg-white z-50"
  >
    <div class="allCube relative grid place-items-center w-44 h-44">
      <span class="text-8xl">🐙</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "PreLoader",
  data() {
    return {
      loaded: false,
    };
  },
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        this.loaded = true;
      }
    };
  },
};
</script>

<style>
.allCube {
  animation: y1 3s infinite;
}
@keyframes y1 {
  0% {
    transform: scale(0.8);
  }
  25% {
    transform: scale(0);
  }
  50% {
    transform: scale(0.8);
  }
  75% {
    transform: scale(0);
  }
  100% {
    transform: scale(0.8);
  }
}
</style>
