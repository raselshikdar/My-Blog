<script lang="ts" setup>
import NoteCard from '../NoteCard.vue'  // Corrected import path
import type { Note } from '~/types'

const { data: categories } = await useNotes() // Fetching notes data
</script>

<template>
  <div class="space-y-10">
    <div v-for="(category, cKey) in categories.body" :key="cKey">
      <SubTitle>{{ category.name }}</SubTitle>
      <div class="grid md:grid-cols-2 gap-5">
        <NoteCard
          v-for="(note, nKey) in category.notes" 
          :key="nKey" 
          :note="note" 
        />
      </div>
    </div>
  </div>
  <NuxtLink class="font-mono no-underline opacity-70 mt-8" :to="$route.path.split('/').slice(0, -1).join('/') || '/'">
    cd ..
  </NuxtLink>
</template>
