<template>
  <nav class="bg-60% relative">
    <div class="flex justify-between items-center py-4 px-6 relative z-20">
      <router-link
        to="/"
        @click="close"
        class="font-raleway text-10-b text-2xl tracking-widest hover:animate-pulse"
      >
        DSTNY
      </router-link>
      <transition name="switch" mode="out-in" appear>
        <button @click="toggle" v-if="!click" class="grid place-self-center">
          <ion-icon class="text-10-b text-2xl" name="grid"></ion-icon>
        </button>
        <button @click="toggle" v-else class="grid place-self-center">
          <ion-icon class="text-10-b text-2xl" name="grid-outline"></ion-icon>
        </button>
      </transition>
    </div>
    <transition name="link">
      <ul
        v-if="menu"
        class="absolute z-20 grid font-roboto font-light top-36 tracking-widest text-10-b text-3xl pl-6"
      >
        <router-link @click="close" class="navLink" to="/">HOME</router-link>
        <router-link @click="close" class="navLink" to="/about"
          >ABOUT</router-link
        >
      </ul>
    </transition>
    <transition name="modal">
      <div v-if="menu" class="h-screen bg-60% fixed inset-0 z-10"></div>
    </transition>
  </nav>

  <router-view v-slot="{ Component }">
    <transition name="route">
      <component :is="Component" />
    </transition>
  </router-view>
  <!-- <router-view /> -->
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      click: false,
      menu: false,
    };
  },
  methods: {
    toggle: function () {
      if (!this.click) {
        this.click = true;
        this.menu = true;
        document.body.classList.add("overflow-y-hidden");
      } else {
        this.click = false;
        this.menu = false;
        document.body.classList.remove("overflow-y-hidden");
      }
    },
    close() {
      if (this.menu && this.click) {
        this.menu = false;
        this.click = false;
        document.body.classList.remove("overflow-y-hidden");
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
.switch-leave-active,
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.link-enter-from {
  opacity: 0;
  transform: translateX(250px);
}
.modal-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.link-enter-from {
  opacity: 0;
  transform: translateX(200px);
}
.link-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}
.link-enter-active {
  transition: all 0.8s ease;
}
.link-leave-active {
  transition: all 0.1s ease;
}

/* Route Transitions */
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active,
.route-enter-active {
  transition: all 0.5s linear;
}
</style>
