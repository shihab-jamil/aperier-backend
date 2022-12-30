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
  },
  {
    path: '/author/instruction',
    name: 'Author Instruction',
    component: Instruction,
  },
  {
    path: '/author/submit',
    name: 'Author Submit',
    component: Submit,
  },
  {
    path: '/author/update-profile',
    name: 'Author Update Profile',
    component: UpdateProfile,
  },
  {
    path: '/author/issue-details-view/:id',
    name: 'Issue Details View',
    component: IssueDetailsView,
  },
  {
    path: '/author/issue-details-edit/:id',
    name: 'Issue Details Edit',
    component: IssueDetailsEdit,
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
