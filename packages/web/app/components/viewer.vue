<template>
  <div
    class="relative w-full bg-[var(--color-bg1)] px-6 py-12 shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 md:mx-auto md:max-w-3xl lg:max-w-4xl lg:pb-28 lg:pt-16"
  >
    <div class="mx-auto max-w-prose lg:text-lg">
      <div ref="container" class="prose prose-slate mx-auto mt-8 lg:prose-lg"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { marked } from "marked";

const props = defineProps<{
  content: string;
}>();

const container = ref<HTMLDivElement>();
const { content } = toRefs(props);

const render = async () => {
  if (container.value) {
    container.value.innerHTML = await marked(content.value);
  }
};

onMounted(render);
</script>
