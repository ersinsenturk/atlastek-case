import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { useAppToast } from '@/composables/useAppToast'
const { toastSuccess, toastError } = useAppToast()
import { useI18n } from 'vue-i18n'

const apiUrl = import.meta.env.VITE_API_URL

export const useListStore = defineStore('list', () => {
  const { t } = useI18n()

  const list = ref([])
  const pending = ref(false)

  const fetchList = async () => {
    pending.value = true
    try {
      const { data } = await axios.get(apiUrl)
      list.value = data
    } catch (error) {
      toastError(t('notification.listingError'))
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
      toastSuccess(t('notification.addSuccess'))
    } catch (error) {
      toastError(t('notification.addError'))
    } finally {
      pending.value = false
    }
  }

  const deleteItemFromList = async (id) => {
    pending.value = true
    try {
      await axios.delete(`${apiUrl}/${id}`)
      fetchList()
      toastSuccess(t('notification.deleteSuccess'))
    } catch (error) {
      toastError(t('notification.deleteError'))
    } finally {
      pending.value = false
    }
  }

  return { list, pending, fetchList, addItemToList, deleteItemFromList }
})
