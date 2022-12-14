<template>
    <section style=" margin-top: 60px;">
        <div class="container">
            <div class="row gy-4">
                <div class="col-12 search-group">
                    <input type="text" placeholder="Search">
                    <i class="fa-brands fa-searchengin fa-lg"></i>
                </div>
                <div class="col-12">
                    <p class="issue-title">Volumes and Issues</p>
                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation" v-for="item in studyList.volumeCount" :key="item">
                            <button class="nav-link text-secondary" :class="item === 1 ? 'active' : ''" :id="'pills-tab-'+item" data-bs-toggle="pill"
                                :data-bs-target="'#pills-'+item" type="button" role="tab" :aria-controls="'pills-'+item"
                                aria-selected="true">Volume {{ item }}</button>
                        </li>
<!--                        <li class="nav-item" role="presentation" v-for="item in studyList.volumeCount">-->
<!--                            <button class="nav-link text-secondary" :class="item === 1 ? 'active' : ''" id="pills-home-tab" data-bs-toggle="pill"-->
<!--                                    data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"-->
<!--                                    aria-selected="true">Volume {{ item }}</button>-->
<!--                        </li>-->
<!--                        <li class="nav-item" role="presentation">-->
<!--                            <button class="nav-link text-secondary" id="pills-profile-tab" data-bs-toggle="pill"-->
<!--                                data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"-->
<!--                                aria-selected="false">Volume 2</button>-->
<!--                        </li>-->
                        <li class="nav-item  flex-grow-1 text-end text-secondary align-self-center" role="presentation">
                            {{ studyList.numOfArticle }} Articles
                        </li>
                    </ul>
                    <hr>
                    <div class="tab-content" id="pills-tabContent">
                        <div
                            v-for="volume in studyList.volumeCount" :key="volume"
                            :class="volume === 1 ? 'active' : ''"
                            class="tab-pane fade show p-5" :id="'pills-'+volume" role="tabpanel"
                            :aria-labelledby="'pills-tab-'+volume">
                            <div class="current-issue">
                                <div class="row g-3">
                                    <router-link
                                        v-for="item in studyList[studyList.volume[volume-1]]"
                                        :key="item"
                                        :to="{ name: 'Issue Details', params: { id: item.id } }" target="_blank">
                                        <JournalListCardComponent
                                            class="col-12"
                                            :title="item.title"
                                            :author="item.first_name+' '+item.middle_name+' '+item.last_name"
                                            :tag="item.name"
                                            :volume="item.volume"
                                            :issue="item.issue"
                                            :page="'pp. '+item.page"
                                            :downloads="'Downloads: '+item.downloads"
                                            :views="'Views: '+item.views"
                                            @click="this.$router.push({name: 'Issue Details', params:{id: item.id}})"
                                        />
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import JournalListCardComponent from '../../Components/Journal/JournalListCardComponent.vue';
import axios from "axios";
import config from "../../Data/config";

export default {
    components: { JournalListCardComponent },
    data(){
        return{
            studyList : {}
        }
    },
    async mounted(){
        await axios.get(`${config.domain}/api/studies-per-journal-with-volume/`+this.$route.params.id).then(response => {
            this.studyList = response.data.data
            this.studyList.volume = this.studyList.volume.reverse();
        }).catch(error => {
            console.log(error)
        })

        console.log(this.studyList[this.studyList.volume[0]])
    }
}
</script>

<style scoped>
a {
    text-decoration: none;
    color: inherit;
}

.search-group {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 20px 10px;
}

.search-group input {
    width: 30%;
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.5);
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px 0px 0px 4px;
}

.search-group i {
    padding: 14px 10px;
    background-color: #536F2E;
    border-radius: 0px 3px 3px 0px;
    color: white;
}

.issue-title {
    font-weight: 700;
    font-size: 24px;

    color: rgba(0, 0, 0, 0.95);
}


.nav-pills .nav-link.active,
.nav-pills .show>.nav-link {
    color: #fff !important;
    background-color: #536F2E !important;
}
</style>
