<template>
  <section class="mt-24 grid place-items-center">
    <div
      id="imgDiv"
      class="w-60 h-60 brightness-50 overflow-hidden border-[0.75rem] border-[rgba(200,200,200,0.1)]"
    >
      <img src="../assets/images/IMG-20191218-WA0009.jpg" alt="my picture" />
    </div>
    <div class="mt-12">
      <!-- Hi -->
      <transition name="left" appear>
        <p class="text-10-b mb-2 font-roboto font-medium">Hi, my name is</p>
      </transition>

      <!-- Name -->
      <transition name="center" appear>
        <h1 class="text-center font-raleway text-10-a text-3xl mb-2">
          DESTINY OBIOHA
        </h1>
      </transition>

      <!-- Role -->
      <transition name="right" appear>
        <p class="text-right font-roboto text-30%">I'm a Front-end Developer</p>
      </transition>
    </div>
    <Social class="grid place-items-center mt-8" />
  </section>
</template>

<script>
import Social from "../components/Social.vue";
export default {
  name: "Home",
  components: { Social },
};
</script>

<style>
#imgDiv {
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.3);
  animation: morph 12s infinite;
}
@keyframes morph {
  0% {
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  }
  25% {
    border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
  }
  50% {
    border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
  }
  75% {
    border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;
  }
  100% {
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  }
}

.left-enter-from {
  opacity: 0;
  transform: translateX(-150px);
}
.left-enter-active {
  transition: all 0.6s ease-in;
}
.center-enter-from {
  opacity: 0;
}
.center-enter-active {
  transition: all 1.2s ease-in;
}
.right-enter-from {
  opacity: 0;
  transform: translateX(200px);
}
.right-enter-active {
  transition: all 1.5s ease-in;
}
</style>
