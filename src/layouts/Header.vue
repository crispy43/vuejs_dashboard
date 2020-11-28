<template>
<div class="header">
    <div class="header-logo">
        <img :src="headerLogo.src" :alt="headerLogo.alt" @click="goHome">
    </div>
    <div class="header-nav">
        <HeaderNav v-for="(item, index) in tree" :key="item.key" :index="index" :menu="item.name" />
    </div>
    <div class="header-user">
        <img
            :src="require('@/assets/images/user-silhouette.svg')"
            @click="isUserInfo = !isUserInfo"
        >
    </div>
    <div
        v-show="isUserInfo"
        class="header-user-drop-container"
    >
        <div class="header-user-title">
            <h3>USER INFO</h3>
        </div>
        <div
            class="header-user-item"
            @click="pwdChange"
        >
            <img :src="require('@/assets/images/password.svg')">
            <span>비밀번호 변경</span>
        </div>
        <div
            class="header-user-item header-user-sign-out"
            @click="isCommandSignOut = true"
        >
            <FontAwesomeIcon icon="sign-out-alt" />
            <span>로그아웃</span>
        </div>
    </div>

    <AlertA
        v-if="isCommandSignOut"
        :title="'로그아웃'"
        :canCancel="true"
        @cancel="isCommandSignOut = false"
        @confirm="signOut"
    >정말로 로그아웃하시겠습니까?</AlertA>
</div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import HeaderNav from '../components/navigations/HeaderNav';
import AlertA from '../components/alerts/AlertA';

// fortawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faSignOutAlt);

export default {
    name: 'Header',
    components: {
        HeaderNav,
        AlertA,
        FontAwesomeIcon
    },
    props: {
        headerLogo: {
            src: Object,
            alt: String
        }
    },
    setup() {
        const router = useRouter();
        const store = useStore();
        const { tree } = store.state.treeMenu;

        const goHome = () => {
            router.push({
                path: '/'
            });
        }

        const pwdChange = () => {
            router.push({
                path: '/user/password'
            });
        }

        const signOut = () => {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            router.push({
                path: '/'
            });
        }

        const isUserInfo = ref(false);
        const isCommandSignOut = ref(false);

        return {
            tree,
            goHome,
            pwdChange,
            signOut,
            isUserInfo,
            isCommandSignOut
        };
    }
}
</script>

<style scoped>
.header {
    display: flex;
    align-items: center;
    align-content: center;
    position: fixed;
    left: 0;
    right: 0;
    z-index: 11;
    width: 100%;
    height: var(--header-height);
    background-color: var(--header-background-color);
    -ms-user-select: none; 
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
}
.header-logo {
    flex: 0 1 var(--side-nav-width);
    display: flex;
    justify-content: center;
    min-height: var(--header-logo-height);
}
.header-logo > img {
    width: var(--header-logo-width);
    height: var(--header-logo-height);
    cursor: pointer;
}
.header-nav {
    flex: 0 0 120px;
    display: flex;
}
.header-user {
    flex: 0 1 100px;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
}
.header-user {
    flex: 0 1 100px;
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    width: 120px;
    height: 100%;
    align-items: center;
    align-content: center;
    justify-content: center;
}
.header-user > img {
    width: var(--header-user-icon-width);
    height: var(--header-user-icon-height);
    cursor: pointer;
}
.header-user-drop-container {
    display: block;
    position: absolute;
    top: calc(var(--header-height) - 10px);
    right: 20px;
    min-width: 200px;
    height: auto;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 50px 100px rgba(50,50,93,.1), 0 15px 35px rgba(50,50,93,.15), 0 5px 15px rgba(0,0,0,.1);
    padding-top: 10px;
}
.header-user-title {
    padding: 20px;
    font-size: var(--header-user-title-font-size);
    color: var(--header-user-title-color);
}
.header-user-title {
    padding: 10px 20px;
    font-size: var(--header-user-title-font-size);
    color: var(--header-user-title-color);
}
.header-user-item {
    cursor: pointer;
    padding: 10px 15px;
}
.header-user-item > * {
    margin-right: 10px;
}
.header-user-item > img {
    width: var(--header-user-item-icon-width);
    height: var(--header-user-item-icon-height);
}
.header-user-item > span {
    font-size: var(--header-user-item-font-size);
    color: var(--header-user-item-color);
}
.header-user-item > svg {
    font-size: var(--header-user-item-font-size);
    color: var(--header-user-item-icon-color);
}
.header-user-sign-out {
    border-top: 1px solid rgb(240, 240, 240);
}
</style>
