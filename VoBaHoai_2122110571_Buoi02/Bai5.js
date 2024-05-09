const arrNumber = [9,3,5,8,1,4,3,2];
const arrStr = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
//- thêm số 10 vào đầu và cuối
arrNumber.unshift(10);
arrNumber.push(10);
console.log(arrNumber);
//- xóa số đầu và cuối
arrNumber.shift();
arrNumber.pop();
console.log(arrNumber);
//- Sắp xếp tăng dần mảng arrNumber và arrStr 
arrNumber.sort((a, b) => a - b);
arrStr.sort();
console.log(arrNumber);
console.log(arrStr);
//-	Lấy ra mảng con từ vị trị 3 đến 5 từ mảng arrNumber
console.log(subArray);
// -	Xóa 1 phần tử tại vị trí 3 và thêm 3 phần tử bất kỳ trong mảng arrNumber (plice)
arrNumber.splice(3, 1, 10, 20, 30);
console.log(arrNumber)
// -	Tìm vị trí đầu tiên phần tử có giá trị 3 trong mảng arrNumber (indexOf)
const index = arrNumber.indexOf(3);
console.log(index);
// -	Tìm vị trí cuối cùng phần tử có giá trị 3 trong mảng arrNumber (lastIndexOf)
const lastIndex = arrNumber.lastIndexOf(3);
console.log(lastIndex);
// -	Kiểm tra phân tử có gía trị 3 có trong mảng arrNumber không (includes)
const hasThree = arrNumber.includes(3);
console.log(hasThree);
// -	Duyệt mảng forEach
arrNumber.forEach((element, index) => {
  console.log(`Element at index ${index}: ${element}`);
});
// -	Duyệt mảng map
const doubleArray = arrNumber.map((element) => element * 2);
console.log(doubleArray);
// -	Lọc những phần tử có giá trị lớn hơn 5 trong mảng arrNumber (filter)
const greaterThanFive = arrNumber.filter((element) => element > 5);
console.log(greaterThanFive);
// -	Tính tổng các phần tử mảng arrNumber (reduce)
const sum = arrNumber.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);
// -	Nối 2 mảng arrNumber và arrStr lại thành 1 mảng (concat)
const combinedArray = arrNumber.concat(arrStr);
console.log(combinedArray);
// -	Nối các phần tử mảng arrStr các nhau bởi dấu "-" (join)
const joinedString = arrStr.join("-");
console.log(joinedString);
// -	Gán tất cả các phần tử mảng arrNumber bằng 0 (fill)
arrNumber.fill(0);
console.log(arrNumber);
// -	Sao chép một hoặc nhóm phần tử từ vị trí này sang vị trí khác cùng mảng (copyWithin)
arrNumber.copyWithin(3, 0);
console.log(arrNumber);
// -	Tìm kiếm phần tử trong mảng thõa mãn điều kiện
///// o	find, findIndex, 
///// o	findLast, findLastIndex
const foundNumber = arrNumber.find((element) => element > 5);
console.log(foundNumber);
const foundIndex = arrNumber.findIndex((element) => element > 5);
console.log(foundIndex);
const findNumber = arrNumber.findLast((element) => element > 5);
console.log(findNumber);
const findIndex = arrNumber.findLastIndex((element) => element > 5);
console.log(findIndex);

// -	Kiểm tra tất cả các phần tử thõa mãn điều kiện (every)
const allGreaterThanZero = arrNumber.every((element) => element > 0);
console.log(allGreaterThanZero);
// -	Kiểm tra ít nhất một phần tử thõa mãn điều kiện (some)
const hasEvenNumber = arrNumber.some((element) => element % 2 === 0);
console.log(hasEvenNumber);
