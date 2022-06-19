<template>
  <section
    class="page h-screen mt-20 sm:mt-0 lg:mt-0 mx-6 sm:mx-10 lg:mx-20 text-10-a grid sm:place-items-center"
  >
    <div class="main">
      <!-- About Me -->
      <p class="text-base lg:text-lg leading-8 font-roboto sm:tracking-wide">
        Hello! My name is Destiny and I enjoy creating websites. I initially
        began with HTML & CSS, creating little web components, and was scared of
        trying out JavaScript. Later on, I learnt the
        <em class="text-10-b font-raleway">Art Of Logical Creativity</em> and
        embraced <em class="text-10-b font-raleway">Algorithmic Thinking</em>,
        which enabled me to understand the concept of programming and learn
        JavaScript.
      </p>

      <!-- Interests -->
      <p
        class="text-base lg:text-lg font-roboto leading-8 sm:tracking-wide mt-4"
      >
        I have a great deal of interest in learning about and creating
        serverless fullstack applications -
        <em class="text-10-b font-raleway">JAMstack apps</em>. Lots of
        advantages going serveless!
      </p>

      <!-- Technology used -->
      <div class="text-base lg:text-lg mt-10 mb-4">
        <p class="mb-4 font-raleway">Here's the tech I make use of:</p>
        <section class="grid grid-cols-2 text-30%">
          <!-- Grid Col 1 -->
          <div class="grid tech-grid">
            <span class="tech"><span class="circle"></span>HTML</span>
            <span class="tech"><span class="circle"></span>CSS/SCSS</span>
            <span class="tech"
              ><span class="circle"></span>JavaScript (ES6+)</span
            >
          </div>
          <!-- Grid Col 2 -->
          <div class="grid tech-grid">
            <span class="tech"><span class="circle"></span>Git & Github</span>
            <span class="tech"><span class="circle"></span>TailwindCSS</span>
            <span class="tech"><span class="circle"></span>Vue.js</span>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
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
