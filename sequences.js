// repeat
//
// Repeats the argument indefinitely
function* repeat(value) {
  while (true) {
    yield value;
  }
}
