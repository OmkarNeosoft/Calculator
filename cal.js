function clearScreen() {
    document.getElementById("result").value = "";
  }
  function number(value) {
    let res = document.getElementById("result");

    res.value += value;
  }