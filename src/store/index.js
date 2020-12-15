import Vue from 'vue'
import Vuex from 'vuex'
import {
    SIDEBAR_TYPE,
    SIDEBAR_THEME
} from '@/store/const'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        sideCollapsed: false,
        sideTheme: 'light', // dark
    },
    mutations: {
        [SIDEBAR_TYPE]: (state, type) => {
            state.sideCollapsed = type
        },
        [SIDEBAR_THEME]: (state, type) => {
            state.sideTheme = type
        },
    }
})

export default store
