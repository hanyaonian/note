<template>
  <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 pt-8 lg:py-12">
    <div class="absolute inset-0 bg-top [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
    <div
      class="relative w-full h-screen md:h-[80vh] bg-white shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 md:mx-auto md:max-w-3xl lg:max-w-4xl"
    >
      <Editor class="mx-auto h-full md:mt-8" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Editor from "@/components/editor.vue";
</script>
