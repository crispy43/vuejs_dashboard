<template>
<div class="footer">
    <div
        class="footer-tab"
        :style="{ backgroundColor: 'rgb(225 52 46)' }"
    >
        <FontAwesomeIcon icon="rocket" />
        <p>KDAX</p>
    </div>
    <div
        class="footer-tab"
        :style="{ backgroundColor: 'rgb(49 106 209)' }"
    >
        <FontAwesomeIcon icon="rocket" />
        <p>ASTATOUR</p>
    </div>
</div>
</template>

<script>
// fortawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faRocket);

export default {
    name: 'Header',
    components: {
        FontAwesomeIcon
    },
    props: {
    },
    setup() {
    }
}
</script>

<style scoped>
.footer {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 15;
    background-color: rgb(221 221 221);
    width: 100%;
    height: 35px;
}
.footer-tab {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 100%;
    padding: 0 5px;
    margin: 0 2px;
    cursor: pointer;
}
.footer-tab p, .footer-tab svg {
    color: white;
    font-size: 14px;
    padding: 0 2px;
}
</style>
