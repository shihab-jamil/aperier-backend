<template >
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <ContentHeader title="Update Profile" />
        <!-- /.content-header -->

        <!-- Main content -->
        <section class="content">
            <div class="container-fluid">
                <!-- Main content -->
                <div class="row mx-4">
                    <div class="card col-12">
                        <div class="card-header">
                            <h3 class="card-title">Update your information</h3>
                            <div class="card-tools">
                                <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                    <i class="fas fa-minus"></i>
                                </button>
                            </div>
                        </div>
                        <div class="row card-body">
                          <form action="" method="post" @submit.prevent="handleForm()">
                            <div class="col-12 bg-custom-gray">
                              <div class="col-6 offset-3 p-4">
                                <div class="custom-form-group">
                                  <span>Prefix<span class="text-danger">*</span></span>
                                  <select name="" class="w-50" id="" v-model="formData.prefix">
                                    <option value="Dr.">Dr.</option>
                                    <option value="Mr.">Mr.</option>
                                    <option value="Mrs.">Mrs.</option>
                                    <option value="Prof.">Prof.</option>
                                    <option value="Assoc Prof.">Assoc Prof.</option>
                                  </select>
                                </div>
                                <div class="custom-form-group">
                                  <span>First (Given) Name:<span class="text-danger">*</span></span>
                                  <input type="text" class="custom-input" v-model="formData.first_name">
                                </div>
                                <div class="custom-form-group">
                                  <span>Middle Name:</span>
                                  <input type="text" class="custom-input" v-model="formData.middle_name">
                                </div>
                                <div class="custom-form-group">
                                  <span>Last (Family) Name:<span class="text-danger">*</span></span>
                                  <input type="text" class="custom-input" v-model="formData.last_name">
                                </div>
                                <div class="custom-form-group">
                                  <span>Degree:</span>
                                  <input type="text" class="custom-input" v-model="formData.degree">
                                </div>
                              </div>
                            </div>
                            <div class="col-12">
                              <div class="col-6 offset-3 p-4">
                                <div class="custom-form-group">
                                  <span>Primary E-Mail:<span class="text-danger">*</span></span>
                                  <input type="email" class="custom-input" v-model="formData.email">
                                </div>
                                <div class="custom-form-group">
                                  <span>Phone:</span>
                                  <input type="text" class="custom-input" v-model="formData.phone">
                                </div>
                                <div class="custom-form-group">
                                  <span>ORCID:</span>
                                  <input type="text" class="custom-input" v-model="formData.orchid">
                                </div>
                              </div>
                            </div>
                            <div class="col-12 bg-custom-gray">
                              <div class="col-6 offset-3 p-4">
                                <div class="custom-form-group">
                                  <span>Department:</span>
                                  <input type="text" class="custom-input" v-model="formData.department">
                                </div>
                                <div class="custom-form-group">
                                  <span>Institution:<span class="text-danger">*</span></span>
                                  <input type="text" class="custom-input" v-model="formData.institution">
                                </div>
                                <div class="custom-form-group">
                                  <span>City:<span class="text-danger">*</span></span>
                                  <input type="text" class="custom-input" v-model="formData.city">
                                </div>
                                <div class="custom-form-group">
                                  <span>Country:<span class="text-danger">*</span></span>
                                  <input type="text" class="custom-input" v-model="formData.country">
                                </div>
                              </div>
                            </div>
                            <div class="col-12">
                              <div class="col-6 offset-3 p-4">
                                <div class="custom-form-group">
                                  <span>Areas of Expertise:</span>
                                  <div class="w-50">
                                    <div class="d-flex mb-3" style="gap:10px">
                                      <span>(1)<span class="text-danger">*</span></span>
                                      <input type="text" class="custom-input flex-grow-1"
                                             v-model="formData.areaOfExpertise[0]">
                                    </div>
                                    <div class="d-flex  mb-3" style="gap:10px">
                                      <span>(2)<span class="text-danger">*</span></span>
                                      <input type="text" class="custom-input flex-grow-1"
                                             v-model="formData.areaOfExpertise[1]">
                                    </div>
                                    <div class="d-flex  mb-3" style="gap:10px">
                                      <span>(3) &nbsp;</span>
                                      <input type="text" class="custom-input flex-grow-1"
                                             v-model="formData.areaOfExpertise[2]">
                                    </div>
                                    <div class="d-flex  mb-3" style="gap:10px">
                                      <span>(4) &nbsp;</span>
                                      <input type="text" class="custom-input flex-grow-1"
                                             v-model="formData.areaOfExpertise[3]">
                                    </div>
                                    <div class="d-flex  mb-3" style="gap:10px">
                                      <span>(5) &nbsp;</span>
                                      <input type="text" class="custom-input flex-grow-1"
                                             v-model="formData.areaOfExpertise[4]">
                                    </div>
                                    <div class="d-flex  mb-3" style="gap:10px">
                                      <span>(6) &nbsp;</span>
                                      <input type="text" class="custom-input flex-grow-1"
                                             v-model="formData.areaOfExpertise[5]">
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
<!--                            <div class="col-12 bg-custom-gray">-->
<!--                              <div class="col-6 offset-3 p-4">-->
<!--                                <div class="custom-form-group">-->
<!--                                  <span>Password:<span class="text-danger">*</span></span>-->
<!--                                  <input type="password" class="custom-input" v-model="formData.password">-->
<!--                                </div>-->
<!--                                <div class="custom-form-group">-->
<!--                                  <span>Confirm Password:<span class="text-danger">*</span></span>-->
<!--                                  <input type="password" class="custom-input">-->
<!--                                </div>-->
<!--                              </div>-->
<!--                            </div>-->
<!--                            <div class="col-12">-->
<!--                              <div class="col-6 offset-3 p-4">-->
<!--                                <div class="form-check mb-2">-->
<!--                                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"-->
<!--                                         v-model="formData.receive_reviews_request">-->
<!--                                  <label class="form-check-label" for="flexCheckDefault">-->
<!--                                    Are you willing to receive reviews request from Aperier Journals.-->
<!--                                  </label>-->
<!--                                </div>-->
<!--                                <div class="form-check">-->
<!--                                  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"-->
<!--                                         v-model="formData.join_editorial_team">-->
<!--                                  <label class="form-check-label" for="flexCheckChecked">-->
<!--                                    Are you willing to join editorial team of relevant Aperier Journal.-->
<!--                                  </label>-->
<!--                                </div>-->
<!--                              </div>-->
<!--                            </div>-->
                            <div class="col-12 text-end mt-4">
                              <button type="submit" class="btn-register">Register</button>
                            </div>
                          </form>
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
import axios from "axios"
import config from "@/Data/config";
export default {
  data() {
    return {
      formData: {
        prefix: "Dr.",
        first_name: "",
        middle_name: "",
        last_name: "",
        degree: "",
        email: "",
        phone: "",
        orchid: "",
        department: "",
        institution: "",
        city: "",
        country: "",
        areaOfExpertise: [],
      }
    }
  },
  methods: {
    async handleForm(){
      await axios.post(`${config.domain}/api/profile-update`, this.formData)
          .then(response => {
            if(response.data.success){
              this.$swal({
                text : "User updated  successfully",
                icon : "success"
              });
              localStorage.removeItem("userEmail");
              localStorage.setItem("userEmail", this.formData.email);
              this.getUser()
            }else{
              this.$swal({
                text : response.data.message,
                icon : "error"
              });
            }
          })
          .catch(error => {
            console.log(error)
          })
    },
    async getUser(){
      let response = await axios.get(`${config.domain}/api/profile/`+localStorage.getItem("userEmail"));
      response = response.data.data
      response.areaOfExpertise = response.areaOfExpertise.map(item => item.area_name)
      this.formData = response
    }

  },

  mounted(){
   this.getUser()
  }

}
</script>

<style scoped>
.btn-register {
    padding: 10px;
    width: 167px;
    color: white;
    background: #536F2E;
    box-shadow: inset 7px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 13px;
}

.privacy {
    padding: 20px 60px;
    border: 1px solid gray;
}

.bg-custom-gray {
    background-color: #E1E1E1 !important;
}

.custom-form-group {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.custom-input {
    width: 50%;
}

.form-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 14px;
    height: 85px;
    background-color: #536E2E;
    color: white;
}

.form-title span:first-child {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.07em;
}

.form-title span:last-child {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.07em;
}
</style>