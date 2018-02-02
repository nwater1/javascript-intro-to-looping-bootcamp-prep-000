function forLoop(array) {
<<<<<<< HEAD
  for (let i = 0; i < 25; i++) {
    if(i == 1) {
      array.push("I am 1 strange loop.")
    } else {
      array.push(`I am ${i} strange loops.`)
    }
    
  } return array
=======
  for (let i = 0; i < 24 + array.length; i++) {
    if(i === 0) {
      array[i] = "I am 1 strange loop."
    } else {
      array[i] = "`I am ${i} strange loops.`"
    }
  }
  return array
>>>>>>> 9e0e31016f7af982adb19d50180bf70e6afe3d75
}

function whileLoop(number) {
  
  while (number > 0) {
    console.log(--number)
  }
  return 'done'
}

function doWhileLoop(array) {
    function maybeTrue() {
    return Math.random() >= 0.5
  }
  do {
    delete array[--array.length]
  } while (maybeTrue() && array.length >= 0)
  return array
}

