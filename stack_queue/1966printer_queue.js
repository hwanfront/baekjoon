// 프린터 큐
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let re = null; // 반복
let doc = []; // 0 : 문서 개수 N, 1 : 몇번째 M
let imp = [];
let output = '';
let isTest = false;
let isDoc = false;

rl.on("line", function(c) {
  if (!isTest) {
    re = parseInt(c);
    isTest = !isTest;
  } 
  else {
    if(!isDoc) {
      doc = c.split(' ').map((e) => parseInt(e));
      isDoc = !isDoc;
    }
    else {
      imp = c.split(' ').map((e) => parseInt(e));
      let docArr = setDocArr(imp);
      let maxImp = maxImportance(docArr);
      let res = 1;
      while(1) {
        if (docArr[0][1] == maxImp && docArr[0][0] == doc[1]) {
          output = output + res + '\n';
          break;
        }
        else if (docArr[0][1] == maxImp) {
          docArr.shift();
          maxImp = maxImportance(docArr);
          res++;
        }
        else {
          docArr.push(docArr.shift());
        }
      }

      isDoc = !isDoc;
      re--;
    }
    
    if (re == 0) {
      rl.close();
    }
  }
}).on("close", function() {
  console.log(output);
  process.exit();
});

function setDocArr (arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push([i,arr[i]]);
  }
  return res;
}

function maxImportance (arr) {
  let max = arr[0][1];
  for (let i = 1; i < arr.length; i++) {
    if(max < arr[i][1]) {
      max = arr[i][1];
    }
  }
  return max;
}



const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let testcase = null;
let M = -1;
let output = '';

rl.on("line", function(c) {
  if (!testcase) { // 반복 횟수 입력
    testcase = parseInt(c);
  } 
  else {  // 반복 입력
    if(M === -1) {
      let doc = c.split(' ');
      M = parseInt(c.split(' ')[1]);
    }
    else {
      let imp = c.split(' ').map((e) => parseInt(e));
      let docArr = setDocArr(imp);
      let maxImp = maxImportance(docArr);
      let res = 1;

      while(1) {
        if (docArr[0][1] == maxImp && docArr[0][0] == M) {
          output = output + res + '\n';
          break;
        }
        else if (docArr[0][1] == maxImp) {
          docArr.shift();
          maxImp = maxImportance(docArr);
          res++;
        }
        else {
          docArr.push(docArr.shift());
        }
      }

      M = -1;
      testcase--;
    }
    
    if (testcase == 0) {
      rl.close();
    }
  }
}).on("close", function() {
  console.log(output);
  process.exit();
});

function setDocArr (arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push([i,arr[i]]);
  }
  return res;
}

function maxImportance (arr) {
  let max = arr[0][1];
  for (let i = 1; i < arr.length; i++) {
    if(max < arr[i][1]) {
      max = arr[i][1];
    }
  }
  return max;
}
