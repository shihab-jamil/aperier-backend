<template >
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <ContentHeader title="Edit Submission" />
        <!-- /.content-header -->

        <!-- Main content -->
        <section class="content">
            <div class="container-fluid">
                <!-- Main content -->
                <div class="row mx-4">
                    <div class="card col-12 ">
                        <div class="card-body d-flex flex-column p-5" style="gap:30px">
                            <div class="row">
                                <div class="col-2">SELECT Status:<span class="text-danger">*</span></div>
                                <div class="col-4">
                                    <select name="" class="w-100" id="" v-model="formData.status" @change="statusChange">
                                        <option v-for="item in metadata.status" :key="item.id" :value="item.id">{{ item.name }}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-2">SELECT JOURNAL:<span class="text-danger">*</span></div>
                                <div class="col-4">
                                    <select name="" class="w-100" id="" v-model="formData.journals">
                                        <option v-for="item in metadata.journals" :key="item.id" :value="item.id">{{ item.title }}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-2">Study type:<span class="text-danger">*</span></div>
                                <div class="col-4">
                                    <select name="" class="w-100" id="" v-model="formData.studyTypes">
                                        <option v-for="item in metadata.studyTypes" :key="item.id" :value="item.id">{{ item.name }}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-2">Title:<span class="text-danger">*</span></div>
                                <div class="col-10">
                                    <textarea name="" id="" cols="30" rows="2" class="w-100 p-3" placeholder="Title" v-model="formData.title"></textarea>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-2">Abstract:<span class="text-danger">*</span></div>
                                <div class="col-10">
                                    <textarea name="" id="" cols="30" rows="13" class="w-100 p-3" placeholder="Abstract" v-model="formData.abstract"></textarea>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-2">Keywords:<span class="text-danger">*</span></div>
                                <div class="col-10">
                                    <textarea name="" id="" cols="30" rows="2" class="w-100 p-3" placeholder="Keywords; seperate the keywords with semicolon (;)" v-model="formData.keywords"></textarea>
                                </div>
                            </div>
                            <div class="row d-flex align-items-center">
                                <div class="col-2">manuscript file</div>
                                <div class="col-8 text-primary" v-if="formData.manuscript_file_temp" ><span >{{ this.$refs.file.files[0].name }}</span></div>
                                <div class="col-8 text-primary" v-else><span @click="downloadURI('studies/'+study.manuscript_file)">{{ study.manuscript_file }}</span></div>
                                <input class="form-control" hidden  @change="handleFileUpload()" type="file" ref="file" name="file" id="file" />
                                <button class="col-2 btn-register" @click="openFile()">Upload PDF</button>
                            </div>
                            <div class="row">
                                <div class="col-2">Authorship file</div>
                                <div class="col-10 text-primary"><span  @click="downloadURI('authors/'+study.authorship_file)">{{ study.authorship_file }}</span></div>
                            </div>
                            <div class="row">
                                <span class="nav-link py-2">Authors</span>
                                <hr>
                            </div>
                            <div class="row">
                                <div class="author-card row col-12 p-3 mb-4" v-for="(item, index) in formData.authors" :key="item">
                                    <div class="author-card-title col-2 p-1">Author #{{ index+1 }} </div>
                                    <div class="col-10 row">
                                        <div class="col-6 d-flex flex-column pl-3" style="gap:15px">
                                            <div class="row">
                                                <div class="col-4">Prefix:<span class="text-danger">*</span></div>
                                                <div class="col-8">
                                                    <select name="" class="w-100" id="" v-model="item.prefix">
                                                        <option value="Dr.">Dr.</option>
                                                        <option value="Mr.">Mr.</option>
                                                        <option value="Mrs.">Mrs.</option>
                                                        <option value="Prof.">Prof.</option>
                                                        <option value="Assoc Prof.">Assoc Prof.</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-4">First (Given) Name:<span class="text-danger">*</span></div>
                                                <div class="col-8">
                                                    <input type="text" class="w-100" v-model="item.first_name">
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-4">Last (Family) Name:<span class="text-danger">*</span></div>
                                                <div class="col-8">
                                                    <input type="text" class="w-100" v-model="item.last_name">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6 d-flex flex-column pl-5" style="gap:15px">
                                            <div class="row">
                                                <div class="col-4">Correspondence:<span class="text-danger">*</span></div>
                                                <div class="col-8 ">
                                                    <input type="checkbox" class="" v-model="item.correspondence">
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-4">Middle Name:</div>
                                                <div class="col-8">
                                                    <input type="text" class="w-100" v-model="item.middle_name">
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-4">E-Mail:<span class="text-danger">*</span></div>
                                                <div class="col-8">
                                                    <input type="email" class="w-100" v-model="item.email">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 row pl-3 mt-3">
                                            <div class="col-2">Affiliation: <span class="text-danger">*</span></div>
                                            <div class="col-10 pr-0 mr-0">
                                                <input type="text" class="w-100" v-model="item.affiliation">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 align-items-center justify-content-end d-flex" style="gap:20px">
                                    <div class="d-flex align-items-center" style="gap:5px; cursor: pointer;" @click="removeAuthor()">
                                        <span>Remove AUTHORS</span>
                                        <i class="fa-solid fa-square-minus text-danger"></i>
                                    </div>
                                    <div class="d-flex align-items-center" style="gap:5px; cursor: pointer;" @click="addAuthor()">
                                        <span>ADD MORE AUTHORS</span>
                                        <i class="fa-solid fa-square-plus text-success"></i>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-2">Authorship form</div>
                                    <div class="col-10 text-primary" @click="downloadURI('authors/'+study.authorship_change_file)">{{ study.authorship_change_file }}</div>
                                </div>
                            </div>
                            <div class="row">
                                <span class="nav-link py-2">Tables</span>
                                <hr>
                            </div>
                            <div class="row pl-3">
                                <div class="row gy-0 mb-4 d-flex align-items-center" v-for="(item, index) in formData.tables" :key="item.id">
                                    <div class="col-1">Table {{ parseInt(index)+1 }}</div>
                                    <div class="col-11">
                                        <input type="text" class="w-100" v-model="formData.tables[index]['table_title']">
                                    </div>
                                </div>
                                <div class="col-12 align-items-center justify-content-end d-flex" style="gap:20px">
                                    <div class="d-flex align-items-center" style="gap:5px; cursor: pointer;" @click="removeTable()">
                                        <span>Remove Table</span>
                                        <i class="fa-solid fa-square-minus text-danger"></i>
                                    </div>
                                    <div class="d-flex align-items-center" style="gap:5px; cursor: pointer;" @click="addTable()">
                                        <span>Add Tables</span>
                                        <i class="fa-solid fa-square-plus text-success"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <span class="nav-link py-2">Figures</span>
                                <hr>
                            </div>
                            <div class="row pl-3">
                                <div class="row gy-0 mb-4 d-flex align-items-center" v-for="(item, index) in formData.figures" :key="item.id">
                                    <div class="col-1">Figure {{ parseInt(index)+1 }}</div>
                                    <div class="col-11">
                                        <input type="text" class="w-100" v-model="formData.figures[index]['figure_title']">
                                    </div>
                                </div>
                                <div class="col-12 align-items-center justify-content-end d-flex" style="gap:20px">
                                    <div class="d-flex align-items-center" style="gap:5px; cursor: pointer;" @click="removeFigure()">
                                        <span>Remove Figure</span>
                                        <i class="fa-solid fa-square-minus text-danger"></i>
                                    </div>
                                    <div class="d-flex align-items-center" style="gap:5px; cursor: pointer;" @click="addFigure()">
                                        <span>Add Figure</span>
                                        <i class="fa-solid fa-square-plus text-success"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <span class="nav-link py-2">Contributions</span>
                                <hr>
                            </div>
                            <div class="row pl-3">
                                <div class="row gy-0 mb-4 d-flex align-items-center" v-for="(item, index) in formData.contributions" :key="item.id">
                                    <div class="col-2">Contributor {{ parseInt(index)+1 }}</div>
                                    <div class="col-10">
                                        <input type="text" class="w-100" v-model="formData.contributions[index]['contribution_title']">
                                    </div>
                                </div>
                                <div class="col-12 align-items-center justify-content-end d-flex" style="gap:20px">
                                    <div class="d-flex align-items-center" style="gap:5px; cursor: pointer;" @click="removeContribution()">
                                        <span>Remove Contribution</span>
                                        <i class="fa-solid fa-square-minus text-danger"></i>
                                    </div>
                                    <div class="d-flex align-items-center" style="gap:5px; cursor: pointer;" @click="addContribution()">
                                        <span>Add Contribution</span>
                                        <i class="fa-solid fa-square-plus text-success"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <span class="nav-link py-2">References</span>
                                <hr>
                            </div>
                            <div class="row pl-3">
                                <div class="row mb-4 d-flex align-items-center" v-for="(item, index) in formData.references" :key="item.id">
                                    <div class="col-12 mb-3">Reference {{ parseInt(index)+1 }}</div>
                                    <div class="col-12 mb-2">
                                        <input type="text" placeholder="Title" class="w-100" v-model="formData.references[index]['reference_title']">
                                    </div>
                                    <div class="col-12 mb-3">
                                        <input type="text" placeholder="Link" class="w-100" v-model="formData.references[index]['reference_url']">
                                    </div>
                                    <hr class="col-6 offset-3 mb-3">
                                </div>
                                <div class="col-12 align-items-center justify-content-end d-flex" style="gap:20px">
                                    <div class="d-flex align-items-center" style="gap:5px; cursor: pointer;" @click="removeReference()">
                                        <span>Remove Reference</span>
                                        <i class="fa-solid fa-square-minus text-danger"></i>
                                    </div>
                                    <div class="d-flex align-items-center" style="gap:5px; cursor: pointer;" @click="addReference()">
                                        <span>Add Reference</span>
                                        <i class="fa-solid fa-square-plus text-success"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <span class="nav-link py-2">COMMENTS TO EDITOR</span>
                                <hr>
                            </div>
                            <div class="row px-4">
                                <textarea name="" id="" cols="30" rows="10" class="w-100 p-3" placeholder="Write the Cover Letter here" v-model="formData.comments"></textarea>
                            </div>
                            <div class="row">
                                <div class="col-12 p-4">
                                    <div class="form-check mb-2">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="formData.authors_agreement">
                                        <label class="form-check-label" for="flexCheckDefault">
                                            <span class="text-danger">*</span> Confirm that All co-authors are listed and agree the submission.
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" v-model="formData.not_published">
                                        <label class="form-check-label" for="flexCheckChecked">
                                            <span class="text-danger">*</span> Confirm that the manuscript has been submitted solely to this journal and
                                            is not published, in press, or submitted elsewhere.
                                        </label>
                                    </div>
                                    <div class="form-check mb-2">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" v-model="formData.ethical_guidelines">
                                        <label class="form-check-label" for="flexCheckDefault1">
                                            <span class="text-danger">*</span> Confirm that all the research meets the ethical guidelines, including
                                            adherence to the legal requirements of the study country.
                                        </label>
                                    </div>
                                    <div class="form-check mb-2">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault2" v-model="formData.third_party_acknowledgement">
                                        <label class="form-check-label" for="flexCheckDefault2">
                                            <span class="text-danger">*</span> I/We have declared any potential conflict of interest in the research. Any
                                            support from a third party has been noted in the Acknowledgements.
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="row align-self-end">
                                <button class="btn-register" @click="submitForm()">Save Changes</button>
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

