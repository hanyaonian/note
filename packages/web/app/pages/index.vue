<template>
  <div
    class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 dark:bg-gray-900 lg:pt-8 lg:py-12 transition-colors duration-300"
  >
    <div
      class="absolute inset-0 bg-top [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] dark:[mask-image:linear-gradient(180deg,black,rgba(0,0,0,0))]"
    ></div>
    <div
      class="relative w-full h-screen md:h-[80vh] bg-white dark:bg-gray-800 shadow-xl shadow-slate-700/10 dark:shadow-black/20 ring-1 ring-gray-900/5 dark:ring-gray-700/30 md:mx-auto md:max-w-3xl lg:max-w-4xl transition-colors duration-300"
    >
      <Editor
        class="mx-auto h-full overflow-y-auto scrollbar-hover:scrollbar-thumb-sky-500 scrollbar-active:scrollbar-thumb-sky-400 scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-300"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Editor from "@/components/editor.vue";
</script>
