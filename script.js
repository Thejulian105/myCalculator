const display = document.getElementById("display");

    function appendValue(val) {
      display.value += val;
    }

    function clearDisplay() {
      display.value = "";
    }

    function calculate() {
       try {
      // Safer alternative to eval
      display.value = new Function('return ' + display.value)();
    } catch {
      display.value = "Error";
    }
    }