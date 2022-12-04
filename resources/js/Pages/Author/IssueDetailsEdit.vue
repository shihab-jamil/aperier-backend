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
                <div class="col-2">SELECT JOURNAL:*</div>
                <div class="col-4">
                  <select name="" class="w-100" id="" v-model="formData.journals">
                    <option v-for="item in metadata.journals" :key="item.id" :value="item.id">{{ item.title }}</option>
                  </select>
                </div>
              </div>
              <div class="row">
                <div class="col-2">Study type:*</div>
                <div class="col-4">
                  <select name="" class="w-100" id="" v-model="formData.studyTypes">
                    <option v-for="item in metadata.studyTypes" :key="item.id" :value="item.id">{{ item.name }}</option>
                  </select>
                </div>
              </div>
              <div class="row">
                <div class="col-2">Title:*</div>
                <div class="col-10">
                    <textarea name="" id="" cols="30" rows="2" class="w-100 p-3" placeholder="Title" v-model="formData.title"></textarea>
                </div>
              </div>
              <div class="row">
                <div class="col-2">Abstract:*</div>
                <div class="col-10">
                    <textarea name="" id="" cols="30" rows="13" class="w-100 p-3" placeholder="Abstract" v-model="formData.abstract"></textarea>
                </div>
              </div>
              <div class="row">
                <div class="col-2">Keywords:*</div>
                <div class="col-10">
                    <textarea name="" id="" cols="30" rows="2" class="w-100 p-3" placeholder="Keywords; seperate the keywords with semicolon (;)" v-model="formData.keywords"></textarea>
                </div>
              </div>
              <div class="row">
                <div class="col-2">manuscript file</div>
                <div class="col-10 text-primary" @click="downloadURI('studies/'+study.manuscript_file)">{{ study.manuscript_file }}</div>
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
                        <div class="col-4">Prefix:*</div>
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
                        <div class="col-4">First (Given) Name:*</div>
                        <div class="col-8">
                          <input type="text" class="w-100" v-model="item.first_name">
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-4">Last (Family) Name:*</div>
                        <div class="col-8">
                          <input type="text" class="w-100" v-model="item.last_name">
                        </div>
                      </div>
                    </div>
                    <div class="col-6 d-flex flex-column pl-5" style="gap:15px">
                      <div class="row">
                        <div class="col-4">Correspondence:*</div>
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
                        <div class="col-4">E-Mail:*</div>
                        <div class="col-8">
                          <input type="email" class="w-100" v-model="item.email">
                        </div>
                      </div>
                    </div>
                    <div class="col-12 row pl-3 mt-3">
                      <div class="col-2">Affiliation: *</div>
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
                <span class="nav-link py-2">Upload File</span>
                <hr>
              </div>
              <div class="row ">
                <div class="col-4 offset-1 d-flex flex-column align-items-center" style="gap:15px">
                  <span>ATTACH MANUSCRIPT*</span>
                  <input class="form-control" hidden  @change="handleFileUpload()" type="file" ref="file" name="file" id="file" />
                  <button  @click="openFile()"  class="btn-register">Select File</button>
                  <span>Max size is 5 MB</span>
                  <span>Please download and fill the<span class="text-info">Manuscript Template</span></span>
                </div>
                <div class="col-4 offset-1 d-flex flex-column align-items-center" style="gap:15px">
                  <span>ATTACH AUTHORSHIP CHANGE</span>
                  <input class="form-control" hidden  @change="handleFileUploadAuthor()" type="file" ref="file2" name="file2" id="file2" />
                  <button class="btn-register" @click="openFile2()"  >Select File</button>
                  <span>Max size is 5 MB</span>
                  <span>Please download and fill the<span class="text-info">Authorship Change FORM</span></span>
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
                      * Confirm that All co-authors are listed and agree the submission.
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" v-model="formData.not_published">
                    <label class="form-check-label" for="flexCheckChecked">
                      * Confirm that the manuscript has been submitted solely to this journal and
                      is not published, in press, or submitted elsewhere.
                    </label>
                  </div>
                  <div class="form-check mb-2">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" v-model="formData.ethical_guidelines">
                    <label class="form-check-label" for="flexCheckDefault1">
                      * Confirm that all the research meets the ethical guidelines, including
                      adherence to the legal requirements of the study country.
                    </label>
                  </div>
                  <div class="form-check mb-2">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault2" v-model="formData.third_party_acknowledgement">
                    <label class="form-check-label" for="flexCheckDefault2">
                      * I/We have declared any potential conflict of interest in the research. Any
                      support from a third party has been noted in the Acknowledgements.
                    </label>
                  </div>
                </div>
              </div>
              <div class="row align-self-end">
                <button class="btn-register" @click="submitForm()">Submit Manuscript</button>
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
        studyTypes : []
      },
      config: {
        headers: {
          'Content-type': 'multipart/form-data',
        }
      },
      formData : {
        journals : "",
        studyTypes: "",
        title : "",
        abstract : "",
        keywords : "",
        authors : [],
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
    handleFileUpload(){
      this.formData.manuscript_file_temp = this.$refs.file.files[0]
      this.fullData.append('manuscript_file', this.formData.manuscript_file_temp)
    },
    handleFileUploadAuthor(){
      this.formData.author_file_temp = this.$refs.file2.files[0]
      this.fullData.append('authors_file', this.formData.author_file_temp)
    },
    openFile(){
      document.getElementById("file").click();
    },
    openFile2(){
      document.getElementById("file2").click();
    },

    async submitForm(){
      this.fullData.append('data', JSON.stringify(this.formData))
      let response = await axios.post(`${config.domain}/api/update-study`, this.fullData)
      console.log(response)
      if(response.data.success) {
        this.$swal({
          text: response.data.message,
          icon: "success"
        });
        this.$router.push({name : 'Author Dashboard'})
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

    this.formData = this.study
    this.formData.journals = this.study.journal_id
    this.formData.studyTypes = this.study.study_type_id
    this.formData.authors_agreement = this.study.authors_agreement ? true : false
    this.formData.not_published = this.study.not_published ? true : false
    this.formData.ethical_guidelines = this.study.ethical_guidelines ? true : false
    this.formData.third_party_acknowledgement = this.study.third_party_acknowledgement ? true : false
    this.formData.authors = this.authors
    this.formData.keywords = this.keywords
    this.formData.comments = this.study.comment

    let allMetadata = await axios.get(`${config.domain}/api/journals`);
    this.metadata.journals = allMetadata.data.data.journals
    this.metadata.studyTypes = allMetadata.data.data.studyTypes

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
