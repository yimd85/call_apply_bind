
/*
****************************************
CALL method
****************************************
*/

let name1 = {
    firstName: 'David',
    lastName: 'Yim',
    printFullName: function () {
        console.log(this.firstName + " " + this.lastName);
    }
}

name1.printFullName(); // David Yim

let name2 = {
    firstName: 'Olivia',
    lastName: 'Yim',
    /*
    we can copy the printFull name into this one.
    we can also use call method using something called function borrowing
    */
}

// function borrowing
name1.printFullName.call(name2); // Olivia Yim


/*
generally we do not keep our methods inside object. 
we take them out and keep it ouside like below
*/

let printFullName = function () {
    console.log(this.firstName + " " + this.lastName);
}

let name3 = {
    firstName: 'Colin',
    lastName: 'Yim',
}

//inside of name.printFullName, we can just use printFullName using name2 and name3
printFullName.call(name2); // Olivia Yim
printFullName.call(name3); // Colin Yim

/*
what if we had more parameters in the printFullName function.
*/

let printFullNameTwo = function (hometown) {
    console.log(this.firstName + " " + this.lastName + " from " + hometown);
}
// the first argument will be the reference to the 'this' variable
// the later arguments will be the reference to the parameters
printFullNameTwo.call(name2, 'busan'); // Olivia Yim
printFullNameTwo.call(name3, 'elmhurst'); // Colin Yim

/*
suppose we had more than 1 parameter
*/

let printFullNameThree = function (hometown, state) {
    console.log(this.firstName + " " + this.lastName + " from " + hometown + ", " + state);
}
// the first argument will be the reference to the 'this' variable
// the later arguments will be the reference to the parameters
printFullNameThree.call(name2, 'busan', 'korea'); // Olivia Yim from busan, korea
printFullNameThree.call(name3, 'elmhurst', 'ny'); // Colin Yim from elmhurst, ny

/*
****************************************
APPLY method
the only difference between the call and apply method, is how we pass in the arguments
we use an array instead of seperating out each with a comma. 
Call uses commans. Apply uses arrays
****************************************
*/

printFullNameThree.apply(name2, ['busan', 'korea']); // Olivia Yim from busan, korea 
printFullNameThree.apply(name3, ['elmhurst', 'ny']); // Colin Yim from elmhurst, ny


/*
****************************************
BIND method
instead of calling the method like the call method. the bind method copies the method and returns it
****************************************
*/

let printMyName = printFullNameThree.bind(name3, 'elmhurst', 'ny'); // Colin Yim from elmhurst, ny
printMyName();