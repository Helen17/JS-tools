console.log("----LODASH.JS----"),console.log("-Example 1(array method):");var join=_.join(["a","b","c"],"~");console.log(join),console.log("-Example 2(lang method):");var objects=[{a:1},{b:2}],shallow=_.clone(objects);console.log(shallow[0]===objects[0]);