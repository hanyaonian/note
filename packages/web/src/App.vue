<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);

const increment = () => {
  count.value++;
};
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white p-4 md:p-8">
    <header class="mb-8">
      <h1 class="text-4xl md:text-5xl font-bold text-center mb-2">Vue3 + TS + Tailwind CSS</h1>
      <p class="text-center text-gray-300">Modern web development stack</p>
    </header>

    <main class="max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl">
      <div class="flex flex-col items-center justify-center space-y-6">
        <p class="text-xl">
          Count: <span class="font-bold text-2xl text-yellow-400">{{ count }}</span>
        </p>
        <button
          @click="increment"
          class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Increment
        </button>
      </div>
    </main>

    <footer class="mt-8 text-center text-gray-400 text-sm">
      <p>Built with ❤️ using Vue3, TypeScript and Tailwind CSS</p>
    </footer>
  </div>
</template>
