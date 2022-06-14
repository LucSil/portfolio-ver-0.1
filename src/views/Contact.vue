<template>
  <section class="grid place-items-center mt-32">
    <div class="mx-4 mb-8">
      <h1 class="font-raleway text-10-a text-4xl text-center mb-8">
        Get In Touch
      </h1>
      <p
        class="text-center text-base font-roboto font-normal tracking-wider leading-6 text-30%"
      >
        Hello, once again!<br />I'm currently seeking a new opportunity. If
        you'd love to hire me, leave me an inbox or a message on any of my
        social media accounts.
      </p>
      <p
        class="mt-2 text-base text-center font-roboto font-normal tracking-wider leading-6 text-30%"
      >
        If you'd also want to have a brief chat, feel free to leave a message!
      </p>
    </div>
    <div class="group">
      <button
        class="border-2 border-10-b rounded-tl-xl rounded-br-xl px-6 py-2 group-hover:bg-10-b transition duration-200 ease-in-out"
      >
        <a
          class="font-roboto font-medium text-10-b tracking-wider group-hover:text-60%"
          href="mailto:chijiokeobioha351@gmail.com"
          rel="noopener noreferrer"
          target="blank"
          >Say Hello!</a
        >
      </button>
    </div>
    <ContactSocial class="mt-8 flex justify-between items-center w-[50%]" />
    <Footer />
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
