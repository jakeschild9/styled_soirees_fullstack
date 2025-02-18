<script setup>
import chrimson from "@/assets/img/crimson.jpeg"
import malachi from "@/assets/img/malachi.jpeg"
import derek from "@/assets/img/derek.jpeg"
import evermor from "@/assets/img/evermore.jpeg"
import bars from "@/assets/img/bars.jpeg"
import glow from "@/assets/img/glow.jpeg"
</script>

<template>
    <h1
        class="font-italiana flex justify-center pt-8 text-center text-5xl tracking-wide antialiased"
    >
        PREFERRED VENDORS
    </h1>
    <div
        class="my-8 grid place-items-center content-center gap-6 px-6 sm:grid-cols-1 md:grid-cols-3"
    >
        <div class="h-full overflow-hidden rounded-xl bg-slate-50 shadow-xl">
            <div class="relative pb-2/3">
                <img
                    :src="chrimson"
                    class="absolute h-full w-full object-cover object-[0%_35%]"
                />
            </div>
            <div
                class="font-moda flex flex-wrap justify-center p-6 text-center"
            >
                <a
                    class="pb-5 text-3xl"
                    href="https://www.instagram.com/crimsonbridalcollective/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >CRIMSON BRIDAL COLLECTIVE</a
                >
                <p class="text-slate-700">
                    Expert hair, Makeup, and Men’s styling to make your entire
                    group look and feel their best! They bring the life of the
                    party to your getting ready experience, flawless beauty
                    tailored to you!
                </p>
            </div>
        </div>
        <div class="h-full overflow-hidden rounded-xl bg-slate-50 shadow-xl">
            <div class="relative pb-2/3">
                <img
                    :src="evermor"
                    class="absolute h-full w-full object-cover"
                />
            </div>
            <div
                class="font-moda flex flex-wrap justify-center p-6 text-center"
            >
                <a
                    class="pb-5 text-center text-3xl"
                    href="https://www.instagram.com/Evermore.bride/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >EVERMORE BRIDAL</a
                >
                <p class="text-slate-700">
                    Stunning dresses and elegant accessories to complete your
                    dream wedding look! They take the time to personalize your
                    look to you and create a timeless style for every bride!
                </p>
            </div>
        </div>
        <div class="h-full overflow-hidden rounded-xl bg-slate-50 shadow-xl">
            <div class="relative pb-2/3">
                <img
                    :src="malachi"
                    class="absolute h-full w-full object-cover"
                />
            </div>
            <div
                class="font-moda flex flex-wrap justify-center p-6 text-center"
            >
                <a
                    class="pb-5 text-3xl"
                    href="https://www.instagram.com/malachiwestbrookphotography/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >MALACHI WESTBROOK</a
                >
                <p class="text-slate-700">
                    Capturing timeless moments with a creative and artistic
                    touch, Malachi Westbrook Photography understands and paints
                    a picture that captures your essense! Stunning wedding
                    photography that tells your love story!
                </p>
            </div>
        </div>
        <div class="h-full overflow-hidden rounded-xl bg-slate-50 shadow-xl">
            <div class="relative pb-2/3">
                <img
                    :src="bars"
                    class="absolute h-full w-full object-cover object-[0%_60%]"
                />
            </div>
            <div
                class="font-moda flex flex-wrap justify-center p-6 text-center"
            >
                <a
                    class="pb-5 text-3xl"
                    href="https://www.instagram.com/thebarsstl/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >THE BAR'S STL</a
                >
                <p class="text-slate-700">
                    The Bar’s adds a tasty twist to your event with their fun
                    and unique snack bars! From a cocktail hour holdover to a
                    late-night pick me up, they keep your guests fueled and
                    happy all night.
                </p>
            </div>
        </div>
        <div class="h-full overflow-hidden rounded-xl bg-slate-50 shadow-xl">
            <div class="relative pb-2/3">
                <img :src="derek" class="absolute h-full w-full object-cover" />
            </div>
            <div
                class="font-moda flex flex-wrap justify-center p-6 text-center"
            >
                <a
                    class="pb-5 text-3xl"
                    href="https://www.instagram.com/derek_coffman_photography/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >DEREK COFFMAN</a
                >
                <p class="text-slate-700">
                    Personal and editorial-style photography that simply
                    captures your love story with depth, emotion, and timeless
                    elegance.
                </p>
            </div>
        </div>
        <div class="h-full overflow-hidden rounded-xl bg-slate-50 shadow-xl">
            <div class="relative pb-2/3">
                <img :src="glow" class="absolute h-full w-full object-cover" />
            </div>
            <div
                class="font-moda flex flex-wrap justify-center p-6 text-center"
            >
                <a
                    class="pb-5 text-3xl"
                    href="https://www.instagram.com/glowboothstl/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >GLOWBOOTH STL</a
                >
                <p class="text-slate-700">
                    Glowbooth STL brings the fun with a photo booth that's all
                    about making memories! With their stylish booths and
                    personalized touches, you and your guests will snap endless
                    smiles and take home a keepsake from the big day.
                </p>
            </div>
        </div>
    </div>
</template>
