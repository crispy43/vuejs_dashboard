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
   depositedAt: {
      name: '입금시간',
      filter: 'date/yMDHMS',
      width: 125
   },
   bank: {
      name: '은행',
      width: 100
   },
   bankAccount: {
      name: '계좌번호',
      width: 150
   },
   contractor: {
      name: '계약자',
      width: 100
   },
   amount: {
      name: '금액',
      filter: 'comma',
      width: 150
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
