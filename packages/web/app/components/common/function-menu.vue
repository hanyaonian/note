<template>
  <div class="fixed top-4 right-4 z-50">
    <slot />
    <IconButton :name="theme === 'light' ? 'light' : 'dark'" @click="changeTheme" />
  </div>
</template>

<script setup lang="ts">
import IconButton from "@/components/common/icon-button.vue";

import { useTheme } from "@/composables/theme";

const { theme, changeTheme } = useTheme();
</script>
