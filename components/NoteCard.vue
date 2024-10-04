<script lang="ts" setup>
import type { PropType } from 'vue'
import type { Note } from '~/types'

interface Note {
  title: string
  content: string
  date: string
}

// Define props for the note
defineProps({
  note: Object as PropType<Note>,
})

// Function to copy note content to clipboard
const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text)
    alert('Note copied to clipboard!')
  } catch (err) {
    console.error('Failed to copy: ', err)
  }
}
</script>

<template>
  <div class="relative flex flex-col space-y-2 p-4 rounded border-2 border-gray-200/50 hover:bg-yellow-100 dark:(border-gray-800/30 hover:bg-gray-700) transition-all">
    <button
      @click="copyToClipboard(note.content)"
      class="absolute top-2 right-2 p-1 bg-white rounded-full shadow hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
      title="Copy Note"
    >
      <i class="i-line-md-sticky-note" aria-hidden="true"></i> <!-- Replace with your sticky note icon -->
    </button>
    <h2 class="text-lg font-bold">{{ note.title }}</h2>
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
