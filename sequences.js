// repeat
//
// Repeats the argument indefinitely
function* repeat(value) {
  while (true) {
    yield value;
  }
}

// take
//
// Takes the first N values of a stream
function* take(amount, sequence) {
  let count = 0;
  for (const value of sequence) {
    if (count === amount) {
      break;
    }
    yield value;
    count++;
  }
}
