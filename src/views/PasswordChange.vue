<template>
<div class="password-change">
    <div class="password-change-header">
        <h2>비밀번호 변경</h2>
        <p>기존 비밀번호와 함께 새로운 비밀번호를 입력해주세요.</p>
    </div>
    <div class="password-change-main">
        <div>
            <label for="pwd-origin">현재 사용중인 비밀번호</label>
            <input
                id="pwd-origin"
                type="password"
                placeholder="기존 비밀번호를 입력해주세요..."
            />
        </div>
        <div>
            <label for="pwd-new">새로운 비밀번호</label>
            <input
                id="pwd-new"
                type="password"
                placeholder="새로운 비밀번호를 입력해주세요..."
            />
        </div>
        <div>
            <label for="pwd-new-repeat">현재 사용중인 비밀번호</label>
            <input
                id="pwd-new-repeat"
                type="password"
                placeholder="새로운 비밀번호를 다시 입력해주세요..."
            />
        </div>
    </div>
    <div class="password-change-footer">
        <ButtonA
            :width="'150px'"
            @click="isAlertInvalid = true"
        >비밀번호 변경하기</ButtonA>
    </div>

    <AlertA
        v-if="isAlertInvalid"
        @confirm="isAlertInvalid = false"
    >비밀번호를 8자리 이상으로 입력하셔야 합니다.</AlertA>
</div>
</template>



<script>
import AlertA from '../components/alerts/AlertA';
import ButtonA from '../components/buttons/ButtonA';

export default {
    name: 'PasswordChange',
    components: {
        AlertA,
        ButtonA
    },
    data() {
        return {
            isAlertInvalid: false
        };
    }
};
</script>



<style scoped>
.password-change-header {
    padding: 20px 0 20px;
    border-bottom: var(--line-border);
}
.password-change-header h2 {
    font-size: 15px;
}
.password-change-header p {
    font-size: 13px;
    margin-top: 15px;
}
.password-change-main {
    margin-bottom: 50px;
}
.password-change-main > div {
    margin-top: 20px;
}
.password-change-main > div > * {
    display: block;
}
.password-change-main > div > label {
    font-size: var(--input-label-font-size);
    padding: 5px 0;
}
.password-change-main > div > input {
    width: 100%;
    padding: 7.5px;
    border: var(--input-border);
    border-radius: var(--input-border-radius);
    margin-top: 2.5px;
}
.password-change-footer {
    text-align: right;
    margin: 50px 0;
    padding: 20px 0;
}
</style>
