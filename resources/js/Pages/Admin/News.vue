<template >
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <ContentHeader title="Manage Your News" />
        <!-- /.content-header -->

        <!-- Main content -->
        <section class="content" >
            <div class="container-fluid">
                <!-- Main content -->
                <div class="card-body">
                    <div class="float-right my-2 mb-4">
                        <router-link :to="{ name: 'Admin News Add' }" class="btn-register">Add News</router-link>
                    </div>
                    <table id="example2" class="table table-bordered table-striped table-head-fixed">
                        <thead>
                        <tr>
                            <th width="120px">Image</th>
                            <th>Title</th>
                            <th width="120px">Date</th>
                            <th width="140px">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in data" :key="item.id" >
                                <td class="p-2">
                                    <img :src="`${domain}/storage/upload/news/${item.image}`" class="img-fluid" alt="">
                                </td>
                                <td>{{ item.title }}</td>
                                <td>{{ item.date }}</td>
                                <td>
                                    <router-link :to="{name: 'Admin News Edit', params:{id : item.id}}">Edit</router-link> |
                                    <span @click="deleteNews(item.id)" class="text-danger" style="cursor: pointer">Delete</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
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

export default {
    name: "News",
    data(){
        return{
            data : [],
            domain : config.domain
        }
    },
    async mounted(){
        this.data = (await axios.get(`${config.domain}/api/news`)).data.data
    },
    methods:{
        async deleteNews(id){
            if(!confirm("Are you sure?")) return;
            let response = await axios.delete(`${config.domain}/api/news/${id}`);
            if(response.data.success) {
                this.$swal({
                    text: response.data.message,
                    icon: "success"
                });
                this.data = (await axios.get(`${config.domain}/api/news`)).data.data
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
</style>
