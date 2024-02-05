<template>
  <div>
    <form @submit.prevent="handleSubmitForm" ref="form">
      <app-form-group name="title" label="Başlık" type="input" />
      <app-form-group name="description" label="Açıklama" type="textarea" />
      <div class="flex justify-end">
        <app-button :disabled="pending">{{ pending ? 'Kaydediliyor...' : 'Kaydet' }} </app-button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppButton from '@/components/ui/AppButton.vue'
import AppFormGroup from './AppFormGroup.vue'
import { useAppToast } from '@/composables/useAppToast'
const { toastError } = useAppToast()
import { useListStore } from '@/stores/list'
import { storeToRefs } from 'pinia'
const { addItemToList } = useListStore()
const store = useListStore()
const { pending } = storeToRefs(store)

const form = ref()

const handleSubmitForm = (event) => {
  const formData = new FormData(event.target)
  const title = formData.get('title')
  const description = formData.get('description')

  if (title === '' || description === '') {
    toastError('Lütfen tüm alanları doldurun.')
    return
  }
  const newItem = {
    title,
    description
  }
  addItemToList(newItem)
  form.value.reset()
}
</script>
