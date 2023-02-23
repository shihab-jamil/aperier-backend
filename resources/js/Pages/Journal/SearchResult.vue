<template>
    <section style=" margin-top: 60px; min-height: 87vh">
        <div class="container p-5">
            <h4 class="py-5">
                {{ studyList.length }} results found
                <hr>
            </h4>
            <div class="row gy-4">
                <div class="col-12">
                    <div class="current-issue">
                        <div class="row g-3">
                            <router-link
                                v-for="item in studyList"
                                :key="item"
                                :to="{ name: 'Issue Details', params: { id: item.id } }" target="_blank">
                                <JournalListCardComponent
                                    class="col-12"
                                    :title="item.title"
                                    :author="item.first_name+' '+(item.middle_name ?? '')+' '+item.last_name"
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
            studyList : [],
            payload : {
                query : null
            }
        }
    },
    async mounted(){
        this.payload.query = this.$route.query.q
        await axios.post(`${config.domain}/api/search-study`, this.payload).then(response => {
            this.studyList = response.data.data
            console.log("response", response)
        }).catch(error => {
            console.log(error)
        })
    },
    methods : {
        async loadSearch(){
            await axios.post(`${config.domain}/api/search-study`, this.payload).then(response => {
                this.studyList = response.data.data
                console.log("response", response)
            }).catch(error => {
                console.log(error)
            })
        }
    },
    watch: {
        '$route'(to, from) {
            this.payload.query = this.$route.query.q
            this.loadSearch()
        }
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
