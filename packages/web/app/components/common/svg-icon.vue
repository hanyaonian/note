<template>
  <span class="svg-icon" :style="{ color: color }" v-html="icon"></span>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string;
  color?: string;
}>();

const icon = ref<string | null>(null);

const loadIcon = async () => {
  const svg = await import(`@/assets/icons/${props.name}.svg?raw`);
  icon.value = svg.default;
};

onMounted(loadIcon);
watch(() => props.name, loadIcon);
</script>

<style>
.svg-icon > svg {
  height: 100% !important;
  width: 100% !important;
}
</style>
