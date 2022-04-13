import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0f7fbafc = () => interopDefault(import('..\\pages\\About.vue' /* webpackChunkName: "pages/About" */))
const _30f9c04f = () => interopDefault(import('..\\pages\\Contact.vue' /* webpackChunkName: "pages/Contact" */))
const _06fc5bfb = () => interopDefault(import('..\\pages\\Admin\\Login.vue' /* webpackChunkName: "pages/Admin/Login" */))
const _7af8774d = () => interopDefault(import('..\\pages\\User\\Login.vue' /* webpackChunkName: "pages/User/Login" */))
const _72288785 = () => interopDefault(import('..\\pages\\User\\Registration.vue' /* webpackChunkName: "pages/User/Registration" */))
const _9075143e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _0f7fbafc,
    name: "About"
  }, {
    path: "/Contact",
    component: _30f9c04f,
    name: "Contact"
  }, {
    path: "/Admin/Login",
    component: _06fc5bfb,
    name: "Admin-Login"
  }, {
    path: "/User/Login",
    component: _7af8774d,
    name: "User-Login"
  }, {
    path: "/User/Registration",
    component: _72288785,
    name: "User-Registration"
  }, {
    path: "/",
    component: _9075143e,
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
