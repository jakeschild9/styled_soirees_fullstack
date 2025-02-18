<script setup>
import { Swiper, SwiperSlide } from "swiper/vue"
import { Navigation, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "../assets/caroselstyle.css"

const imgUrls = import.meta.glob("../assets/img/*.jpg", {
    import: "default",
    eager: true,
})

const modules = [Navigation, Autoplay]
</script>

<template>
    <main>
        <div>
            <swiper
                :slidesPerView="1"
                :spaceBetween="0"
                :loop="true"
                :pagination="{
                    clickable: true,
                }"
                :autoplay="{
                    delay: 3000,
                    disableOnInteraction: false,
                }"
                :navigation="true"
                :modules="modules"
            >
                <SwiperSlide v-for="img in imgUrls" :key="img">
                    <img class="carosel-img" :src="img" />
                </SwiperSlide>
            </swiper>
        </div>
    </main>
</template>
