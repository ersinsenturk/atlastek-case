import { toast } from 'vue3-toastify'
import SuccessIcon from '@/components/icons/SuccessIcon.vue'

export const useAppToast = () => {
  const toastSuccess = (text) => {
    toast.success(text, {
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
  const toastError = (text) => {
    toast.error(text, {
      position: 'bottom-center',
      transition: 'slide',
      hideProgressBar: true,
      closeButton: false,
      toastStyle: {
        color: '#b8272c',
        backgroundColor: 'rgba(244,63,94,.14)',
        borderRadius: '16px',
        boxShadow: 'none'
      }
    })
  }

  return { toastSuccess, toastError }
}
