document.addEventListener('DOMContentLoaded', function () {
  const textBox1 = document.getElementById("usuario");
  const textBox2 = document.getElementById("pass");
  const button = document.getElementById("submit");
  let data = [];

  button.addEventListener("click", function () {
    data.push(textBox1.value);
    data.push(textBox2.value);
    console.log(data);
  });
});




