<template >
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <ContentHeader title="Edit News" />
        <!-- /.content-header -->

        <!-- Main content -->
        <section class="content" >
            <div class="container-fluid">
                <!-- Main content -->
                <div class="row px-3">
                    <div class="card">
                        <div class="card-body">
                            <form class="d-flex flex-column" @submit.prevent="submit">
                                <div class="mb-3">
                                    <img :src="`/storage/upload/news/${formData.image}`" class="img-fluid" alt="">
                                </div>
                                <div class="mb-3">
                                    <label for="title" class="form-label">Title</label>
                                    <input type="text" class="form-control" id="title" v-model="formData.title">
                                </div>
                                <div class="input-group mb-3">
                                    <input class="form-control" @change="handleFileUpload" type="file" ref="file" name="file" id="file">
                                    <label class="input-group-text" for="file">Upload Image</label>
                                </div>
                                <div class="mb-3">
                                    <label for="content" class="form-label">Content</label>
                                    <ckeditor :editor="editor" v-model="formData.content"
                                              :config="editorConfig" required style="height: 30vh !important;">
                                    </ckeditor>
                                </div>
                                <button type="submit" class="align-self-end btn btn-success">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /.container-fluid -->
        </section>
        <!-- /.content -->
    </div>
</template>

<script>
import axios from "axios";
import config from "../../Data/config";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export default {
    name: "EditNews.vue",
    data(){
        return{
            editor: ClassicEditor,
            editorData: '<p>Content of the editor.</p>',
            editorConfig: {
                height : 500
            },
            formData : {
                title : '',
                image : null,
                content : ''
            },
            fullData : new FormData(),
            domain : config.domain
        }
    },
    async mounted(){
        let data = (await axios.get(`${config.domain}/api/news/${this.$route.params.id}`)).data.data
        this.formData.title = data.title;
        this.formData.image = data.image;
        this.formData.content = data.content;
    },
    methods:{
        handleFileUpload(){
            this.formData.image = this.$refs.file.files[0]
            this.fullData.append('file', this.formData.image)
        },
        async submit(){

            this.fullData.append('data', JSON.stringify(this.formData))

            let response = await axios.post(`${config.domain}/api/news/${this.$route.params.id}`, this.fullData)
            if(response.data.success) {
                this.$swal({
                    text: response.data.message,
                    icon: "success"
                });
                this.$router.push({name : 'Admin News'})
            }else{
                this.$swal({
                    text : response.data.message,
                    icon : "error"
                });
            }
        }
    }
}
</script>

<style scoped>

</style>
