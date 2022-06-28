import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a17b574c = () => interopDefault(import('..\\pages\\About.vue' /* webpackChunkName: "pages/About" */))
const _2b090ba6 = () => interopDefault(import('..\\pages\\Contact.vue' /* webpackChunkName: "pages/Contact" */))
const _417a1cdd = () => interopDefault(import('..\\pages\\Admin\\Login.vue' /* webpackChunkName: "pages/Admin/Login" */))
const _71a3dbaa = () => interopDefault(import('..\\pages\\User\\Login.vue' /* webpackChunkName: "pages/User/Login" */))
const _7a9696e7 = () => interopDefault(import('..\\pages\\User\\Registration.vue' /* webpackChunkName: "pages/User/Registration" */))
const _57880f3f = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/About",
    component: _a17b574c,
    name: "About"
  }, {
    path: "/Contact",
    component: _2b090ba6,
    name: "Contact"
  }, {
    path: "/Admin/Login",
    component: _417a1cdd,
    name: "Admin-Login"
  }, {
    path: "/User/Login",
    component: _71a3dbaa,
    name: "User-Login"
  }, {
    path: "/User/Registration",
    component: _7a9696e7,
    name: "User-Registration"
  }, {
    path: "/",
    component: _57880f3f,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
