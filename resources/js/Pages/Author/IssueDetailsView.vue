<template >
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <ContentHeader title="Manuscript CGJ-2001" />
        <!-- /.content-header -->

        <!-- Main content -->
        <section class="content">
            <div class="container-fluid">
                <!-- Main content -->
                <div class="row mx-4">
                    <div class="card col-12">
                        <div class="card-header">
                            <h3 class="card-title">Manuscript Details</h3>
                            <div class="card-tools">
                                <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                    <i class="fas fa-minus"></i>
                                </button>
                            </div>
                        </div>
                        <div class="card-body p-5 d-flex flex-column" style="gap:20px">
                            <div class="row">
                                <div class="col-2">Manuscript ID</div>
                                <div class="col-10">CGJ-{{ study.id }}</div>
                            </div>
                            <div class="row">
                                <div class="col-2">Status</div>
                                <div class="col-10">{{ study.name }}</div>
                            </div>
                            <div class="row">
                                <div class="col-2">Study type</div>
                                <div class="col-10">{{ study.title }}</div>
                            </div>
                            <div class="row">
                                <div class="col-2">Title</div>
                                <div class="col-10">{{ study.study_title }}</div>
                            </div>
                            <div class="row">
                                <div class="col-2">Abstract</div>
                                <div class="col-10">
                                    <p>{{ study.abstract }}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-2">Keywords</div>
                                <div class="col-10">{{ keywords }}</div>
                            </div>
                            <div class="row">
                                <div class="col-2">manuscript file</div>
                                <div class="col-10 text-primary" @click="downloadURI(study.manuscript_file)"  >{{ study.manuscript_file }}</div>
                            </div>
                            <div class="row">
                                <div class="col-2">Submitting Date</div>
                                <div class="col-10">{{ study.created_at }}</div>
                            </div>

                            <div class="row">
                                <span class="nav-link py-2">Authors</span>
                                <hr>
                            </div>
                            <div class="row" v-for="(item, index) in authors" :key="item.id">
                                <div class="row">
                                    <div class="col-2">Author #{{ parseInt(index) + 1 }}</div>
                                    <div class="col-10">{{ item.first_name+" "+item.middle_name+" "+item.last_name }}</div>
                                </div>
                                <div class="row">
                                    <div class="col-2">Email</div>
                                    <div class="col-10">{{ item.email }}</div>
                                </div>
                            </div>

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
import {saveAs} from 'file-saver';

export default {
  data(){
    return{
      study : {},
      keywords : {},
      authors : {},
    }
  },
  async mounted() {
    let response = await axios.get(`${config.domain}/api/study/`+ this.$route.params.id)
    response = response.data.data
    this.study = response.study
    this.keywords = (response.keywords.map(item => item = item.keyword_title)).join(";")
    this.authors = response.authors
  },
  methods:{
      downloadURI(title){
          var link = document.createElement("a");
          link.download = title;
          link.href = `${config.domain}/storage/upload/studies/${title}`;
          link.click();
      },
        async downloadWithAxios(title) {
          let url = `${config.domain}/storage/upload/studies/${title}`
          await axios.get(url, {responseType: 'blob'})
              .then((response) => {
                saveAs(response.data, title)
              })
              .catch(() => console.log('error occured'))
        },
  }

}
</script>

<style scoped>
.nav-link {
    color: gray;
    font-weight: 600;
    letter-spacing: 0.2em;
}
</style>
