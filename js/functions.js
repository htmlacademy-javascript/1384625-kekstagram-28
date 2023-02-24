// первая задача
function isLessOrEqual (string, length) {
  return (string.length <= length) ? 'true' : 'false';
}
isLessOrEqual ('Карточка', 10);

// вторая задача
function isPalindrome (string) {
  const tempString = string
  .toLowerCase ()
  .replaceAll (' ', '');

  let reverseString = '';
  for (let i = tempString.length - 1; i >= 0; i--) {
    reverseString += tempString.at(i);
  }
  return tempString === reverseString;
}

// третья задача

function extractNumber (string) {

  let result = '';
  for (let  i= 0; i < string.length; i++) {
   if (!Number.isNaN(parseInt(string[i], 10))) {
    result += string[i];
  }
   }
   return parseInt(result, 10);

}

// четвертая задача

function myPadStart (string, minLength, pad) {
  const actualPad = minLength - string.length;
  if (actualPad <= 0) {
      return string;
  }
  return pad.slice (0, actualPad %  pad. length) + pad.repeat (actualPad / pad.length) + string;


}
