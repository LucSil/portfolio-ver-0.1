<template>
  <!-- PreLoader -->
  <PreLoader />

  <!-- NavBar -->
  <nav class="bg-60% relative">
    <div class="flex justify-between items-center p-6 relative z-20">
      <!-- Logo onn navbar -->
      <router-link
        to="/"
        @click="close"
        class="font-raleway text-10-b text-2xl tracking-widest hover:animate-pulse"
      >
        DSTNY
      </router-link>

      <!-- Navbar toggle buttons -->
      <div>
        <transition name="switch" mode="out-in" appear>
          <button @click="toggle" v-if="!click" class="grid place-self-center">
            <ion-icon class="text-10-b text-2xl" name="grid"></ion-icon>
          </button>
          <button @click="toggle" v-else class="grid place-self-center">
            <ion-icon class="text-10-b text-2xl" name="grid-outline"></ion-icon>
          </button>
        </transition>
      </div>
    </div>

    <!-- Navbar Links -->
    <transition name="link">
      <ul
        v-if="menu"
        class="menu absolute z-20 grid font-roboto font-light top-36 tracking-widest text-10-b text-3xl pl-6"
      >
        <router-link @click="close" class="navLink" to="/">HOME</router-link>
        <router-link @click="close" class="navLink" to="/about"
          >ABOUT</router-link
        >
        <router-link @click="close" class="navLink" to="/work"
          >WORK</router-link
        >
        <router-link @click="close" class="navLink" to="/contact"
          >CONTACT</router-link
        >
      </ul>
    </transition>

    <!-- Modal and Modal Animation -->
    <transition name="modal">
      <div v-if="menu" class="h-screen bg-60% fixed inset-0 z-10"></div>
    </transition>
  </nav>

  <!-- Animation for route components -->
  <router-view v-slot="{ Component }">
    <Transition name="route" mode="out-in">
      <component :is="Component" />
    </Transition>
  </router-view>
</template>

<script>
import PreLoader from "@/components/PreLoader.vue";
export default {
  name: "App",
  components: { PreLoader },
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
.menu .router-link-active::before {
  content: "#";
  opacity: 0.5;
  margin-right: 0.125rem;
  transition: all 200 ease-in-out;
}

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
  transform: translateX(500px);
}
.modal-leave-to {
  opacity: 0;
  transform: translateX(-250px);
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
  transition: all 0.7s ease;
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
  transition: all 0.7s linear;
}
</style>
