<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";
declare const grecaptcha: any;

let nameValue = ref("");
let partnernameValue = ref("");
let emailValue = ref("");
let phoneValue = ref("");
let dateValue = ref("");
let messageValue = ref("");
let banner = ref(false);
let notification = ref("");

const sendEmail = async (name, partnername, email, phone, message, date) => {
  grecaptcha.ready(function () {
    grecaptcha
      .execute("6Lf36MoqAAAAAHXTPvTd4aGqJagMVeggv5CFlVeJ", { action: "submit" })
      .then(function (token) {
        let data = {
          subject: `${name} and ${partnername}`,
          message: `Email: ${email} \n Phone Number: ${phone} \n Message: ${message} \n Event Date: ${date}`,
          token: token,
        };
        axios.post("/api/send-email", data).catch((error) => {
          banner.value = true;
          notification.value = "fail";
        });
      })
      .then(function (response) {
        banner.value = true;
        notification.value = "success";
        nameValue.value = "";
        partnernameValue.value = "";
        emailValue.value = "";
        phoneValue.value = "";
        dateValue.value = "";
        messageValue.value = "";
      })
      .catch(function (error) {
        banner.value = true;
        notification.value = "fail";
      });
  });
};
</script>

<template>
  <h1 class="flex justify-center py-8 font-italiana text-7xl">Contact</h1>

  <div class="flex justify-center pb-16">
    <form
      @submit.prevent="
        sendEmail(
          nameValue,
          partnernameValue,
          emailValue,
          phoneValue,
          messageValue,
          dateValue,
        )
      "
      class="w-3/4"
      id="email"
      ref="emailform"
    >
      <div v-if="banner" class="pb-4">
        <div
          v-if="notification == 'success'"
          class="flex w-full justify-center rounded-lg border-l-4 border-green-500 bg-green-100 py-6 font-serif text-green-700"
        >
          <p class="text-lg font-semibold">Contact Forum Sent Sucessfully!</p>
        </div>
        <div
          v-if="notification == 'fail'"
          class="flex w-full justify-center rounded-lg border-l-4 border-red-500 bg-red-100 py-6 font-serif text-red-700"
        >
          <p class="p-2 text-lg font-semibold">
            Contact Forum Sent Unsucessfully, Please Contact
            'StyledSoirees@outlook.com' Instead
          </p>
        </div>
      </div>
      <div class="py-4">
        <div class="relative">
          <input
            v-model="nameValue"
            type="text"
            id="name"
            name="name"
            class="peer h-10 w-full border-b border-gray-600 pt-2 font-serif text-gray-900 placeholder-transparent focus:border-b-2 focus:border-gray-900 focus:outline-none"
            placeholder="Name"
            required
          />
          <label
            for="name"
            class="absolute -top-3.5 left-0 font-serif text-sm text-gray-700 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-900"
            >*Name</label
          >
        </div>
      </div>
      <div class="py-4">
        <div class="relative">
          <input
            v-model="partnernameValue"
            type="text"
            id="partnername"
            name="partnername"
            class="peer h-10 w-full border-b border-gray-600 pt-2 font-serif text-gray-900 placeholder-transparent focus:border-b-2 focus:border-gray-900 focus:outline-none"
            placeholder="Partner's Name"
            required
          />
          <label
            for="partnername"
            class="absolute -top-3.5 left-0 font-serif text-sm text-gray-700 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-900"
            >*Partner's Name</label
          >
        </div>
      </div>
      <div class="py-4">
        <div class="relative">
          <input
            v-model="emailValue"
            type="email"
            id="email"
            name="email"
            class="peer h-10 w-full border-b border-gray-600 pt-2 font-serif text-gray-900 placeholder-transparent focus:border-b-2 focus:border-gray-900 focus:outline-none"
            placeholder="Email"
            required
          />
          <label
            for="email"
            class="absolute -top-3.5 left-0 font-serif text-sm text-gray-700 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-900"
            >*Email</label
          >
        </div>
      </div>
      <div class="py-4">
        <div class="relative">
          <input
            v-model="phoneValue"
            type="tel"
            id="phone"
            name="phone"
            class="peer h-10 w-full border-b border-gray-600 pt-2 font-serif text-gray-900 placeholder-transparent focus:border-b-2 focus:border-gray-900 focus:outline-none"
            placeholder="Phone Number"
            required
          />
          <label
            for="phone"
            class="absolute -top-3.5 left-0 font-serif text-sm text-gray-700 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-900"
            >*Phone Number</label
          >
        </div>
      </div>
      <div class="py-4">
        <div class="relative">
          <input
            v-model="dateValue"
            type="text"
            id="date"
            name="date"
            class="peer h-10 w-full border-b border-gray-600 pt-2 font-serif text-gray-900 placeholder-transparent focus:border-b-2 focus:border-gray-900 focus:outline-none"
            placeholder="Event Date"
            required
          />
          <label
            for="date"
            class="absolute -top-3.5 left-0 font-serif text-sm text-gray-700 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-900"
            >*Event Date</label
          >
        </div>
      </div>
      <div class="py-4">
        <div class="relative">
          <input
            v-model="messageValue"
            type="text"
            id="message"
            name="message"
            class="peer h-10 w-full border-b border-gray-600 pt-2 font-serif text-gray-900 placeholder-transparent focus:border-b-2 focus:border-gray-900 focus:outline-none"
            placeholder="Message"
          />
          <label
            for="message"
            class="absolute -top-3.5 left-0 font-serif text-sm text-gray-700 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-900"
            >Message</label
          >
        </div>
      </div>
      <div class="flex justify-center py-4">
        <button
          type="submit"
          class="text-md rounded-md border border-transparent bg-black px-10 py-3 text-center font-serif text-white shadow-md transition-all hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-none active:bg-gray-900 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>
