<template>
  <button
    class="p-2 rounded-lg bg-white border-none dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
  >
    <div class="w-[16px] h-[16px] relative">
      <SvgIcon :name="name" color="var(--color-text1)" />
    </div>
  </button>
</template>

<script setup lang="ts">
import SvgIcon from "@/components/common/svg-icon.vue";

const props = defineProps<{
  name: string;
}>();

const { name } = toRefs(props);
</script>
