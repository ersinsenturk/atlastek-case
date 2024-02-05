<template>
  <div>
    <form @submit.prevent="handleSubmitForm" ref="form">
      <app-form-group name="title" label="Başlık" type="input" />
      <app-form-group name="description" label="Açıklama" type="textarea" />
      <div class="flex justify-end">
        <app-button>Kaydet</app-button>
      </div>
    </form>
  </div>
</template>

<script setup>
import AppButton from '@/components/ui/AppButton.vue'
import AppFormGroup from './AppFormGroup.vue'
import SuccessIcon from '@/components/icons/SuccessIcon.vue'

import { toast } from 'vue3-toastify'

import { ref } from 'vue'

const form = ref()
const handleSubmitForm = (event) => {
  const fD = new FormData(event.target)
  console.log(fD.get('title'))
  // form.value.reset()
  toast.success('Bilgiler başarılı bir şekilde kaydedildi.', {
    icon: SuccessIcon,
    position: 'bottom-center',
    transition: 'slide',
    hideProgressBar: true,
    closeButton: false,
    toastStyle: {
      color: '#0F5132',
      backgroundColor: '#D1E7DD',
      border: '1px',
      borderColor: '#BADBCC',
      borderRadius: '16px',
      boxShadow: 'none'
    }
  })
}
</script>
