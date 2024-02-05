import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { useAppToast } from '@/composables/useAppToast'
const { toastSuccess, toastError } = useAppToast()

const apiUrl = import.meta.env.VITE_API_URL

export const useListStore = defineStore('list', () => {
  const list = ref([])
  const pending = ref(false)

  const fetchList = async () => {
    pending.value = true
    try {
      const { data } = await axios.get(apiUrl)
      list.value = data
    } catch (error) {
      toastError('Listeleme sırasında bir hata oluştu.')
    } finally {
      pending.value = false
    }
  }

  const addItemToList = async (newItem) => {
    pending.value = true
    try {
      await axios.post(apiUrl, {
        ...newItem
      })
      fetchList()
      toastSuccess('Bilgiler başarılı bir şekilde kaydedildi.')
    } catch (error) {
      toastError('Kaydetme sırasında bir hata oluştu.')
    } finally {
      pending.value = false
    }
  }

  const deleteItemFromList = async (id) => {
    pending.value = true
    try {
      await axios.delete(`${apiUrl}/${id}`)
      fetchList()
      toastSuccess('Bilgiler başarılı bir şekilde silindi.')
    } catch (error) {
      toastError('Silinme sırasında bir hata oluştu.')
    } finally {
      pending.value = false
    }
  }

  return { list, pending, fetchList, addItemToList, deleteItemFromList }
})
