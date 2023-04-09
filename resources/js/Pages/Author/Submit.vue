<template >
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <ContentHeader title="New Submission" />
        <!-- /.content-header -->

        <!-- Main content -->
        <section class="content">
            <div class="container-fluid">
                <!-- Main content -->
                <form action="" @submit.prevent="submitForm">
                     <div class="row mx-4">
                        <div class="card col-12 ">
                            <div class="card-body d-flex flex-column p-5" style="gap:30px">
                                <div class="row">
                                    <div class="col-2">SELECT JOURNAL:<span class="text-danger">*</span></div>
                                    <div class="col-4">
                                        <select name="" class="w-100" id="" v-model="formData.journals" required>
                                            <option v-for="item in metadata.journals" :key="item.id" :value="item.id">{{ item.title }}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-2">Study type:<span class="text-danger">*</span></div>
                                    <div class="col-4">
                                        <select name="" class="w-100" id="" v-model="formData.studyTypes" required>
                                          <option v-for="item in metadata.studyTypes" :key="item.id" :value="item.id">{{ item.name }}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-2">Page:<span class="text-danger">*</span></div>
                                    <div class="col-10">
                                        <input type="text" class="p-1" placeholder="From-To eg. 1-100" v-model="formData.page" required />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-2">Title:<span class="text-danger">*</span></div>
                                    <div class="col-10">
                                        <textarea name="" id="" cols="30" rows="2" class="w-100 p-3"
                                            placeholder="Title" v-model="formData.title" required></textarea>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-2">Abstract:<span class="text-danger">*</span></div>
                                    <div class="col-10">
                                        <textarea name="" id="" cols="30" rows="13" class="w-100 p-3"
                                            placeholder="Abstract" v-model="formData.abstract" required></textarea>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-2">Keywords:<span class="text-danger">*</span></div>
                                    <div class="col-10">
                                        <textarea name="" id="" cols="30" rows="2" class="w-100 p-3"
                                            placeholder="Keywords; seperate the keywords with semicolon (;)" v-model="formData.keywords" required></textarea>
                                    </div>
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
                                                        <select name="" class="w-100" id="" v-model="item.prefix" required>
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
                                                        <input type="text" class="w-100" v-model="item.first_name" required>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-4">Last (Family) Name:<span class="text-danger">*</span></div>
                                                    <div class="col-8">
                                                        <input type="text" class="w-100" v-model="item.last_name" required>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-6 d-flex flex-column pl-5" style="gap:15px">
                                                <div class="row">
                                                    <div class="col-4">Correspondence:<span class="text-danger">*</span></div>
                                                    <div class="col-8 ">
                                                        <input type="checkbox" class="" v-model="item.correspondence" >
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
                                                        <input type="email" class="w-100" v-model="item.email" required>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12 row pl-3 mt-3">
                                                <div class="col-2">Affiliation: <span class="text-danger">*</span></div>
                                                <div class="col-10 pr-0 mr-0">
                                                    <input type="text" class="w-100" v-model="item.affiliation" required>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 align-items-center justify-content-end d-flex" style="gap:20px">
                                        <div class="d-flex align-items-center" style="gap:5px; cursor: pointer;"
                                            @click="removeAuthor()">
                                            <span>Remove AUTHORS</span>
                                            <i class="fa-solid fa-square-minus text-danger"></i>
                                        </div>
                                        <div class="d-flex align-items-center" style="gap:5px; cursor: pointer;"
                                            @click="addAuthor()">
                                            <span>ADD MORE AUTHORS</span>
                                            <i class="fa-solid fa-square-plus text-success"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <span class="nav-link py-2">Upload File</span>
                                    <hr>
                                </div>
                                <div class="row">
                                    <div class="col-12 d-flex flex-column justify-content-center align-items-center" style="gap:15px">
                                      <span>ATTACH MANUSCRIPT<span class="text-danger">*</span> <span class="text-info" v-if="formData.manuscript_file_temp">: {{ this.$refs.file.files[0].name }}</span></span>
                                      <input class="form-control" hidden  @change="handleFileUpload()" type="file" ref="file" name="file" id="file" />

                                      <button  @click="openFile()" type="button"  class="btn-register">Select File</button>
                                        <span>Max size is 5 MB</span>
                                        <span>Please download and fill the
                                            <span class="text-info" style="cursor: pointer" @click="downloadAuthorshipForm()">Manuscript Template</span>
                                        </span>
                                    </div>
                                </div>
                                <div class="row">
                                    <span class="nav-link py-2">COVER LETTER</span>
                                    <hr>
                                </div>
                                <div class="row px-4">
                                    <textarea name="" id="" cols="30" rows="10" class="w-100 p-3"
                                        placeholder="Write the Cover Letter here" v-model="formData.comments"></textarea>
                                </div>
                                <div class="row">
                                    <div class="col-12 p-4">
                                        <div class="form-check mb-2">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="formData.authors_agreement" required>
                                            <label class="form-check-label" for="flexCheckDefault">
                                                <span class="text-danger">*</span> Confirm that All co-authors are listed and agree the submission.
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" v-model="formData.not_published" required>
                                            <label class="form-check-label" for="flexCheckChecked">
                                                <span class="text-danger">*</span> Confirm that the manuscript has been submitted solely to this journal and
                                                is not published, in press, or submitted elsewhere.
                                            </label>
                                        </div>
                                        <div class="form-check mb-2">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" v-model="formData.ethical_guidelines" required>
                                            <label class="form-check-label" for="flexCheckDefault1">
                                                <span class="text-danger">*</span> Confirm that all the research meets the ethical guidelines, including
                                                adherence to the legal requirements of the study country.
                                            </label>
                                        </div>
                                        <div class="form-check mb-2">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault2" v-model="formData.third_party_acknowledgement" required>
                                            <label class="form-check-label" for="flexCheckDefault2">
                                                <span class="text-danger">*</span> I/We have declared any potential conflict of interest in the research. Any
                                                support from a third party has been noted in the Acknowledgements.
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="row align-self-end">
                                    <button class="btn-register"  type="submit">Submit Manuscript</button>
                                </div>
                            </div>
                            <!-- main content end -->
                        </div>
                     </div>
                </form>
            </div>
            <!-- /.container-fluid -->
        </section>
        <!-- /.content -->
    </div>
