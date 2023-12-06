const show_btn = document.querySelector("i");
let input_icon = document.querySelector(".input i");
let pass = document.querySelector("input");

show_btn.addEventListener("click", () => {
  if (pass.type == "password") {
    pass.type = "text";
    input_icon.classList.toggle("fa-eye");
  } else {
    input_icon.classList.toggle("fa-eye");
    pass.type = "password";
  }
});
