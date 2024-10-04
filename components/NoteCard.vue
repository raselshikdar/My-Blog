<script lang="ts" setup>
import type { PropType } from 'vue'
import type { Note } from '~/types'

interface Note {
  title: string
  content: string
  date: string
  category: {
    color: string
  }
}

defineProps({
  note: Object as PropType<Note>,
})

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).then(() => {
    console.log('Copied to clipboard:', text)
  })
}
</script>

<template>
  <div :style="{ backgroundColor: note.category.color }" class="flex flex-col space-y-2 p-4 rounded border-2 border-gray-200/50 transition-all hover:shadow-lg">
    <h2 class="text-lg font-bold">{{ note.title }}</h2>
    <p class="text-sm opacity-75">{{ note.content }}</p>
    <small class="text-xs text-gray-500 dark:text-gray-400">{{ note.date }}</small>
    <button 
      @click="copyToClipboard(note.content)" 
      class="mt-2 p-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all text-lg font-semibold shadow"
    >
      Copy Note
    </button>
  </div>
</template>

<style>
/* Additional styles for button visibility */
button {
  font-size: 1.1rem; /* Slightly increase the font size */
}
</style>
