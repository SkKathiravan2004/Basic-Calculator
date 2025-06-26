// const display = document.getElementById("display");
// let input = '';

// const buttons = document.querySelectorAll(".btn");

// buttons.forEach(button => {
//   button.addEventListener("click", () => {
//     const value = button.getAttribute("data-value");

//     if (value === "C") {
//       input = '';
//       display.textContent = '0';
//       return;
//     }

//     if (value === "⌫") {
//       input = input.slice(0, -1);
//       display.textContent = input || '0';
//       return;
//     }

//     if (value === "=") {
//       try {
//         const sanitized = input.replace(/×/g, '*').replace(/÷/g, '/');
//         const result = eval(sanitized);

//         if (!isFinite(result)) {
//           display.textContent = "Error";
//           input = '';
//         } else {
//           display.textContent = result;
//           input = result.toString();
//         }
//       } catch {
//         display.textContent = "Error";
//         input = '';
//       }
//       return;
//     }

//     if (value === '%') {
//       try {
//         input = (eval(input) / 100).toString();
//         display.textContent = input;
//       } catch {
//         display.textContent = "Error";
//         input = '';
//       }
//       return;
//     }

//     input += value;
//     display.textContent = input;
//   });
// });


const display = document.getElementById("display");
const themeToggle = document.getElementById("themeToggle");
let input = '';

document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value === "C") {
      input = '';
      display.textContent = '0';
      return;
    }

    if (value === "⌫") {
      input = input.slice(0, -1);
      display.textContent = input || '0';
      return;
    }

    if (value === "=") {
      try {
        const sanitized = input.replace(/×/g, '*').replace(/÷/g, '/');
        const result = eval(sanitized);
        if (!isFinite(result)) {
          display.textContent = "Error";
          input = '';
        } else {
          display.textContent = result;
          input = result.toString();
        }
      } catch {
        display.textContent = "Error";
        input = '';
      }
      return;
    }

    if (value === '%') {
      try {
        input = (eval(input) / 100).toString();
        display.textContent = input;
      } catch {
        display.textContent = "Error";
        input = '';
      }
      return;
    }

    input += value;
    display.textContent = input;
  });
});

// Dark/Light mode toggle
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  document.body.classList.toggle("dark-mode");
});

