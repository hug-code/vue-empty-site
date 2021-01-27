import Vue from 'vue'
import Router from 'vue-router'
import routes from '@/config/router.config'

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const router = new Router({
    mode: 'history',  // 设置模式
    routes: routes
})

router.beforeEach(async (to, from, next) => {
    document.title = '举杯邀月 - ' + to.meta.title;
    // let loginWhiteList = ['404', 'login'];
    // if(loginWhiteList.indexOf(to.name) < 0){
    //     if (localStorage.getItem('token')) {
    //         next()
    //     } else {
    //         next({name: 'login'})
    //     }
    // }
    next()
});

router.onError((error) => {
    const pattern = /Loading chunk (\d)+ failed/g;
    const isChunkLoadFailed = error.message.match(pattern);
    const targetPath = router.history.pending.fullPath;
    if (isChunkLoadFailed) {
        router.replace(targetPath).then(() => {
        });
    }
});

export default router
