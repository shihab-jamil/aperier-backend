import { createRouter, createWebHistory } from 'vue-router'
import PublisherHome from '../Pages/PublisherHome.vue'
import PublishingPolicies from '../Pages/PublishingPolicies.vue'
import EditorialPolicies from '../Pages/EditorialPolicies.vue'
import NewsList from '../Pages/News/NewsList.vue'
import NewsDetails from '../Pages/News/NewsDetails.vue'
import AwardList from '../Pages/Award/AwardList.vue'
import AwardDetails from '../Pages/Award/AwardDetails.vue'
import PolicyAndCondition from '../Pages/PolicyAndCondition.vue'
import JournalDetails from '../Pages/Journal/JournalDetails.vue'
import CurrentIssueArchive from '../Pages/Journal/CurrentIssueArchive.vue'
import IssueDetails from '../Pages/Journal/IssueDetails.vue'
import Login from '../Pages/Auth/Login.vue'
import SignUp from '../Pages/Auth/SignUp.vue'
import SignUpSuccess from '../Pages/Auth/SignUpSuccess.vue'

import Dashboard from '../Pages/Author/Dashboard.vue'
import Instruction from '../Pages/Author/Instruction.vue'
import Submit from '../Pages/Author/Submit.vue'
import UpdateProfile from '../Pages/Author/UpdateProfile.vue'
import IssueDetailsView from '../Pages/Author/IssueDetailsView.vue'
import IssueDetailsEdit from '../Pages/Author/IssueDetailsEdit.vue'

import AdminDashboard from '../Pages/Admin/Dashboard.vue'
import AdminNews from '../Pages/Admin/News.vue'
import AdminNewsAdd from '../Pages/Admin/AddNews.vue'
import AdminNewsAEdit from '../Pages/Admin/EditNews.vue'
import OngoingStudies from "../Pages/Admin/OngoingStudies.vue";
import PublishedStudies from "../Pages/Admin/PublishedStudies.vue";
import ArchivedStudies from "../Pages/Admin/ArchivedStudies.vue";
import StudyAction from "../Pages/Admin/StudyAction.vue";
import AppService from "../Service/AppService";


const routes = [
  {
    path: '/',
    name: 'Home',
    component: PublisherHome
  },
  {
    path: '/publishing-policies',
    name: 'Publishing Policies',
    component: PublishingPolicies
  },
  {
    path: '/editorial-policies',
    name: 'Editorial Policies',
    component: EditorialPolicies
  },
  {
    path: '/news-list',
    name: 'News List',
    component: NewsList
  },

  {
    path: '/news-details/:id',
    name: 'News Details',
    component: NewsDetails,

  },
  {
    path: '/award-list',
    name: 'Award List',
    component: AwardList
  },

  {
    path: '/award-details/:id',
    name: 'Award Details',
    component: AwardDetails,

  },
  {
    path: '/policy-condition',
    name: 'Policy and Condition',
    component: PolicyAndCondition
  },
  {
    path: '/journal-details/:id',
    name: 'Journal Details',
    component: JournalDetails
  },
  {
    path: '/current-issue-archive/:id',
    name: 'Current Issue Archive',
    component: CurrentIssueArchive
  },
  {
    path: '/issue-details/:id',
    name: 'Issue Details',
    component: IssueDetails,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/sign-up',
    name: 'Sign Up',
    component: SignUp,
  },
  {
    path: '/sign-up-success',
    name: 'Sign Up success',
    component: SignUpSuccess,
  },
  {
    path: '/author/dashboard',
    name: 'Author Dashboard',
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      if (AppService.isLoggedIn() && !AppService.isAdmin()) {
          next();
      } else {
          next({ name: 'Home' })
      }
    }
  },
  {
    path: '/author/instruction',
    name: 'Author Instruction',
    component: Instruction,
      beforeEnter: (to, from, next) => {
          if (AppService.isLoggedIn() && !AppService.isAdmin()) {
              next();
          } else {
              next({ name: 'Home' })
          }
      }
  },
  {
    path: '/author/submit',
    name: 'Author Submit',
    component: Submit,
      beforeEnter: (to, from, next) => {
          if (AppService.isLoggedIn() && !AppService.isAdmin()) {
              next();
          } else {
              next({ name: 'Home' })
          }
      }
  },
  {
    path: '/author/update-profile',
    name: 'Author Update Profile',
    component: UpdateProfile,
      beforeEnter: (to, from, next) => {
          if (AppService.isLoggedIn() && !AppService.isAdmin()) {
              next();
          } else {
              next({ name: 'Home' })
          }
      }
  },
  {
    path: '/author/issue-details-view/:id',
    name: 'Issue Details View',
    component: IssueDetailsView,
      beforeEnter: (to, from, next) => {
          if (AppService.isLoggedIn() && !AppService.isAdmin()) {
              next();
          } else {
              next({ name: 'Home' })
          }
      }
  },
  {
    path: '/author/issue-details-edit/:id',
    name: 'Issue Details Edit',
    component: IssueDetailsEdit,
      beforeEnter: (to, from, next) => {
          if (AppService.isLoggedIn() && !AppService.isAdmin()) {
              next();
          } else {
              next({ name: 'Home' })
          }
      }
  },


    // admin dashboard
    {
        path: '/admin',
        name: 'Admin Dashboard',
        component: AdminDashboard,
        beforeEnter: (to, from, next) => {
            if (AppService.isLoggedIn() && AppService.isAdmin()) {
                next();
            } else {
                next({ name: 'Home' })
            }
        }
    },
    {
        path: '/admin-news',
        name: 'Admin News',
        component: AdminNews,
        beforeEnter: (to, from, next) => {
            if (AppService.isLoggedIn() && AppService.isAdmin()) {
                next();
            } else {
                next({ name: 'Home' })
            }
        }
    },
    {
        path: '/admin-news-add',
        name: 'Admin News Add',
        component: AdminNewsAdd,
        beforeEnter: (to, from, next) => {
            if (AppService.isLoggedIn() && AppService.isAdmin()) {
                next();
            } else {
                next({ name: 'Home' })
            }
        }
    },
    {
        path: '/admin-news-edit/:id',
        name: 'Admin News Edit',
        component: AdminNewsAEdit,
        beforeEnter: (to, from, next) => {
            if (AppService.isLoggedIn() && AppService.isAdmin()) {
                next();
            } else {
                next({ name: 'Home' })
            }
        }
    },
    {
        path: '/admin-ongoing-studies',
        name: 'Admin Ongoing Studies',
        component: OngoingStudies,
        beforeEnter: (to, from, next) => {
            if (AppService.isLoggedIn() && AppService.isAdmin()) {
                next();
            } else {
                next({ name: 'Home' })
            }
        }
    },
    {
        path: '/admin-published-studies',
        name: 'Admin Published Studies',
        component: PublishedStudies,
        beforeEnter: (to, from, next) => {
            if (AppService.isLoggedIn() && AppService.isAdmin()) {
                next();
            } else {
                next({ name: 'Home' })
            }
        }
    },
    {
        path: '/admin-archived-studies',
        name: 'Admin Archived Studies',
        component: ArchivedStudies,
        beforeEnter: (to, from, next) => {
            if (AppService.isLoggedIn() && AppService.isAdmin()) {
                next();
            } else {
                next({ name: 'Home' })
            }
        }
    },
    {
        path: '/admin-study-action/:id',
        name: 'Admin Study Action',
        component: StudyAction,
        beforeEnter: (to, from, next) => {
            if (AppService.isLoggedIn() && AppService.isAdmin()) {
                next();
            } else {
                next({ name: 'Home' })
            }
        }
    }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
