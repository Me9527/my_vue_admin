import Vue from 'vue'
import Router from 'vue-router'
import Element01 from "@/components/Element01";
import HelloWorld from "@/components/HelloWorld";

Vue.use(Router)


export const constantRoutes = [
  {
    path: '/',
    component: HelloWorld,
    hidden: false
  },
  {
    path: '/Element01',
    component: Element01,
    hidden: false
  }
]


const createRouter = () => new Router({
  mode: 'history',
  base: '/myexample',
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
