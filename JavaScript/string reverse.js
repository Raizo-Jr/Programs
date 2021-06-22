// Method - 1 (Decrementing for-loop with concatenation)
function reverse(s) {
  let result = '';

  for (let i = s.length - 1; i >= 0; i--) {
    result = result + s[i];
  }

  return result;
}

const reversed = reverse('JavaScript');
console.log(reversed);

// Method - 2 (Incrementing/decrementing for-loop with two arrays)
function reverse(s) {
  let result = [];

  for (let i = s.length - 1, j = 0; i >= 0; i--, j++) {
    result[j] = s[i];
  }

  return result.join('');
}

const reversed = reverse('abcd');
console.log(reversed);

// Method - 3 (Incrementing for-loop with array pushing and charAt)
function reverse(s) {
  const result = [];

  for (let i = 0, len = s.length; i <= len; i++) {
    result.push(s.charAt(len - i));
  }

  return result.join('');
}

const reversed = reverse('abcd');
console.log(reversed);

// Method - 4 ( In-built functions)
function reverse(s) {
  return s.split('').reverse().join('');
}
const reversed = reverse('abcd');
console.log(reversed);

// Method - 5 (Decrementing while-loop with concatenation and substring)
function reverse(s) {
  let i = s.length;
  result = '';

  while (i > 0) {
    result = result + s.substring(i - 1, i);
    i--;
  }

  return result;
}

const reversed = reverse('abcd');
console.log(reversed);

// Method - 6 (Single for-loop declaration with concatenation)
function reverse(s) {
  for (var i = s.length - 1, result = ''; i >= 0; result = result + s[i--]) {}
  return result;
}
const reversed = reverse('abcd');
console.log(reversed);

// Method - 7 (Recursion with substring and charAt)
function reverse(s) {
  return s === '' ? '' : reverse(s.substr(1)) + s.charAt(0);
}
const reversed = reverse('abcd');
console.log(reversed);

// Method - 8 (Internal function recursion)
function reverse(s) {
  function reverse2(s, len, result) {
    return len === 0 ? result : reverse2(s, --len, (result = result + s[len]));
  }
  return reverse2(s, s.length, '');
}

const reversed = reverse('abcd');
console.log(reversed);

// Method - 9 (Half-index switch for-loop)
function reverse(s) {
  s = s.split('');
  var len = s.length,
    halfIndex = Math.floor(len / 2) - 1,
    tmp;
  for (var i = 0; i <= halfIndex; i++) {
    tmp = s[len - i - 1];
    s[len - i - 1] = s[i];
    s[i] = tmp;
  }
  return s.join('');
}

const reversed = reverse('abcd');
console.log(reversed);

// Method - 10 (Half-index switch for-loop)
function reverse(s) {
  if (s.length < 2) return s;
  var halfIndex = Math.ceil(s.length / 2);
  return reverse(s.substr(halfIndex)) + reverse(s.substr(0, halfIndex));
}
const reversed = reverse('abcd');
console.log(reversed);
