<template>
  <section class="mt-24 grid place-items-center">
    <div
      id="imgDiv"
      class="w-60 h-60 brightness-50 overflow-hidden border-[0.75rem] border-[rgba(200,200,200,0.1)]"
    >
      <img src="../assets/images/IMG-20191218-WA0009.jpg" alt="my picture" />
    </div>
    <div class="mt-12">
      <h1 class="text-center font-raleway text-10-a text-3xl mb-2">
        DESTINY OBIOHA
      </h1>
      <p class="text-center font-roboto text-30%">Front-end Developer</p>
    </div>
    <ul id="social" class="grid place-items-center mt-8">
      <li>
        <a href="https://github.com/LucSil" target="blank">
          <ion-icon class="socialLinks" name="logo-github"></ion-icon>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/Luc_Sil_" target="blank">
          <ion-icon class="socialLinks" name="logo-twitter"></ion-icon
        ></a>
      </li>
      <li>
        <a href="https://wa.me/%2B2349057666676" target="blank">
          <ion-icon class="socialLinks" name="logo-whatsapp"></ion-icon
        ></a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "Home",
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
</style>
