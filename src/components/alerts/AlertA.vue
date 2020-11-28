<template>
<div
    class="alert-modal"
    @mousedown="cancel"
>
    <div
        class="alert-modal-container"
        @mousedown.stop
    >
        <div
            v-if="title"
            class="alert-header"
        >
            {{ title }}
        </div>
        <div class="alert-main">
            <slot></slot>
        </div>
        <div class="alert-footer">
            <button
                v-if="canCancel"
                :class="['alert-cancel', canCancel ? 'alert-button-left' : 'alert-button-one']"
                @click="cancel"
            >취소</button>
            <button
                :class="['alert-confirm', canCancel ? 'alert-button-right' : 'alert-button-one']"
                @click="confirm"
            >확인</button>
        </div>
    </div>
</div>
</template>



<script>
export default {
    name: 'AlertA',
    props: {
        title: {
            type: String,
            default: '알림'
        },
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
.alert-header, .alert-main {
    height: 55px;
    padding: 15px;
}
.alert-header {
    font-size: 15px;
    font-weight: 700;
    border-bottom: var(--line-border);
}
.alert-main {
    font-size: 13px;
}
.alert-footer {
    display: flex;
    height: 40px;
    border-top: var(--line-border);
}
.alert-footer > button {
    flex: 1 1 50%;
    height: 100%;
    border: none;
    font-size: var(--alert-a-button-font-size);
    font-weight: var(--alert-a-button-font-weight);
    cursor: pointer;
}
.alert-cancel {
    background-color: var(--alert-a-button-a-background-color);
    color: var(--alert-a-button-a-color);
}
.alert-confirm {
    background-color: var(--alert-a-button-b-background-color);
    color: var(--alert-a-button-b-color);
}
.alert-button-one {
    border-radius: 0 0 5px 5px / 0 0 5px 5px;
}
.alert-button-left {
    border-radius: 0 0 0 5px / 0 0 0 5px;
}
.alert-button-right {
    border-radius: 0 0 5px 0 / 0 0 5px 0;
}
</style>
