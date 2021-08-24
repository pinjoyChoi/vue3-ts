import { createI18n } from 'vue-i18n';

export default createI18n({
  locale: localStorage.getItem('locale') || 'ch',
  messages: {
    ch: require('./ch'),
    en: require('./en'),
  }
})
