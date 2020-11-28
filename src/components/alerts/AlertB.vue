<template>
<div
    class="alert-modal"
    @mousedown="cancel"
>
    <div
        class="alert-modal-container"
        @mousedown.stop
    >
        <div class="alert-message">
            <slot></slot>
        </div>
        <div class="alert-confirm">
            <ButtonA @click="confirm">확인</ButtonA>
            <ButtonA
                v-if="canCancel"
                @click="cancel"
            >취소</ButtonA>
        </div>
    </div>
</div>
</template>



<script>
import ButtonA from '../buttons/ButtonA';

export default {
    name: 'AlertB',
    components: {
        ButtonA
    },
    props: {
        canCancel: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        cancel() {
            return this.$emit('cancel', true);
        },
        confirm() {
            return this.$emit('confirm', true);
        }
    }
};
</script>



<style scoped>
.alert-modal {
    display: block;
    position: fixed;
    z-index: 20;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
}
.alert-modal-container {
    display: block;
    position: absolute;
    z-index: 21;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 350px;
    border-radius: 5px;
    background-color: white;
}
.alert-modal-container > div {
    display: flex;
    align-items: center;
    width: 100%;
}
.alert-message {
    display: flex;
    justify-content: center;
    height: 60px;
    font-size: 13px;
    padding: 15px;
    margin-top: 15px;
}
.alert-confirm {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
}
.alert-confirm > * {
    margin: 0 10px;
}
</style>
