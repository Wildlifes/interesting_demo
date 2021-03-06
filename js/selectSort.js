// 在无序区中选出最小的元素，然后将它和无序区的第一个元素交换位置。
function selectSort(arr) {
  length = arr.length;
  for (var i = 0; i < length; i++) {
    // 循环数组
    var _min = arr[i]; // 把每一次的 数组里面的数字记录下来
    var k = i; // 记录下来索引
    for (var j = i + 1; j < length; j++) {
      // 当前的数字与后一个数字相比较
      if (_min > arr[j]) {
        //当前的数 大于 后面一个数的话
        _min = arr[j]; //  就讲后面 的数值 保存下来
        k = j; /// 保存索引
      }
    }
    arr[k] = arr[i]; // 进行交换位置
    arr[i] = _min;
  }
  return arr;
}

var arr = [2, 3, 6, 4, 2, 1, 90, 100, 20, 5];
console.log(selectSort(arr)); // [1, 2, 2, 3, 4, 5, 6, 20, 90, 100]
