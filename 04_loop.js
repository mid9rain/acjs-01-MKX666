// 定義一個變數叫 numbers，是 5 ~ 15 的奇數陣列
let numbers = [], count = 0;
	for(i = 0; i <= 15; i++){
		if(i % 2 == 1 && 5 <= i && i <= 15){
			numbers[count] = i;
      count++;
		}
	}


// 這個函式接收一個陣列，回傳一個將原陣列中每個數字加 1 的陣列
function eachAddOne(list) {
  // write your code here
	let result = [];
	for(let i = 0; i < list.length; i++){
	  result[i] = list[i] + 1;
	}
	return result;
}

// 這個函式接收一個陣列，回傳一個只包含原陣列中偶數部份的陣列
function onlyEven(list) {
  // write your code here
  let result = [], count = 0;
  for(let i = 0; i < list.length; i++){
  	if(list[i] % 2 == 0){
	  	result[count] = list[i];
      count++;
  	}
  }
  return result;
}

module.exports = {numbers, eachAddOne, onlyEven}
