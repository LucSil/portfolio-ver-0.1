<template>
  <nav class="bg-60%">
    <div class="flex justify-between items-center p-4">
      <router-link
        to="/"
        class="font-raleway text-10-b text-2xl tracking-widest"
      >
        DSTNY
      </router-link>
      <button class="grid place-self-center">
        <ion-icon class="text-10-b text-2xl" name="grid"></ion-icon>
      </button>
    </div>

    <ul class="hidden">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </ul>
  </nav>
  <router-view />
</template>

<style></style>
