function rangeOfNumbers(startNum, endNum) {
    if(startNum==endNum ){
        return [endNum];
    }else{
        const countArray = rangeOfNumbers(startNum, endNum-1);
        countArray.push(endNum);
        return countArray;
    }
  };

console.log(rangeOfNumbers(1,5));

