let n = 10;
let string = "";
for (let i = 0; i <= n; i++) {
  for (let k = 1; k <= n - i; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);