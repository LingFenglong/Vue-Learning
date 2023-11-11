import VueRouter from 'vue-router'
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import News from "@/pages/News.vue";
import Messages from "@/pages/Messages.vue";
import NewsDetail from "@/pages/NewsDetail.vue";

const router = new VueRouter({
  routes: [
    {
      name: 'about',
      path: '/about',
      component: About
    },
    {
      name: 'home',
      path: '/home',
      component: Home,
      beforeEnter(to, from, next) {
        // to ===> /home
        if (localStorage.getItem('TOKEN') === '111111') {
          next()
        } else {
          alert('拒绝访问 home')
        }
      },
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
              },
              meta: {
                secured: true
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

//全局前置路由守卫————初始化的时候被调用、每次路由切换之前被调用
router.beforeEach((to, from, next) =>{
  console.log('to', to)
  console.log('from', from)
  console.log('next', next)
  console.log('router', router)

  // 是否需要登录
  if (!to.meta.secured) {
    next()
    return
  }

  if (localStorage.getItem('TOKEN') === '111111') {
    next()
    return
  }

  alert(`${to.name}拒绝访问，请登录`)
})

router.afterEach((to, from, next) => {
  if (to.name) {
    document.title = to.name
  } else {
    document.title = to.path;
  }
})

export default router