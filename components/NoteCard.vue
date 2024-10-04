<script lang="ts" setup>
import type { PropType } from 'vue'
import type { Note } from '~/types'

defineProps({
  note: Object as PropType<Note>,
})

// Function to copy note content to clipboard
const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).then(() => {
    alert('Note copied to clipboard!');
  });
}
</script>

<template>
  <div 
    class="flex flex-col space-y-2 p-4 rounded border-2 border-gray-200/50 hover:bg-yellow-100 dark:(border-gray-800/30 hover:bg-gray-700) transition-all"
    :style="{ backgroundColor: note.color }"  <!-- Dynamic background color -->
  >
    <div class="flex justify-between items-center">
      <h2 class="text-lg font-bold">{{ note.title }}</h2>
      <button 
        @click="copyToClipboard(note.content)" 
        class="bg-blue-500 text-white rounded px-3 py-1 text-sm hover:bg-blue-600 transition-all"
      >
        Copy
      </button>
    </div>
    <p class="text-sm opacity-75">{{ note.content }}</p>
    <small class="text-xs text-gray-500 dark:text-gray-400">{{ note.date }}</small>
  </div>
</template>

<style>
.svg-container svg {
  width: 35px;
  height: 35px;
}
</style>
