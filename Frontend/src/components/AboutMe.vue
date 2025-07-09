<script setup>
import aboutme from "@/assets/img/about.jpeg";
import invitation from "@/assets/img/classic.jpeg";
</script>

<template>
  <div
    class="text-surface shadow-secondary-1 dark:bg-surface-dark md:max-w-page flex flex-col rounded-lg bg-white p-8 md:flex-row dark:text-white"
  >
    <img
      class="w-full rounded-t-lg object-cover h-50v md:h-auto sm:object-[100%_50%] md:w-1/3 md:!rounded-none md:!rounded-s-lg md:object-[100%_0%]"
      :src="aboutme"
      alt=""
    />
    <div
      class="font-moda flex flex-col items-center justify-center bg-slate-50 p-6 tracking-wide md:px-1/12 md:text-4xl lg:text-6xl"
    >
      <h5 class="mb-8 text-xl font-medium text-black md:text-4xl">About Me</h5>
      <p class="lg:px-15 mb-6 text-center text-base text-black md:text-xl">
        I’ve always had a deep passion for organizing and planning, and I
        believe that every special event deserves to be what you have always
        dreamed of. I am so in love with the wedding and event industry which I
        found by modeling in styled shoots! So, in 2022 I founded Styled Soirees
        and got started planning the shoots and eventually weddings and events!
        With the help and guidance of expert wedding planners and an amazing
        team, I’ll work day and night to guarantee that your next event will be
        filled with unforgettable moments.
      </p>
      <p
        class="font-sign text-surface/75 sm:text-xl md:text-2xl dark:text-black"
      >
        -Brooke Markovich
      </p>
    </div>
  </div>

  <div
    class="text-surface shadow-secondary-1 h-auto dark:bg-surface-dark md:max-w-page bg-white py-5 dark:text-white"
  >
    <img class="object-cover h-50v w-full" :src="invitation" alt="" />
  </div>
</template>
