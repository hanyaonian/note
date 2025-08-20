<template>
  <div ref="editor"></div>
</template>

<script setup lang="ts">
import { Crepe } from "@milkdown/crepe";
import "@milkdown/crepe/theme/common/style.css";
import "@milkdown/crepe/theme/frame.css";

const editor = ref<HTMLElement | null>(null);

onMounted(() => {
  const crepe = new Crepe({
    root: editor.value!,
  });

  crepe.create();
});
</script>