import config from "@/Data/config";
import axios from "axios";
import {saveAs} from "file-saver";

export default {
    data() {
        return {
            authorCount: 6,
            metadata : {
                journals : [],
                studyTypes : [],
                status: []
            },
            config: {
                headers: {
                    'Content-type': 'multipart/form-data',
                }
            },
            formData : {
                status : "",
                journals : "",
                studyTypes: "",
                title : "",
                abstract : "",
                keywords : "",
                authors : [],
                tables : [],
                figures : [],
                contributions : [],
                references : [],
                manuscript_file_temp : '',
                author_file_temp : '',
                comments : "",
                authors_agreement : false,
                not_published : false,
                ethical_guidelines : false,
                third_party_acknowledgement : false,
            },
            fullData : new FormData(),
            study : {},
            keywords : {},
            authors : {},

        }
    },
    methods: {
        addAuthor() {
            this.authorCount++;
            this.formData.authors.push({
                prefix : "Dr.",
                first_name : "",
                middle_name : "",
                last_name : "",
                correspondence : "",
                affiliation : "",
                email : ""
            })
        },
        removeAuthor() {
            if (this.authorCount > 1) {
                this.authorCount--;
                this.formData.authors.pop();
            } else {
                alert("There should be at least one author");
            }
        },
        addTable(){
            this.formData.tables.push({
                table_title : ""
            })
        },
        removeTable(){
            if (this.formData.tables.length > 0) {
                this.formData.tables.pop();
            } else {
                alert("No table available");
            }
        },
        addFigure(){
            this.formData.figures.push({
                figure_title : ""
            })
        },
        removeFigure(){
            if (this.formData.figures.length > 0) {
                this.formData.figures.pop();
            } else {
                alert("No Figures available");
            }
        },
        addContribution(){
            this.formData.contributions.push({
                contribution_title : ""
            })
        },
        removeContribution(){
            if (this.formData.contributions.length > 0) {
                this.formData.contributions.pop();
            } else {
                alert("No Contribution available");
            }
        },
        addReference(){
            this.formData.references.push({
                reference_title : "",
                reference_url : ""
            })
        },
        removeReference(){
            if (this.formData.references.length > 0) {
                this.formData.references.pop();
            } else {
                alert("No Reference available");
            }
        },
        handleFileUpload(){
            this.formData.manuscript_file_temp = this.$refs.file.files[0]
            this.fullData.append('manuscript_file', this.formData.manuscript_file_temp)
        },
        handleFileUploadAuthor(){
            this.formData.author_file_temp = this.$refs.file2.files[0]
        },
        openFile(){
            document.getElementById("file").click();
        },
        openFile2(){
            document.getElementById("file2").click();
        },

        async submitForm(){
            if(this.formData.status === 6 && this.study.status_id !== 6 && !this.formData.manuscript_file_temp){
                alert("You must select finalize PDF file to submit!!")
                return;
            }

            this.fullData.append('manuscript_file', this.formData.manuscript_file_temp)
            this.fullData.append('data', JSON.stringify(this.formData))
            let response = await axios.post(`${config.domain}/api/admin-study/${this.$route.params.id}`, this.fullData)
            // console.log(response)
            if(response.data.success) {
                this.$swal({
                    text: response.data.message,
                    icon: "success"
                });
                this.$router.push({name : 'Admin Ongoing Studies'})
            }else{
                this.$swal({
                    text : response.data.message,
                    icon : "error"
                });
            }
        },
        downloadURI(title){
            var link = document.createElement("a");
            link.download = title;
            link.href = `${config.domain}/storage/upload/${title}`;
            link.click();
        },
        async downloadWithAxios(title) {
            let url = `${config.domain}/storage/upload/${title}`
            await axios.get(url, {responseType: 'blob'})
                .then((response) => {
                    saveAs(response.data, title)
                })
                .catch(() => console.log('error occured'))
        },

        statusChange(){
            if(this.formData.status !== 6 && this.study.status_id === 6){
                if(!confirm("This study will not be published on the journal volume, are you sure about this step?")){
                    this.formData.status = this.study.status_id
                    return;
                }
            }
        }
    },
    async mounted() {
        let response = await axios.get(`${config.domain}/api/study/`+ this.$route.params.id)
        response = response.data.data
        this.study = response.study
        this.keywords = (response.keywords.map(item => item = item.keyword_title)).join(";")
        this.authors = response.authors.map(item => {
            item.correspondence = item.correspondence ? true : false
            return item;
        })

        //this.formData = this.study
        this.formData.status = this.study.status_id
        this.formData.title = this.study.study_title
        this.formData.abstract = this.study.abstract
        this.formData.journals = this.study.journal_id
        this.formData.studyTypes = this.study.study_type_id
        this.formData.authors_agreement = this.study.authors_agreement ? true : false
        this.formData.not_published = this.study.not_published ? true : false
        this.formData.ethical_guidelines = this.study.ethical_guidelines ? true : false
        this.formData.third_party_acknowledgement = this.study.third_party_acknowledgement ? true : false
        this.formData.authors = this.authors
        this.formData.keywords = this.keywords
        this.formData.comments = this.study.comment
        this.formData.tables = response.tables
        this.formData.figures = response.figures
        this.formData.contributions = response.contributions
        this.formData.references = response.references

        let allMetadata = await axios.get(`${config.domain}/api/journals`);
        this.metadata.journals = allMetadata.data.data.journals
        this.metadata.studyTypes = allMetadata.data.data.studyTypes
        this.metadata.status = allMetadata.data.data.status

    }
}
</script>

<style scoped>
.author-card-title {
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 2px solid gray;
}

.author-card {
    background-color: rgb(230, 230, 230);
    border-radius: 10px;
}

.nav-link {
    color: gray;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 0.2em;
}

.btn-register {
    padding: 5px 10px;
    font-weight: 500;
    color: white;
    background: #536F2E;
    box-shadow: inset 7px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 13px;
}
</style>
