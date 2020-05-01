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

// map
//
// Map a transform over all elements of a sequence.
function* map(transform, sequence) {
  for (const value of sequence) {
    yield transform(value);
  }
}
// const positives = iterate(1, n => n+1);
// const squares = map(n => n*n, positives);
// Array.from(take(10, squares))

// filter
//
// Yields only values matching a predicate.
function* filter(predicate, sequence) {
  for(const value of sequence) {
    if (predicate(value)) {
      yield value;
    }
  }
}

// Array.from(take(10, filter(odd, iterate(1, n => n+1))))

// true, false, true, false...
// [true, false], [true, false]...

// concatenate
//
// Concatenates the values in the sequence
function* concatenate(sequence) {
  for(const coll of sequence) {
    yield* coll;
  }
}

// Array.from(take(4, concatenate(repeat([true, false]))))
