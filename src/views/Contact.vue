<template>
  <section class="page grid mt-24 sm:mt-0 sm:place-items-center h-screen">
    <div class="main grid place-items-center sm:mt-10 h-[40vh] sm:h-auto">
      <div class="px-4 sm:px-10 lg:px-20 mb-12">
        <h1
          class="font-raleway text-10-a text-4xl lg:text-5xl text-center mb-6"
        >
          Get In Touch
        </h1>
        <p
          class="text-center text-base lg:text-lg font-roboto font-normal tracking-wider leading-6 text-30%"
        >
          Hello, once again!<br />I'm currently seeking a new opportunity. If
          you'd love to hire me, leave me an inbox or a message on any of my
          social media accounts.
        </p>
        <p
          class="mt-2 text-base lg:text-lg text-center font-roboto font-normal tracking-wider leading-6 text-30%"
        >
          If you'd also want to have a brief chat, feel free to leave a message!
        </p>
      </div>

      <!-- Button -->
      <div class="group">
        <button
          class="border-2 border-10-b rounded-md px-6 lg:px-8 py-3 lg:py-4 group-hover:bg-10-b transition duration-300 ease-linear"
        >
          <a
            class="text-base lg:text-lg font-roboto font-medium text-10-b tracking-wider group-hover:text-60%"
            href="mailto:chijiokeobioha351@gmail.com"
            rel="noopener noreferrer"
            target="blank"
            >Say Hello</a
          >
        </button>
      </div>
      <ContactSocial
        class="mt-8 flex justify-between items-center w-[50%] md:w-[30%]"
      />
      <Footer />
    </div>
  </section>
</template>

<script>
import ContactSocial from "@/components/ContactSocial.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Contact",
  components: { ContactSocial, Footer },
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
</style>
