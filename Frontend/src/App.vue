<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <main class="flex-grow">
      <Navbar />
      <RouterView />
    </main>
    <Footer />
  </div>
</template>