</template>
<script>

import config from "@/Data/config";
import axios from "axios";
export default {
    data() {
        return {
            authorCount: 2,
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
              email : localStorage.getItem('userEmail'),
              title : "",
              abstract : "",
              keywords : "",
              page : "",
              authors : [],
              manuscript_file_temp : '',
              comments : "",
              authors_agreement : false,
              not_published : false,
              ethical_guidelines : false,
              third_party_acknowledgement : false,
            },
            fullData : new FormData()

        }
    },
    methods: {
        downloadAuthorshipForm() {
            console.log("Clicked")
            let url = `${config.domain}/storage/files/MANUSCRIPT SUBMISSION FORM.docx`;
            window.open(url)
        },

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
        },
        openFile(){
            document.getElementById("file").click();
        },
        async submitForm(){
            if(!this.formData.manuscript_file_temp){
                this.$swal({
                    text: "Please attach the manuscript",
                    icon: "error"
                });
                return;
            }
          this.fullData.append('manuscript_file', this.formData.manuscript_file_temp)
          this.fullData.append('data', JSON.stringify(this.formData))
          let response = await axios.post(`${config.domain}/api/submit-study`, this.fullData)
          if(response.data.success) {
            this.$swal({
              text: response.data.message,
              icon: "success"
            });
            this.formData = {
              journals : "",
              studyTypes: "",
              email : '',
              page  : '',
              title : "",
              abstract : "",
              keywords : "",
              authors : [],
              manuscript_file_temp : '',
              comments : "",
              authors_agreement : false,
              not_published : false,
              ethical_guidelines : false,
              third_party_acknowledgement : false,
            }
            for (let i = 0; i < this.authorCount; i++) {
              this.formData.authors.push({
                prefix : "Dr.",
                first_name : "",
                middle_name : "",
                last_name : "",
                correspondence : "",
                affiliation : "",
                email : ""
              })
            }
            this.$router.push({name : 'Author Dashboard'})
          }else{
            this.$swal({
              text : response.data.message,
              icon : "error"
            });
          }

        }
    },
   async mounted() {
      let response = await axios.get(`${config.domain}/api/journals`);
      this.metadata.journals = response.data.data.journals
      this.metadata.studyTypes = response.data.data.studyTypes

      this.formData.journals = this.metadata.journals[0].id;
      this.formData.studyTypes = this.metadata.studyTypes[0].id;

     for (let i = 0; i < this.authorCount; i++) {
       this.formData.authors.push({
         prefix : "Dr.",
         first_name : "",
         middle_name : "",
         last_name : "",
         correspondence : "",
         affiliation : "",
         email : ""
       })
     }
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
