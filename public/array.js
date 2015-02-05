/*
  This function should accept a number as a parameter.
  It should return the value of the number times 2.
*/
var doubler = function(number) {

  return number * 2

}

/*
  This function should accept an array of numbers as a parameter.
  It should return an array, with each number in the array being doubled.
*/
var arrayDoubler = function(array) {

  var counter = 0;
  var doubledValues = [];

  while (counter < array.length) {
    doubledValues.push(doubler(array[counter]))

    counter++;
  }

  return doubledValues
}

/*
  This function should accept two numbers as parameters.
  It should return the first number, divided by the second number.
*/
var divide = function(numerator, denominator) {

  return numerator / denominator;
  }


/*
  This function should accept two parameters: an array of numbers, and another number.
  It should return an array, with each member of the array being divided by the parameter number.
*/
var arrayDivide = function(array, denominator) {

  var counter = 0;
  var dividedValues = [];

  while (counter < array.length) {

    dividedValues.push(divide(array[counter], denominator))

    counter++;
    
  }
  
  return dividedValues
}

/*
  This function should accept two numbers as parameters.
  It should return the sum of the two numbers.
*/
var sum = function(a, b) {

  return a + b
}

/*
  This function should accept an array as a parameter.
  It should return the sum of all the members in the array.
*/
var arraySum = function(steve) {

  counter = 0;
  summedValues = 0;

  while (counter < steve.length) {

    summedValues = sum(steve[counter], summedValues)

    counter++;
  }

  return summedValues
}

/*
  This function should accept two numbers as parameters.
  It should return the lower of the two numbers.
*/
var minimum = function(a, b) {

  if (a < b) {
    return a;
  }

  else {
    return b;
   } 
}

/*
  This function should accept an array as a parameter.
  It should return the lowest value in the array.
  If the array has a length = 0, it should return undefined.
*/
var arrayMinimum = function(array) {

  if (array.length === 0) {

    return undefined;

  }

  var counter = 0
  var lowestValue = array[0]

  while (counter < array.length) {

    lowestValue = minimum(array[counter], lowestValue)
    counter++;
  }

  return lowestValue

}



/*
  This function should accept a string as a parameter.
  It should return true if the string ends with a period.
  Otherwise, it should return false.
*/

var endsInPeriod = function(string) {

  if (string[string.length -1] === ".") {

    return true;
  }

  return false
}
  


/*
  This function should accept an array of strings as a parameter.
  It should return an array, consisting of only the strings 
    from the original array which end with a period.
*/
var arrayEndsInPeriod = function(array) {

  var result = []

  for (var i = 0; i < array.length; i++) {

    if (endsInPeriod(array[i])) {

      result.push(array[i])
    }
  }

  return result
}


/*
  This function should accept a number as a parameter.
  It should return true if the number is a multiple of 3.
  Otherwise, it should return false.
*/
var multiple3 = function(number) {

  if (number % 3 === 0) {

  return true;
  }

  return false;

}

/*
  This function should accept an array of numbers as a paramter.
  It should return an array, consisting of only the numbers
    from the original array which are multiples of 3.
*/
var arrayMultiple3 = function(array) {

  var result = []

  for (var i = 0; i < array.length; i++) {

    if (multiple3(array[i])) {

      result.push(array[i])
    }
  
  }
  
  return result
}





