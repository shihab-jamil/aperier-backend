<template >
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <ContentHeader title="Archived Studies" />
        <!-- /.content-header -->

        <!-- Main content -->
        <section class="content">
            <div class="container-fluid">
                <!-- Main content -->
                <div class="row mx-4">
                    <div class="card col-12">
                        <div class="card-header">
                            <h3 class="card-title">All Issues</h3>
                            <div class="card-tools">
                                <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                    <i class="fas fa-minus"></i>
                                </button>
                            </div>
                        </div>
                        <div class="card-body">
                            <table id="example2" class="table table-bordered table-striped table-head-fixed">
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th width="500px">Title</th>
                                    <th>Status</th>
                                    <th>Date</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="item in studyList" :key="item">
                                    <td>CGJ-{{  item.id }}</td>
                                    <td>{{ item.title }}</td>
                                    <td><span :class="badgeColor(item.name)">{{ item.name }}</span></td>
                                    <td>{{ item.created_at }}</td>
                                    <td>
                                        <router-link :to="{ name: 'Admin Study Action', params: { id: item.id } }" >View</router-link>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- main content end -->
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
import config from "@/Data/config";

export default {
    data(){
        return{
            studyList : {}
        }
    },
    async mounted() {
        this.studyList = (await axios.get(`${config.domain}/api/all-studies?type=archived`)).data.data;
    },
    methods:{
        badgeColor(value){
            switch (value) {
                case "Archived":
                    return "badge bg-warning";
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
