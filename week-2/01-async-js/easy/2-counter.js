let count = 0;

function f() {
  console.log(++count);
  setTimeout(f,1000);
}

f();