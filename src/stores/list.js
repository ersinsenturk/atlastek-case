import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useListStore = defineStore('list', () => {
  const list = ref([])

  return { list }
})
