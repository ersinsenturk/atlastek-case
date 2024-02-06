import { createI18n } from 'vue-i18n'

const messages = {
  tr: {
    tab: {
      add: 'Ekle',
      list: 'Listele'
    },
    form: {
      title: 'Başlık',
      titlePlaceholder: 'Başlık giriniz',
      description: 'Açıklama',
      descriptionPlaceholder: 'Açıklama giriniz',
      buttonText: 'Kaydet',
      buttonPendingText: 'Kaydediliyor...'
    },
    list: {
      title: 'Başlık & Açıklama',
      actions: 'İşlemler',
      loading: 'Yükleniyor...',
      emptyList: 'Henüz listelenecek açıklama girilmedi.'
    },
    notification: {
      formError: 'Lütfen tüm alanları doldurun.',
      listingError: 'Listeleme sırasında bir hata oluştu.',
      addSuccess: 'Bilgiler başarılı bir şekilde kaydedildi.',
      addError: 'Kaydetme sırasında bir hata oluştu.',
      deleteSuccess: 'Bilgiler başarılı bir şekilde silindi.',
      deleteError: 'Silinme sırasında bir hata oluştu.'
    }
  },
  en: {
    tab: {
      add: 'Add Item',
      list: 'List Items'
    },
    form: {
      title: 'Title',
      titlePlaceholder: 'Enter a title',
      description: 'Description',
      descriptionPlaceholder: 'Enter a description',
      buttonText: 'Save',
      buttonPendingText: 'Saving...'
    },
    list: {
      title: 'Title & Description',
      actions: 'Actions',
      loading: 'Loading...',
      emptyList: 'There is no item in the list yet.'
    },
    notification: {
      formError: 'Please fill all fields.',
      listingError: 'An error occured while listing.',
      addSuccess: 'Successfully saved.',
      addError: 'An error occured while saving.',
      deleteSuccess: 'Successfully deleted.',
      deleteError: 'An error occured while deleting.'
    }
  }
}

const datetimeFormats = {
  en: {
    short: {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    },
    long: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    }
  },
  tr: {
    short: {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    },
    long: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    }
  }
}

export default createI18n({
  locale: 'tr',
  fallbackLocale: 'tr',
  legacy: false,
  globalInjection: true,
  datetimeFormats,
  messages
})
