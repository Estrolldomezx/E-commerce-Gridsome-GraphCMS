const c1 = () => import(/* webpackChunkName: "page--src-templates-product-vue" */ "F:\\CoE 4 Term 1\\Web Engineering\\gridsome-main\\src\\templates\\Product.vue")
const c2 = () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "F:\\CoE 4 Term 1\\Web Engineering\\gridsome-main\\src\\pages\\About.vue")
const c3 = () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "F:\\CoE 4 Term 1\\Web Engineering\\gridsome-main\\node_modules\\gridsome\\app\\pages\\404.vue")
const c4 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "F:\\CoE 4 Term 1\\Web Engineering\\gridsome-main\\src\\pages\\Index.vue")

export default [
  {
    path: "/product/ckdu44mn40gxh010405uwgbtw/",
    component: c1
  },
  {
    path: "/product/ckdu48unc0gzq0158mbzvyzg3/",
    component: c1
  },
  {
    path: "/product/ckdu49mfc0h070102jgprxnj0/",
    component: c1
  },
  {
    path: "/product/ckdu4a79c0h0g0158pqypj0dp/",
    component: c1
  },
  {
    path: "/product/ckdu4awq00h140104ijzi92kv/",
    component: c1
  },
  {
    path: "/product/ckdu4bmyg0h1f0102jk0mwn2g/",
    component: c1
  },
  {
    path: "/product/ckdu4ch1s0h1s01580ksoy6m5/",
    component: c1
  },
  {
    path: "/product/ckrjthdm8a84s0d392skqz7tv/",
    component: c1
  },
  {
    path: "/product/ckrjtlvnka72w0b40pcxlah91/",
    component: c1
  },
  {
    path: "/product/ckrjtonyoa7860c9716cp6nuu/",
    component: c1
  },
  {
    path: "/about/",
    component: c2
  },
  {
    name: "404",
    path: "/404/",
    component: c3
  },
  {
    name: "home",
    path: "/",
    component: c4
  },
  {
    name: "*",
    path: "*",
    component: c3
  }
]
