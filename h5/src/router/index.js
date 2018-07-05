import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import h5 from '@/components/h5'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'main',
            component: main
        },
        {
            path: '/h5',
            name: 'h5',
            component: h5
        }
    ]
})