import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";
import PaidSearchAdAgencyPage from "../pages/PaidSearchAdAgencyPage.vue";
import SocialMediaAdAgencyPage from "../pages/SocialMediaAdAgencyPage.vue";
import TraditionalOfflineAdAgencyPage from "../pages/TraditionalOfflineAdAgencyPage.vue";
import ServicesPage from "../pages/ServicesPage.vue";
import ServiceDetailsPage from "../pages/ServiceDetailsPage.vue";
import OurTeamPage from "../pages/OurTeamPage.vue";
import AboutUsPage from "../pages/AboutUsPage.vue";
import CareersPage from "../pages/CareersPage.vue";
import CareerDetailsPage from "../pages/CareerDetailsPage.vue";
import SuccessStoriesPage from "../pages/SuccessStoriesPage.vue";
import SuccessStoryDetailsPage from "../pages/SuccessStoryDetailsPage.vue";
import BlogPage from "../pages/BlogPage.vue";
import BlogDetailsPage from "../pages/BlogDetailsPage.vue";
import TagsPage from "../pages/TagsPage.vue";
import CategoriesPage from "../pages/CategoriesPage.vue";
import AuthorPage from "../pages/AuthorPage.vue";
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage.vue";
import TermsConditionsPage from "../pages/TermsConditionsPage.vue";
import ContactUsPage from "../pages/ContactUsPage.vue";
import ErrorPage from "../pages/ErrorPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "PaidSearchAdAgencyPage",
    component: PaidSearchAdAgencyPage,
  },
  {
    path: "/social-media-ad-agency",
    name: "SocialMediaAdAgencyPage",
    component: SocialMediaAdAgencyPage,
  },
  {
    path: "/traditional-offline-ad-agency",
    name: "TraditionalOfflineAdAgencyPage",
    component: TraditionalOfflineAdAgencyPage,
  },
  {
    path: "/services",
    name: "ServicesPage",
    component: ServicesPage,
  },
  {
    path: "/service-details",
    name: "ServiceDetailsPage",
    component: ServiceDetailsPage,
  },
  {
    path: "/our-team",
    name: "OurTeamPage",
    component: OurTeamPage,
  },
  {
    path: "/about-us",
    name: "AboutUsPage",
    component: AboutUsPage,
  },
  {
    path: "/careers",
    name: "CareersPage",
    component: CareersPage,
  },
  {
    path: "/career-details",
    name: "CareerDetailsPage",
    component: CareerDetailsPage,
  },
  {
    path: "/success-stories",
    name: "SuccessStoriesPage",
    component: SuccessStoriesPage,
  },
  {
    path: "/success-story-details",
    name: "SuccessStoryDetailsPage",
    component: SuccessStoryDetailsPage,
  },
  {
    path: "/blog",
    name: "BlogPage",
    component: BlogPage,
  },
  {
    path: "/blog-details",
    name: "BlogDetailsPage",
    component: BlogDetailsPage,
  },
  {
    path: "/tags",
    name: "TagsPage",
    component: TagsPage,
  },
  {
    path: "/categories",
    name: "CategoriesPage",
    component: CategoriesPage,
  },
  {
    path: "/author",
    name: "AuthorPage",
    component: AuthorPage,
  },
  {
    path: "/privacy-policy",
    name: "PrivacyPolicyPage",
    component: PrivacyPolicyPage,
  },
  {
    path: "/terms-conditions",
    name: "TermsConditionsPage",
    component: TermsConditionsPage,
  },
  {
    path: "/contact-us",
    name: "ContactUsPage",
    component: ContactUsPage,
  },
  { path: "/:pathMatch(.*)*", name: "ErrorPage", component: ErrorPage },
];

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "active",
  routes,
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
