import VueRouter from 'vue-router'
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import News from "@/pages/News.vue";
import Messages from "@/pages/Messages.vue";
import NewsDetail from "@/pages/NewsDetail.vue";
export default new VueRouter({
  routes: [
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: 'news',
          component: News,
          children: [
            {
              path: 'detail',
              component: NewsDetail
            }
          ]
        },
        {
          path: 'messages',
          component: Messages
        }
      ]
    }
  ]
})