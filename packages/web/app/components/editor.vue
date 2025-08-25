<template>
  <textarea
    class="block box-border w-full resize-none m-0 lg:p-[15px] md:p-[10px] p-[5px] border-0 tab-4 text-[var(--color-text1)] bg-transparent outline-none"
    ref="editor"
    placeholder="Markdown here..."
    :value="modelValue"
    @input="handleInput"
  />
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps<{
  modelValue?: string;
}>();

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();

const editor = ref<HTMLTextAreaElement>();

const handleInput = (event: Event) => {
  const target = event.target as HTMLTextAreaElement;
  emit("update:modelValue", target.value);
};

watch(
  () => props.modelValue,
  (newValue) => {
    if (editor.value && newValue !== editor.value.value) {
      editor.value.value = newValue || "";
    }
  },
  { immediate: true },
);
</script>
