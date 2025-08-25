<template>
  <div
    class="w-full h-full prose dark:prose-invert prose-xl text-[var(--color-text1)] lg:p-[15px] md:p-[10px] p-[5px]"
    v-html="marked_html"
  ></div>
</template>

<script setup lang="ts">
import { ref, watch, toRefs } from "vue";
import { marked } from "marked";

const props = defineProps<{
  content: string;
}>();

const { content } = toRefs(props);
const marked_html = ref();

const parse = async () => {
  marked_html.value = await marked.parse(content.value);
};

watch(content, parse, { immediate: true });
</script>
