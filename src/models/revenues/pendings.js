export default {
   checked: {
      name: '체크',
      tag: 'input',
      type: 'checkbox',
      width: 50
   },
   key: {
      name: '코드',
      width: 100
   },
   contractor: {
      name: '계약자',
      width: 100
   },
   amount: {
      name: '금액',
      align: 'right',
      filter: 'comma',
      width: 125
   },
   bank: {
      name: '은행',
      width: 100
   },
   bankAccount: {
      name: '계좌번호',
      width: 175
   },
   status: {
      name: '상태',
      width: 75
   },
   remark: {
      name: '비고',
      tag: 'input',
      type: 'text',
      width: 125
   },
   createdAt: {
      name: '등록일자',
      filter: 'date/yMD',
      width: 75
   },
   updatedAt: {
      name: '처리일자',
      filter: 'date/yMDHM',
      width: 100
   }
};
