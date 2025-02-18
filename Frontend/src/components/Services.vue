<script setup>
import planning from "@/assets/img/DSC_6357.jpeg";
import styledshoot from "@/assets/img/styledshoot.jpeg";
import coordination from "@/assets/img/coodination.jpeg";
</script>

<template>
  <h1
    class="flex justify-center text-center pt-8 text-5xl font-italiana antialiased tracking-wide"
  >
    SERVICES
  </h1>
  <div class="my-8 grid gap-6 px-6 sm:grid-cols-1 md:grid-cols-3">
    <div class="h-auto overflow-hidden rounded-xl bg-slate-50 shadow-xl">
      <div class="relative pb-2/3">
        <img :src="planning" class="absolute h-full w-full object-cover" />
      </div>
      <div class="flex flex-wrap justify-center p-6 text-center font-moda">
        <h4 class="pb-5 text-3xl">WEDDING PLANNING</h4>
        <p class="text-slate-700">
          A wedding planning service to assist couples in planning and
          organizing their wedding. Handling everything from budgeting and
          vendor coordination to design and logistics. We provide expert
          guidance, creativity, and attention to detail to create a memorable
          and stress-free wedding experience.
        </p>
      </div>
    </div>

    <div class="h-auto overflow-hidden rounded-xl bg-slate-50 shadow-xl">
      <div class="relative pb-2/3">
        <img :src="styledshoot" class="absolute h-full w-full object-cover" />
      </div>
      <div class="sha flex flex-wrap justify-center p-6 text-center font-moda">
        <h4 class="pb-5 text-3xl">STYLED SHOOTS</h4>
        <p class="text-slate-700">
          We specialize in creating captivating and visually stunning styled
          shoots. Coordinating with photographers, vendors, and creatives to
          curate cohesive and aesthetically pleasing experiences that showcase
          unique styles and visions.
        </p>
      </div>
    </div>

    <div class="h-auto overflow-hidden rounded-xl bg-slate-50 shadow-xl">
      <div class="relative pb-2/3">
        <img :src="coordination" class="absolute h-full w-full object-cover" />
      </div>
      <div class="sha flex flex-wrap justify-center p-6 text-center font-moda">
        <h4 class="pb-5 text-3xl">DAY OF COORDINATION</h4>
        <p class="text-slate-700">
          Let us handle the details so you can enjoy every moment of your
          special day! Our Day-Of Coordination service ensures that your
          timeline runs smoothly, vendors are managed, and every detail is
          flawlessly executed. From setup to last-minute adjustments, we take
          care of everything so you can relax and celebrate stress-free.
        </p>
      </div>
    </div>
  </div>
</template>
