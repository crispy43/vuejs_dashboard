<template>
<div class="member-base">
   <!-- 기본정보 -->
   <div class="member-base-header">
      <TitleA>기본정보</TitleA>
      <div class="member-base-header-right">
         <ButtonB>저장</ButtonB>
         <ButtonB>취소</ButtonB>
      </div>
   </div>
   <table class="member-table">
      <tr>
         <td
            rowspan="5"
            class="picture"
         >
            사진
         </td>
         <td class="prop">
            사원번호
         </td>
         <td class="value">
            <input
               type="text"
            >
         </td>
         <td class="prop">
            성별
         </td>
         <td class="value">
            <input type="radio">
            <label class="radio-label">남</label>
            <input type="radio">
            <label class="radio-label">여</label>
         </td>
      </tr>
      <tr>
         <td class="prop">
            이름
         </td>
         <td class="value">
            <input
               type="text"
            >
         </td>
         <td class="prop">
            이름(영문)
         </td>
         <td class="value">
            <input
               type="text"
            >
         </td>
      </tr>
      <tr>
         <td class="prop">
            생년월일
         </td>
         <td class="value">
            <input
               type="date"
            >
            <input type="radio">
            <label class="radio-label">양력</label>
            <input type="radio">
            <label class="radio-label">음력</label>
         </td>
         <td class="prop">
            이메일
         </td>
         <td class="value">
            <input
               type="text"
               :style="{
                  width: '30%'
               }"
            >
            @
            <input
               type="text"
               :style="{
                  width: '50%',
                  marginLeft: '15px'
               }"
            >
         </td>
      </tr>
      <tr>
         <td class="prop">
            휴대폰
         </td>
         <td class="value">
            <input
               type="text"
            >
         </td>
         <td class="prop">
            자택전화번호
         </td>
         <td class="value">
            <input
               type="text"
            >
         </td>
      </tr>
      <tr>
         <td class="prop">
            주소
         </td>
         <td 
            class="value"
            colspan="3"
         >
            <input
               type="text"
               :style="{
                  width: '80%'
               }"
            >
         </td>
      </tr>
   </table>

   <!-- 인사정보 -->
   <div class="member-details-header">
      <TitleA>인사정보</TitleA>
   </div>
   <table class="member-table">
      <tr>
         <td class="prop">
            회사구분
         </td>
         <td
            class="value"
            :style="{
               border: 'none'
            }"
         >
            <input type="radio">
            <label class="radio-label">KDAX</label>
            <input type="radio">
            <label class="radio-label">Korfinholdings</label>
         </td>
         <td
            class="prop"
            :style="{
               backgroundColor: 'white',
               border: 'none'
            }"
         >
         </td>
         <td 
            class="value"
            :style="{
               border: 'none'
            }"
         >
         </td>
      </tr>
      <tr>
         <td class="prop">
            부서구분
         </td>
         <td class="value">
            <input type="radio">
            <label class="radio-label">영업부서</label>
            <input type="radio">
            <label class="radio-label">지원부서</label>
         </td>
         <td class="prop">
            근무형태
         </td>
         <td class="value">
            <select>
               <option>출근</option>
               <option>외부</option>
            </select>
         </td>
      </tr>
      <tr>
         <td class="prop">
            부서명
         </td>
         <td class="value">
            <select>
               <option>서울지점</option>
            </select>
         </td>
         <td class="prop">
            수습기간/적용율
         </td>
         <td class="value">
            <input type="date">
            <input type="checkbox">
            <input
               type="number"
               :style="{
                  width: '50px'
               }"
            >
         </td>
      </tr>
      <tr>
         <td class="prop">
            직급
         </td>
         <td class="value">
            <select>
               <option>과장</option>
            </select>
         </td>
         <td class="prop">
            직책
         </td>
         <td class="value">
            <select>
               <option>팀원</option>
            </select>
         </td>
      </tr>
      <tr>
         <td class="prop">
            추천인/사번
         </td>
         <td class="value">
            <input type="text">
         </td>
         <td class="prop">
            담당이사/사번
         </td>
         <td class="value">
            <input type="text">
         </td>
      </tr>
      <tr>
         <td class="prop">
            재직구분
         </td>
         <td class="value">
            <input type="radio">
            <label class="radio-label">재직</label>
            <input type="radio">
            <label class="radio-label">휴직</label>
            <input type="radio">
            <label class="radio-label">퇴사</label>
         </td>
         <td class="prop">
            아카데미수료일
         </td>
         <td class="value">
            <input type="date" disabled>
         </td>
      </tr>
      <tr>
         <td class="prop">
            입사일자
         </td>
         <td class="value">
            <input type="date" disabled>
         </td>
         <td class="prop">
            퇴사일자
         </td>
         <td class="value">
            <input type="date" disabled>
         </td>
      </tr>
   </table>

   <!-- 급여이체정보 -->
   <div class="member-details-header">
      <TitleA>급여이체정보</TitleA>
   </div>
   <table class="member-table">
      <tr>
         <td class="prop">
            은행명
         </td>
         <td class="value">
            <input type="text">
         </td>
         <td class="prop">
            예금주
         </td>
         <td class="value">
            <input type="text">
         </td>
         <td class="prop">
            계좌번호
         </td>
         <td class="value">
            <input type="text">
         </td>
      </tr>
      <tr>
         <td class="prop">
            주민번호
         </td>
         <td class="value">
            <input type="text">
         </td>
         <td class="prop">
            소득신고자/관계
         </td>
         <td class="value">
            <input
               type="text"
               :style="{
                     width: '45%'
               }"
            >
            <input
               type="text"
               :style="{
                     width: '35%'
               }"
            >
         </td>
         <td class="prop">
            소득신고자주민번호
         </td>
         <td class="value">
            <input type="text">
         </td>
      </tr>
      <tr>
         <td class="prop">
            4대보험 가입 여부
         </td>
         <td class="value">
            <input type="radio">
            <label class="radio-label">Y</label>
            <input type="radio">
            <label class="radio-label">N</label>
         </td>
         <td class="prop">
            4대보험 가입일자
         </td>
         <td class="value">
            <input type="date">
         </td>
         <td class="prop">
            4대보험 상실일
         </td>
         <td class="value">
            <input type="text" disabled>
         </td>
      </tr>
   </table>

   <!-- 비상연락망 -->
   <div class="member-details-header">
      <TitleA>비상연락망</TitleA>
   </div>
   <table class="member-table">
      <tr>
         <td class="prop">
            휴대폰
         </td>
         <td class="value">
            <input type="text">
         </td>
         <td class="prop">
            관계
         </td>
         <td class="value">
            <input type="text">
         </td>
      </tr>
   </table>

   <!-- 병역 -->
   <div class="member-details-header">
      <TitleA>병역</TitleA>
   </div>
   <table class="member-table">
      <tr>
         <td class="prop">
            병역구분
         </td>
         <td class="value">
            <input type="radio">
            <label class="radio-label">해당없음</label>
            <input type="radio">
            <label class="radio-label">Y</label>
            <input type="radio">
            <label class="radio-label">N</label>
         </td>
         <td class="prop">
            계급
         </td>
         <td class="value">
            <input type="text">
         </td>
      </tr>
      <tr>
         <td class="prop">
            복무기간
         </td>
         <td class="value">
            <input type="text">
         </td>
         <td class="prop">
            면제사유
         </td>
         <td class="value">
            <input type="text">
         </td>
      </tr>
      <tr>
         <td class="prop">
            보훈여부
         </td>
         <td class="value">
            <input type="radio">
            <label class="radio-label">Y</label>
            <input type="radio">
            <label class="radio-label">N</label>
         </td>
         <td class="prop">
            장애여부
         </td>
         <td class="value">
            <input type="radio">
            <label class="radio-label">Y</label>
            <input type="radio">
            <label class="radio-label">N</label>
         </td>
      </tr>
   </table>
