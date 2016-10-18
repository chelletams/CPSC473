/* jshint browser: true, jquery: true, camelcase: true, indent: 2, undef: true, quotmark: single, maxlen: 80, trailing: true, curly: true, eqeqeq: true, forin: true, immed: true, latedef: true, newcap: true, nonew: true, unused: true, strict: true */

var arr = {};

//Example #1
arr.average = function (nums) {
   'use strict';
    var sum = 0, 
        avgSoFar = 0;

    nums.forEach(function (value) {
        sum = sum + value;
        avgSoFar = sum / nums.length;
    });
    return avgSoFar;
};

//Example #2
arr.largest = function (nums) {
   'use strict';
    var largestNumber = nums[0];

    nums.forEach(function (value) {
        if (largestNumber < value) {
            largestNumber = value;
        }
    });
    return largestNumber;
};

//Example #3
arr.someEven = function (nums) {
   'use strict';
    var isEven = false;

    nums.some(function (value) {
        if (value % 2 === 0) {
            isEven = true;
        }
    });
    return isEven;
};

//Example #4
arr.allEven = function (nums) {
   'use strict';
    var isEven = false;

    nums.every(function (value) {
        if (value % 2 === 0) {
            isEven = true;
        }
    });        
    return isEven;
};

//Example #5
arr.arrayContains = function (myArray, item) {
   'use strict';
    var result = false;

    myArray.forEach(function (value) {
        if (value === item) {
             result = true;
        }
    });    
    return result;
};

//Example #6a
arr.arrayContainsTwo = function (myArray, item) {
   'use strict';
    var result = false,
        count = 0;

    for (var i = 0; i < myArray.length; i++) {
         if (myArray[i] === item) {
             count++;
         }
    }
    if (count >= 2) {
        result = true;
    }
    return result;
};

//Example #6b
arr.arrayContainsNTimes = function (myArray, item, n) {
  'use strict';
    var result = false,
        count = 0;

    myArray.forEach(function (value) {
        if (value === item) {
            count++;
        }
    });
    if (count >= n) {
        result = true;
    }
    return result;
};

module.exports = arr;