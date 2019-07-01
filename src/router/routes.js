
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/unit/:id', component: () => import('pages/Unit.vue') },
      { path: '/chapter/:id', component: () => import('pages/Chapter.vue') },
      { path: '/tests', component: () => import('pages/Tests.vue') },
      { name: 'chapterTest' , path: '/test/:unitID/:chapterID', component: () => import('pages/ChapterTest.vue') },
      { name: 'unitTest' , path: '/test/:unitID', component: () => import('pages/UnitTest.vue') },
      {path: '/history', component: () => import('pages/History.vue') }

    ]
  },
  {
    path: '/login',
    component: () => import('layouts/MyLogin.vue'),
    children: [
      { name:'login', path: '', component: () => import('pages/Login.vue') },
    ]
  },

];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
