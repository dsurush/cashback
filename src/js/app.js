// ctrl + ` - open terminal
//npm init -  иниициировать проект . создается package json
//npm start - запускает live server 

const regularPurchases = 2000000000;
// 0.01 - magic value (magic constant, hardcoded)
const regularPurchasesPercent = 0.01;
let cashback = regularPurchases * regularPurchasesPercent;

const cashbackLimit = 3000;
if(cashback > cashbackLimit){
    cashback = cashbackLimit;
}
console.log(cashback);
// gist