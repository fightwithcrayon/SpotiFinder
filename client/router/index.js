import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Artist from '../views/Artist'
import Album from '../views/Album'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/artist/:artistId',
      component: Artist
    },
    {
      path: '/album/:albumId',
      component: Album
    }
  ]
})
