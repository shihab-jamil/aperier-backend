<template>
    <section style=" margin-top: 60px;">
        <div class="container">
            <div class="row p-5 d-flex flex-column gy-4">
                <p class="issue-title">{{ study.title}}</p>
                <span>{{ studyDetails.study_authors }}</span>
                <div class="stat-box">
                    <div class="stat-box-left">
                        <span>{{ (new Date(study.created_at)).getFullYear() }}. <span class="text-success">{{ study.journal_title }} {{ this.study.volume }}(1)</span>, {{ study.page }} </span>
                        <div class="stat-box-left-body">
                            <p class="d-flex flex-column align-items-center">
                                <span class="text-secondary">Received</span>
                                <span>{{ study.created_at }}</span>
                            </p>
                            <p class="d-flex flex-column align-items-center">
                                <span class="text-secondary">Revised</span>
                                <span>{{ study.updated_at }}</span>
                            </p>
                            <p class="d-flex flex-column align-items-center">
                                <span class="text-secondary">Accepted</span>
                                <span>{{ study.accepted_at }}</span>
                            </p>
                            <p class="d-flex flex-column align-items-center">
                                <span class="text-secondary">First published </span>
                                <span>{{ study.accepted_at }}</span>
                            </p>
                        </div>
                    </div>
                    <div class="stat-box-right">
                        <button class="btn-download">
                            <i class="fa-solid fa-cloud-arrow-down"></i>
<!--                            <a :download="fileUrl"></a>-->
                            <span @click="downloadURI">Download</span>
                        </button>
                        <button class="btn-download">
                            <i class="fa-solid fa-eye"></i>
                            <span>Preview</span>
                        </button>
                    </div>
                </div>
                <div class="cite-box mb-5">
                    <span>Cite this article</span>
                    <p> {{ studyDetails.study_authors }}({{ (new Date(study.created_at)).getFullYear() }}). {{study.title}}.
                        {{ study.journal_title }} {{ study.volume }}(1), {{ study.page }}.</p>
                </div>
                <span class="nav-link py-0">Abstract</span>
                <hr>
                <p class="abstract">
                    {{ study.abstract }}
                </p>
                <section class="metadata mt-5">
                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="pills-keyword-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-keyword" type="button" role="tab" aria-controls="pills-keyword"
                                aria-selected="true">Keywords</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-table-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-table" type="button" role="tab" aria-controls="pills-table"
                                aria-selected="false">Tables</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-figure-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-figure" type="button" role="tab" aria-controls="pills-figure"
                                aria-selected="false">Figure</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-contribution-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-contribution" type="button" role="tab"
                                aria-controls="pills-contribution" aria-selected="false">Contribution</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-refs-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-refs" type="button" role="tab" aria-controls="pills-refs"
                                aria-selected="false">References</button>
                        </li>
                    </ul>
                    <hr>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-keyword" role="tabpanel"
                            aria-labelledby="pills-keyword-tab">
                            <ul>
                                <li v-for="item in studyDetails.study_keywords" :key="item">{{ item.keyword_title }}</li>
                            </ul>


                        </div>
                        <div class="tab-pane fade" id="pills-table" role="tabpanel" aria-labelledby="pills-table-tab">
                            <ul>
                                <li v-for="(item, index) in studyDetails.study_table" :key="item">Table {{index+1}}:
                                    {{ item.table_title }}</li>
                            </ul>
                        </div>
                        <div class="tab-pane fade" id="pills-figure" role="tabpanel" aria-labelledby="pills-figure-tab">
                            <ul>
                                <li v-for="(item, index) in studyDetails.study_figure" :key="item">Figure {{index+1}}:
                                    {{ item.figure_title }}</li>
                            </ul>
                        </div>
                        <div class="tab-pane fade" id="pills-contribution" role="tabpanel"
                            aria-labelledby="pills-contribution-tab">
                            <ul>
                                <li v-for="(item, index) in studyDetails.study_contribution" :key="item">
                                    {{ item.contribution_title }}</li>
                            </ul>

                        </div>
                        <div class="tab-pane fade" id="pills-refs" role="tabpanel" aria-labelledby="pills-refs-tab">
                            <ul>
                                <li v-for="item in studyDetails.study_reference" :key="item">
                                    {{ item.reference_title}}
                                    <i class="fa-solid fa-link text-primary" style="cursor:pointer"
                                        @click="gotoNewTab(item.reference_url)"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </section>
</template>

<script>
import SectionTitleComponent from '../../Components/SectionTitleComponent.vue'
import axios from "axios";
import config from "../../Data/config";
export default {
    components: { SectionTitleComponent },
    data(){
      return{
          studyDetails : {},
          study : {},
          fileUrl : ""
      }
    },
    async mounted(){
        await axios.get(`${config.domain}/api/studies-details/`+this.$route.params.id).then(response => {
            this.studyDetails = response.data.data
            this.studyDetails.study_authors = this.studyDetails.study_authors.map(item => item = item.first_name+' '+item.middle_name+' '+item.last_name)
            let last_author = this.studyDetails.study_authors.pop()
            this.studyDetails.study_authors = this.studyDetails.study_authors.join(', ')+'and '+last_author
            this.study = this.studyDetails.study
            this.study.volume = this.study.volume.slice(-1)
            this.fileUrl = config.domain+'/storage/upload/studies/'+this.study.manuscript_file
        }).catch(error => {
            console.log(error)
        })
    },
    methods: {
        gotoNewTab(url) {
            window.open(url, '_blank');
        },
        downloadURI(){
            var link = document.createElement("a");
            link.download = this.study.manuscript_file;
            link.href = this.fileUrl;
            link.click();
        }
    },

}
</script>

<style scoped>
ul li {
    margin-bottom: 15px;
}

.stat-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.stat-box-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    flex-grow: 1;
}

.stat-box-left-body {
    display: flex;
    justify-content: space-around;
    align-content: center;

}

.stat-box-right {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.btn-download,
.btn-preview {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: flex-start;
    padding: 10px 12px;
    background: #536F2E;
    box-shadow: inset 7px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 13px;
    color: white;
}

.issue-title {
    font-weight: 600;
    font-size: 20px;
    letter-spacing: 0.015em;
    color: #536F2E;
}

.cite-box {
    display: flex;
    flex-direction: column;
    padding: 15px 30px;
    border: 1px solid gray;
    gap: 5px;
}

.cite-box span {
    text-decoration: underline;
}

.abstract {
    font-weight: 400;
    font-size: 14px;
    line-height: 204%;
    /* or 29px */

    display: flex;
    align-items: center;
    letter-spacing: 0.015em;

    color: #000000;
}

.nav-link {
    color: gray;
    letter-spacing: 0.2em;
}

.nav-pills .nav-link.active,
.nav-pills .show>.nav-link {
    color: #fff !important;
    background-color: #536F2E !important;
}
</style>
