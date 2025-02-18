<script setup>
import logo from "@/assets/img/logo.png"
import { ref } from "vue"

const navOpen = ref(false)
</script>

<template>
    <div
        class="min-h-24 items-center justify-between border-b border-black bg-black pl-5 sm:flex"
    >
        <router-link class="flex flex-shrink-0 items-center pt-5 sm:p-0" to="/">
            <img class="h-14 w-auto sm:h-10" :src="logo" alt="SS" />
            <span
                class="font-moda ml-2 block text-3xl text-white sm:max-lg:hidden"
                >StyledSoirees</span
            >
        </router-link>

        <!-- Mobile -->
        <div class="bg-black px-2 py-2 sm:hidden">
            <div class="">
                <button @click="navOpen = !navOpen">
                    <svg
                        :class="navOpen ? 'hidden' : ''"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-10 text-white"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>

                    <svg
                        :class="navOpen ? '' : 'hidden'"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-10 text-white"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>

            <nav
                :class="navOpen ? '' : 'hidden'"
                class="grid grid-cols-3 py-2 text-white"
            >
                <RouterLink
                    to="/"
                    class="font-moda text-l rounded-md bg-black px-4 py-2 text-white hover:bg-gray-50 hover:text-black"
                    >Home</RouterLink
                >
                <RouterLink
                    to="/contact"
                    class="font-moda text-l rounded-md bg-black px-4 py-2 text-white hover:bg-gray-50 hover:text-black"
                    >Contact</RouterLink
                >
                <RouterLink
                    to="/services"
                    class="font-moda text-l rounded-md bg-black px-4 py-2 text-white hover:bg-gray-50 hover:text-black"
                    >Services</RouterLink
                >
                <RouterLink
                    to="/vendors"
                    class="font-moda text-l rounded-md bg-black px-4 py-2 text-white hover:bg-gray-50 hover:text-black"
                    >Vendors</RouterLink
                >
                <a
                    href="https://styledsoirees.pixieset.com/styledsoireesportfolio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="font-moda text-l rounded-md bg-black px-4 py-2 text-white hover:bg-gray-50 hover:text-black"
                    >Protfolio</a
                >
                <a
                    href="https://www.instagram.com/styled.soirees/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="font-moda text-l rounded-md bg-black px-4 py-2 text-white hover:bg-gray-50 hover:text-black"
                    >IG</a
                >
            </nav>
        </div>

        <!-- Desktop -->
        <div class="hidden bg-black pr-8 sm:block">
            <div class="flex gap-x-1">
                <RouterLink
                    to="/"
                    class="font-moda rounded-md bg-black px-3 py-2 text-xl text-white hover:bg-gray-50 hover:text-black"
                    >Home</RouterLink
                >
                <RouterLink
                    to="/contact"
                    class="font-moda rounded-md bg-black px-3 py-2 text-xl text-white hover:bg-gray-50 hover:text-black"
                    >Contact</RouterLink
                >
                <RouterLink
                    to="/services"
                    class="font-moda rounded-md bg-black px-3 py-2 text-xl text-white hover:bg-gray-50 hover:text-black"
                    >Services</RouterLink
                >
                <RouterLink
                    to="/vendors"
                    class="font-moda rounded-md bg-black px-3 py-2 text-xl text-white hover:bg-gray-50 hover:text-black"
                    >Vendors</RouterLink
                >
                <a
                    href="https://styledsoirees.pixieset.com/styledsoireesportfolio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="font-moda rounded-md bg-black px-3 py-2 text-xl text-white hover:bg-gray-50 hover:text-black"
                    >Protfolio</a
                >
                <a
                    href="https://www.instagram.com/styled.soirees/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="font-moda rounded-md bg-black px-3 py-2 text-xl text-white hover:bg-gray-50 hover:text-black"
                    >IG</a
                >
            </div>
        </div>
    </div>
</template>
