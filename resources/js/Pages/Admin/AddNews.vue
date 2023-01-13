<template >
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <ContentHeader title="Add New News" />
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
    name: "AddNews",
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
            fullData : new FormData()
        }
    },
    methods:{
        handleFileUpload(){
            this.formData.image = this.$refs.file.files[0]
        },
        async submit(){
            this.fullData.append('file', this.formData.image)
            this.fullData.append('data', JSON.stringify(this.formData))
            let response = await axios.post(`${config.domain}/api/news`, this.fullData)
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
.btn-register {
    padding: 8px 20px;
    font-weight: 500;
    color: white;
    background: #536F2E;
    box-shadow: inset 7px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 13px;
}
.ck-editor {
    height: 500px !important;
}
</style>
