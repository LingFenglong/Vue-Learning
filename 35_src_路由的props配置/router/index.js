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
          name: 'news',
          path: 'news',
          component: News,
          children: [
            {
              name: 'detail',
              path: 'detail/:id/:title',
              component: NewsDetail,
              // 1. props值为对象，该对象中所有的key-value的组合最终都会通过props传给Detail组件
              // props: {
              //   id: '666',
              //   title: 'sgg'
              // }

              // 2. props值为布尔值，布尔值为true，则把路由收到的所有params参数通过props传给Detail组件
              // props: true

              // 3. props值为函数，该函数返回的对象中每一组key-value都会通过props传给Detail组件
              props($route) {
                return {
                  id: $route.params.id,
                  title: $route.params.title
                }
              }
            }
          ]
        },
        {
          name: 'messages',
          path: 'messages',
          component: Messages
        }
      ]
    }
  ]
})