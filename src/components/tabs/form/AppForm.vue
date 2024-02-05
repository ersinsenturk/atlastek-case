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
import AppFormGroup from '@/components/tabs/form/AppFormGroup.vue'

import { ref } from 'vue'

const form = ref()
const handleSubmitForm = (event) => {
  const fD = new FormData(event.target)
  console.log(fD.get('title'))
  form.value.reset()
}
</script>
