console.log('----LODASH.JS----');

//array method  -> join
console.log("-Example 1(array method):");
var join = _.join(['a', 'b', 'c'], '~');
console.log(join);

//lang method -> clone 
console.log("-Example 2(lang method):");
var objects = [{ 'a': 1 }, { 'b': 2 }];
 
var shallow = _.clone(objects);
console.log(shallow[0] === objects[0]);