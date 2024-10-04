<script lang="ts" setup>
import type { PropType } from 'vue'

interface Note {
  title: string
  content: string
  date: string
}

defineProps({
  note: Object as PropType<Note>,
})
</script>

<template>
  <div class="flex flex-col space-y-2 p-4 rounded border-2 border-gray-200/50 hover:bg-yellow-100 dark:(border-gray-800/30 hover:bg-gray-700) transition-all">
    <h2 class="text-lg font-bold">{{ note.title }}</h2>
    <p class="text-sm opacity-75">{{ note.content }}</p>
    <small class="text-xs text-gray-500 dark:text-gray-400">{{ note.date }}</small>
  </div>
</template>

<style>
/* Add any custom styling here */
</style>
