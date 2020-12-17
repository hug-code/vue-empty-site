import Vue from 'vue'
import Vuex from 'vuex'
import {
    SIDEBAR_TYPE,
    SIDEBAR_THEME
} from '@/store/const'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        sideCollapsed: localStorage.getItem('sideCollapsed') === '1',
        sideTheme: 'light', // dark
    },
    mutations: {
        [SIDEBAR_TYPE]: (state, type) => {
            state.sideCollapsed = type
            localStorage.setItem('sideCollapsed', (type === true ? '1' : '0'))
        },
        [SIDEBAR_THEME]: (state, type) => {
            state.sideTheme = type
        },
    }
})

export default store
