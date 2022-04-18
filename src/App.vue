<template>
  <nav class="bg-60%">
    <div class="flex justify-between items-center p-4">
      <router-link
        to="/"
        class="font-raleway text-10-b text-2xl tracking-widest hover:animate-pulse"
      >
        DSTNY
      </router-link>
      <transition name="switch" mode="out-in" appear>
        <button @click="toggle" v-if="!menu" class="grid place-self-center">
          <ion-icon class="text-10-b text-2xl" name="grid"></ion-icon>
        </button>
        <button @click="toggle" v-else class="grid place-self-center">
          <ion-icon class="text-10-b text-2xl" name="grid-outline"></ion-icon>
        </button>
      </transition>
    </div>

    <ul class="hidden">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </ul>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      menu: false,
    };
  },
  methods: {
    toggle: function () {
      if (!this.menu) {
        this.menu = true;
      } else {
        this.menu = false;
      }
    },
  },
};
</script>

<style>
.switch-enter-from {
  opacity: 0;
  transform: translateX(10px);
}
.switch-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}
.switch-enter-active,
.switch-leave-active {
  transition: all 0.3s ease;
}
</style>
