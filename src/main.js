import { createApp } from 'vue'; // Mengimpor fungsi createApp dari Vue
import App from './App.vue'; // Mengimpor komponen utama aplikasi
import router from './router'; // Mengimpor konfigurasi router
import './assets/tailwind.css'; // Mengimpor file CSS Tailwind

// Membuat aplikasi Vue, memasang router, dan melakukan mount pada elemen dengan id "app"
createApp(App).use(router).mount('#app');
