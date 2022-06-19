<template>
  <section
    class="page place-items-center h-screen w-full flex flex-col overflow-auto"
  >
    <div class="main">
      <!-- Image One -->
      <div class="divA bg-[#e7e7e7] sm:bg-white">
        <!-- Img -->
        <div class="divB">
          <img class="imgWork" src="../assets/images/work/loopstudios.png" />

          <!-- Links to Repository and Live Demo -->
          <div class="link-div a">
            <!-- Code-Repo -->
            <a href="https://github.com/LucSil/loopstudios" target="blank">
              <ion-icon class="repo-one" name="logo-github"></ion-icon>
            </a>
            <!-- Live-Demo -->
            <a href="https://lucsil-loopstudios.netlify.app/" target="blank">
              <ion-icon class="demo-one" name="open-outline"></ion-icon>
            </a>
          </div>
        </div>
        <!-- Link -->
      </div>

      <!-- Image Two -->
      <div class="divA bg-[#293241]">
        <!-- Img -->
        <div class="divB">
          <img class="imgWork" src="../assets/images/work/room.png" />

          <!-- Links to Repository and Live Demo -->
          <div class="link-div b">
            <!-- Code-Repo -->
            <a href="https://github.com/LucSil/room" target="blank">
              <ion-icon class="repo-two" name="logo-github"></ion-icon>
            </a>
            <!-- Live-Demo -->
            <a href="https://lucsil-room.netlify.app/" target="blank">
              <ion-icon class="demo-two" name="open-outline"></ion-icon>
            </a>
          </div>
        </div>
      </div>

      <!-- Image Three -->
      <div class="divA bg-[#000b0e]">
        <!-- Img -->
        <div class="divB">
          <img class="imgWork" src="../assets/images/work/sunnyside.png" />

          <!-- Links to Repository and Live Demo -->
          <div class="link-div c">
            <!-- Code-Repo -->
            <a href="https://github.com/LucSil/sunnyside" target="blank">
              <ion-icon class="repo-three" name="logo-github"></ion-icon>
            </a>
            <!-- Live-Demo -->
            <a href="https://lucsil-sunnyside.netlify.app/" target="blank">
              <ion-icon class="demo-three" name="open-outline"></ion-icon>
            </a>
          </div>
        </div>
      </div>

      <!-- Image Four -->
      <div class="divA bg-[#e7e7e7] sm:bg-sky-100">
        <!-- Img -->
        <div class="divB">
          <img class="imgWork" src="../assets/images/work/advice.png" />

          <!-- Links to Repository and Live Demo -->
          <div class="link-div d">
            <!-- Code-Repo -->
            <a href="https://github.com/LucSil/advice-app" target="blank">
              <ion-icon class="repo-four" name="logo-github"></ion-icon>
            </a>
            <!-- Live-Demo -->
            <a href="https://lucsil-advice-app.netlify.app/" target="blank">
              <ion-icon class="demo-four" name="open-outline"></ion-icon>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Work",
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
