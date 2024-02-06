<template>
  <div>
    <form @submit.prevent="handleSubmitForm" ref="form">
      <app-form-group
        name="title"
        :label="$t('form.title')"
        type="input"
        :placeholder="$t('form.titlePlaceholder')"
      />
      <app-form-group
        name="description"
        :label="$t('form.description')"
        type="textarea"
        :placeholder="$t('form.descriptionPlaceholder')"
      />
      <div class="flex justify-end">
        <app-button :disabled="pending">
          {{ pending ? $t('form.buttonPendingText') : $t('form.buttonText') }}
        </app-button>
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
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

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
    toastError(t('notification.formError'))
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
