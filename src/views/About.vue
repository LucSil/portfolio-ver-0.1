<template>
  <section class="mt-10 px-6 text-10-a">
    <!-- About Me -->
    <p class="text-base leading-8">
      Hello! My name is Destiny and I enjoy creating websites. I initially began
      with HTML & CSS, creating little web components, and was scared of trying
      out JavaScript. Later on, I learnt the
      <em class="text-10-b">Art Of Logical Creativity</em> and embraced
      <em class="text-10-b">Algorithmic Thinking</em>, which enabled me to
      understand the concept of programming and learn JavaScript.
    </p>

    <!-- Technology used -->
    <div class="text-base mt-10 mb-4">
      <p class="mb-4">Here's the tech I make use of:</p>
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
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>
