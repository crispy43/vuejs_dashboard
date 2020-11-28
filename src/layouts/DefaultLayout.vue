<template>
<div :style="cssRootVar" class="root-layout">
    <Header v-if="isAuthenticated" :headerLogo="headerLogo" />
    <SideNav v-if="isAuthenticated" />
    <Main />
    <Footer />
</div>
</template>



<script>
import { toRefs, reactive } from 'vue';
import { useStore } from 'vuex';
import defaultVars from '../assets/styles/defaultVars';
import Header from './Header';
import SideNav from './SideNav';
import Main from './Main';
import Footer from './Footer';

export default {
    name: 'DefaultLayout',
    components: {
        Header,
        SideNav,
        Main,
        Footer
    },
    setup() {
        const cssRootVar = reactive(defaultVars);

        // 해더 로고
        const headerLogo = reactive({
            src: require('../assets/images/logo_white_w.svg'),
            alt: 'bizportal_logo'
        });

        const store = useStore();
        const { isAuthenticated } = toRefs(store.state);

        return {
            cssRootVar,
            headerLogo,
            isAuthenticated
        };
    }
}
</script>



<style>
.root-layout {
    flex: 1 1 auto;
    display: flex;
}
h1, h2, h3, h4, h5, h6 ,p ,th, td, label {
    color: var(--default-font-color);
}
::-webkit-scrollbar {
    width: var(--scrollbar-width);
    height: var(--scrollbar-height);
}
::-webkit-scrollbar-track {
    background-color: transparent;
}
::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: var(--scrollbar-background-color);
}
::-webkit-scrollbar-button {
    width: 0;
    height: 0;
}
/* fade */
.fade-enter-active, .fade-leave-active {
    transition: opacity var(--fade-time);
}
.fade-enter-from, .fade-leave-to {
    opacity: 0;
}
.fade-i-enter-active {
    transition: opacity var(--fade-time);
}
.fade-i-enter-from {
    opacity: 0;
}
.fade-o-leave-active {
    transition: opacity var(--fade-time);
}
.fade-o-leave-to {
    opacity: 0;
}
</style>
