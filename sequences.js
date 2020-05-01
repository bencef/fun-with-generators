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

// repeatedly
//
// Repeatedly evaluate the logic and yield the result.
function* repeatedly(logic) {
  while (true) {
    yield logic();
  }
}

// iterate
//
// repeatedly call the logic with the last result.
function* iterate(initial, transform) {
  let value = initial;
  while (true) {
    yield value;
    value = transform(value);
  }
}

// Array.from(take(5, iterate(1, n => n + 1)))
// Array.from(take(5, iterate(1, n => n * 2)))
