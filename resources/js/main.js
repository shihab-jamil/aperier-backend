import { createApp } from 'vue'
import App from './App.vue'
import router from './Configurations/router'
import SectionTitleComponent from './Components/SectionTitleComponent.vue';
import ContentHeader from './Components/Author/ContentHeader.vue';

// import './Css/style.css'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import './bootstrap';

import CKEditor from '@ckeditor/ckeditor5-vue';

const app = createApp(App)

app.use(router)

app.use(VueSweetalert2)
// app.use(VeeValidate)
// app.component('ValidationProvider', ValidationProvider);
// app.component('ValidationObserver', ValidationObserver );

// app.use(Downloader)

// app.component('download', Downloader);

app.component('section-title', SectionTitleComponent)

app.component("ContentHeader", ContentHeader)

app.use(CKEditor);

app.mount('#app')
