console.log("----MOMENT.JS----");

console.log("-Example 2(time from now):");
console.log(moment([2007, 0, 29]).fromNow()+' from 2007');


var NowMoment = moment();
var eDisplayMoment = document.getElementById('example-1');
eDisplayMoment.innerHTML = NowMoment.format('YYYY-MM-DD');


