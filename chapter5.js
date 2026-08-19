(function() {
    // function
    // function k sath ()      reduce redundancy

    function myFunction() {
        console.log("hello");
    }
    myFunction();

    function sum(a, b) {
        console.log(a + b);
    }

    sum(1, 2);

    const arrowsum = (a, b) => {
        console.log(a * b);
    };

    arrowsum(2, 3);


    //    PRACTICE QUESTION  // => FIND NUMBER OF VOWEL IN STRING

    function vowelfind(s) {
        let vowel = 0;

        for (let b = 0; b < s.length; b++) {
            if (
                s[b] == "a" ||
                s[b] == "e" ||
                s[b] == "i" ||
                s[b] == "o" ||
                s[b] == "u"
            ) {
                vowel++;
            }
        }

        return vowel;
    }

    let ans = vowelfind("yashyadav");
    console.log(ans);


    //  for each loop in array
    //  forEach() does not return a new array. It is used for performing an action (like printing).

    let arr = [1, 2, 3, 4, 5];

    arr.forEach((val, idx, arr) => {
        console.log(val, idx, arr);
    });


    //  higher order function
    //  dusra function ko as a parameter ya kisi function ko call kra

    //    PRACTICE QUESTION
    //    PRINT SQUARE OF ALL NUMBER IN ARR USING FOR EACH

    arr.forEach((val) => {
        console.log(val * val);
    });


    /*
    some more

    1) map same as for each (create new array)

    2) filter
       make new array for the element that satisfy the condition

    3) reduce
       bohot sara input but answer 1
    */

    let newarr = arr.filter((val) => {
        return val % 2 === 0;
    });

    console.log("even number", newarr);


    let total = arr.reduce((prev, curr) => {
        return prev + curr;
    }, 0);

    console.log(total);


    //  practice
    //  filter the marks which are greater than 90

    let marks = [90, 97, 76, 34];

    let toppers = marks.filter((val) => {
        return val > 90;
    });

    console.log(toppers);


    //  practice
    //  find factorial

    let n = Number(prompt("Enter a number"));

    let arr3 = [];

    for (let b = 1; b <= n; b++) {
        arr3[b - 1] = b;
    }

    let factorial = arr3.reduce((res, curr) => {
        return res * curr;
    }, 1);

    console.log(factorial);
})();