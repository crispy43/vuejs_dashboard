<template>
<table class="pagenation-a">
    <tr>
        <td>
            <p class="page">&Lt;</p>
        </td>
        <td
            v-for="(pageNum, index) in pages"
            :key="index"
        >
            <p
                :class="pageNum.isCurrentPage ? 'current-page' : 'page'"
            >{{ pageNum.number }}</p>
        </td>
        <td>
            <p class="page">&Gt;</p>
        </td>
    </tr>
</table>
</template>



<script>
export default {
    name: 'PagenationA',
    props: {
        pages: Array,
        minPage: Object,
        maxPage: Object
    }
}
</script>



<style scoped>
.pagenation-a {
    display: table;
    border-collapse: collapse;
    border: 1px solid rgb(229 232 235);
    -ms-user-select: none; 
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
}
.pagenation-a td {
    width: 30px;
    height: 30px;
    cursor: pointer;
    border: 1px solid rgb(229 232 235);
}
.pagenation-a td > p {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-weight: 700;
}
.current-page {
    font-size: 13px;
    font-weight: 700;
    color: white;
    background-color: rgb(110 180 255);
}
.page {
    color: rgb(110 180 255);
}
.page:hover {
    color: white;
    background-color: rgb(110 180 255);
}
</style>
