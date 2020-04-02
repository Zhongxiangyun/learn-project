// import flattenDeep from 'lodash/flattenDeep';
// var flatMapDeep = require ('lodash/flatMapDeep');
const data = [
  {
    id: 'f2b0fccffc9443468393305f98eb9173',
    name: '生活|服务业',
    parent_id: '0',
    is_top: '0',
    children: [
      {
        id: 'eba6123156be4e9685ab64b85bdea4ab',
        name: '餐饮',
        parent_id: 'f2b0fccffc9443468393305f98eb9173',
        is_top: '0',
      },
      {
        id: '6a8c69339d964593b1092013c71860d5',
        name: '美容',
        parent_id: 'f2b0fccffc9443468393305f98eb9173',
        is_top: '0',
      },
    ],
  },
  {
    id: '668ee018c9c4445da78553c42882a9ed',
    name: '人力|行政',
    parent_id: '0',
    is_top: '1',
    children: [
      {
        id: 'a0ed8057693642c18429199a891b7906',
        name: '保洁',
        parent_id: '668ee018c9c4445da78553c42882a9ed',
        is_top: '0',
      },
      {
        id: 'ef6c06efd7734d668764cfa5627a015b',
        name: '猎头',
        parent_id: '668ee018c9c4445da78553c42882a9ed',
        is_top: '0',
      },
    ],
  },
  {
    id: '688c5e2d3b8e4048a0ff42b9eeb7bee7',
    name: '公务机关',
    parent_id: '0',
    is_top: '0',
    children: [
      {
        id: 'c67282dc46534773ad788f1f0c7dc75e',
        name: '老司机',
        parent_id: '688c5e2d3b8e4048a0ff42b9eeb7bee7',
        is_top: '0',
      },
      {
        id: '456a8316d39140b9b344ecd4b7f7c51d',
        name: 'laosiji22',
        parent_id: '688c5e2d3b8e4048a0ff42b9eeb7bee7',
        is_top: '0',
        children: [
          {
            id: '9be27bef5ea64ce89c608d8e8ac99b34',
            name: '车神争霸111',
            parent_id: '456a8316d39140b9b344ecd4b7f7c51d',
            is_top: '0',
          },
          {
            id: '3b3fd7176bda4b12be7070cefc580ee9',
            name: '车身一i',
            parent_id: '456a8316d39140b9b344ecd4b7f7c51d',
            is_top: '0',
          },
        ],
      },
    ],
  },
  {
    id: '2387e42555604b9ca974fcf4d364f85f',
    name: '技术|IC',
    parent_id: '0',
    is_top: '0',
  },
];
let res = [];
function findParent (target, arr) {
  //   console.log (target, arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === target) {
      console.log (arr[i]);
      //   res.push[arr[i]]
      return arr[i];
    } else {
      arr[i].children && findParent (target, arr[i].children);
    }
  }
}
// const v1 = findParent ('3b3fd7176bda4b12be7070cefc580ee9', data);
// console.log (v1);

// console.log (data.flat(Infinity));
// function getParent (data2, nodeId2) {
//   var arrRes = [];
//   if (data2.length == 0) {
//     if (!!nodeId2) {
//       arrRes.unshift (nodeId2);
//     }
//     return arrRes;
//   }
//   let rev = (data, nodeId) => {
//     for (var i = 0, length = data.length; i < length; i++) {
//       let node = data[i];
//       if (node.value == nodeId) {
//         arrRes.unshift (nodeId);
//         rev (data2, node.City);
//         break;
//       } else {
//         if (!!node.children) {
//           rev (node.children, nodeId);
//         }
//       }
//     }
//     return arrRes;
//   };
//   arrRes = rev (data2, nodeId2);
//   return arrRes;
// }

// function buildParentList (arr) {
//   arr.forEach (g => {
//     if (g.parentId != '0') {
//       let pid = g['parent_id'];
//       let oid = g['id'];
//       parentList[oid] = pid;
//     }
//     if (g.children != undefined) buildParentList (g['children']);
//   });
// }
// function findParent (idx) {
//   if (parentList[idx] != undefined) {
//     let pid = parentList[idx];
//     console.log (pid);
//     findParent (pid);
//   }
// }

// buildParentList (data);
// findParent (3); // 0 1 2
// findParent (2); // 0 1
// findParent ('3b3fd7176bda4b12be7070cefc580ee9'); // undefined
function getParents (data, id) {
  for (let i in data) {
    if (data[i].id === id) {
      return [];
    }
    if (data[i].children) {
      let ro = getParents (data[i].children, id);
      if (ro !== undefined) return ro.concat (data[i].id).reverse ();
    }
  }
}
// console.log ('4444', ro);
console.log (getParents (data, '3b3fd7176bda4b12be7070cefc580ee9'));
console.log (getParents (data, '2387e42555604b9ca974fcf4d364f85f'));
