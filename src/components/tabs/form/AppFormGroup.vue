<template>
  <div class="mb-8">
    <label :for="name" class="block font-semibold text-sm mb-1">{{ label }}</label>
    <template v-if="type === 'textarea'">
      <textarea
        :name="name"
        placeholder="Açıklama giriniz"
        :class="inputClasses"
        class="resize-none h-36"
      ></textarea>
    </template>
    <template v-else>
      <input type="text" :name="name" placeholder="Başlık giriniz" :class="inputClasses" />
    </template>
  </div>
</template>

<script setup>
const { type, label, name } = defineProps(['type', 'label', 'name'])
const inputClasses =
  'block px-4 py-3 w-full border border-gray-200 rounded-lg outline-none focus:border-gray-300'
</script>
