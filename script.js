const primeiraMoeda = document.getElementById("moedaUm");
const segundaMoeda = document.getElementById("moedaDois");
const primeiraQuantidade = document.getElementById("primeiraQuantia");
const segundaQuantidade = document.getElementById("segundaQuantia");

const ratePrimeiraMoeda = document.getElementById("rate");
const troca = document.getElementById("troca");

function calcular() {
  const moedaUm = primeiraMoeda.value;
  const moedaDois = segundaMoeda.value;

  fetch(
    `https://v6.exchangerate-api.com/v6/e1e185b71b9b11d6a3035aec/latest/${moedaUm}`
  )
    .then((res) => res.json())
    .then((data) => {
      const rate = data.conversion_rates[moedaDois];
      ratePrimeiraMoeda.innerText = `1 ${moedaUm} = ${rate} ${moedaDois}`;

      segundaQuantidade.value = (primeiraQuantidade.value * rate).toFixed(2);
      console.log(calcular);
    });
}

primeiraMoeda.addEventListener("change", calcular);
primeiraQuantidade.addEventListener("input", calcular);
segundaMoeda.addEventListener("change", calcular);
segundaQuantidade.addEventListener("input", calcular);
troca.addEventListener("click", () => {
  const temp = primeiraMoeda.value;
  primeiraMoeda.value = segundaMoeda.value;
  segundaMoeda.value = temp;
  calcular();
});

calcular();
