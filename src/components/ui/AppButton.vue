<template>
  <button
    @click="onClick"
    class="bg-[#11559E] text-white text-sm font-semibold px-7 py-3 rounded-lg cursor-pointer outline-none transition-all duration-300 shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] hover:shadow-none hover:brightness-125 active:brightness-110 disabled:shadow-none"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script setup>
const emit = defineEmits(['handleClick'])
const { disabled } = defineProps({ disabled: Boolean })
const onClick = () => {
  emit('handleClick')
}
</script>
