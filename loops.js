function forLoop(array) {
  for (let i = 1; i < 25; i++) {
    if (i === 1)
    array.push("I am ${i} strange loop");
    else (i > 1)
    array.push("I am ${i} strange loops");
  }
   return array;
}

function whileLoop (n) {
  while (n > 0) {
    console.log(--n)
  }
  return 'done';
}


function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }
  do {
   return array.slice(0, array.length -1)
  } while (array.length > 0 || maybeTrue());
  return array;
}
