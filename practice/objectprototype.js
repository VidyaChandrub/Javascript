var arrayList = [1 , 2, 3];

//Array.isArray(arrayList);
if(Object.prototype.toString.call(arrayList) === '[object Array]') {
    console.log('Array!');
  }