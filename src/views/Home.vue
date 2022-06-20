<template>
  <section class="page grid h-screen lg:mx-12 place-items-center">
    <div class="main lg:flex">
      <!-- Display Image -->
      <div
        id="imgDiv"
        class="w-60 lg:w-64 lg:h-64 h-60 lg:place-self-end brightness-50 overflow-hidden border-[0.75rem] border-[rgba(200,200,200,0.1)] lg:mr-20"
      >
        <img src="../assets/images/IMG-20191218-WA0009.jpg" alt="my picture" />
      </div>
      <!-- Name and Position -->
      <div class="mt-12 lg:mt-10 lg:col-start-2 lg:place-self-start">
        <p class="text-10-b mb-2 lg:text-xl font-roboto font-medium">
          Hi, my name is
        </p>
        <h1
          class="text-center lg:text-left font-raleway text-10-a text-3xl lg:text-5xl mb-2"
        >
          DESTINY OBIOHA
        </h1>
        <p class="text-right lg:text-xl lg:text-left font-roboto text-30%">
          I'm a Front-end Developer
        </p>
        <Social class="hidden sm:hidden lg:flex mt-8" />
      </div>
      <Social class="lg:hidden grid place-items-center mt-8" />
    </div>
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
@media (min-width: 640px) {
  .page {
    display: grid;
    grid-template-columns: 30vw auto;
  }
  .main {
    grid-column-start: 2;
  }
}
@media (min-width: 1024px) {
  .page {
    grid-template-columns: 25vw auto;
  }
}
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
</style>