</div>
</template>



<script>
import TitleA from '../components/titles/TitleA';
import ButtonB from '../components/buttons/ButtonB';

export default {
   name: 'Members',
   components: {
      TitleA,
      ButtonB
   }
}
</script>



<style scoped>
.member-base {

}
.member-base-header {
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-bottom: 5px;
}
.member-base-header-right > * {
   margin-left: 10px;
}
.member-table {
   display: table;
   width: 100%;
   border-collapse: collapse;
   border: var(--search-box-border);
   margin: 0 0 20px;
   table-layout: fixed;
}
.member-table td {
   height: 50px;
   border: var(--search-box-border);
   padding-left: 15px;
}
.picture {
   width: 150px;
}
.prop {
   width: 7%;
   background-color: var(--search-box-prop-background-color);
   color: var(--search-box-prop-color);
   font-size: var(--search-box-prop-font-size);
   font-weight: var(--search-box-prop-font-weight);
}
.value {
   width: 18%;
   background-color: var(--search-box-value-background-color);
   color: var(--search-box-prop-color);
   font-size: var(--search-box-value-font-size);
   font-weight: var(--search-box-value-font-weight);
}
.value > * {
   margin-right: 10px;
}
.none {
   display: none;
}
.radio-label {
   color: var(--search-box-value-color);
   font-size: var(--search-box-value-font-size);
}
.member-table input[type=text],
.member-table input[type=date],
.member-table input[type=number] {
   width: 12vw;
   height: var(--search-box-value-input-height);
   border: var(--search-box-input-border);
   color: var(--search-box-value-color);
   font-size: var(--search-box-value-font-size);
   font-weight: var(--search-box-value-font-weight);
   padding-left: 5px;
}
.member-table select {
   width: 12vw;
   height: var(--search-box-value-input-height);
   border: var(--search-box-input-border);
   color: var(--search-box-value-color);
   font-size: var(--search-box-value-font-size);
   font-weight: var(--search-box-value-font-weight);
   padding-left: 5px;
}
</style>
