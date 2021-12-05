const fromRates = document.getElementsByName("From")[0];
fromRates.addEventListener("change", InputText)
const toRates = document.getElementsByName("To")[0];
toRates.addEventListener("change", InputText)
const fromInput = document.getElementById("fromInput")
fromInput.addEventListener("input", InputText);
const toInput = document.getElementById("toInput")

function InputText(e) {
    GetRates()
        .then(result => fromInput.value * (result.rates[toRates.value] / result.rates[fromRates.value]))
        .then(result => toInput.value = result)
        
}

async function GetRates() {
    const response = await fetch("http://api.exchangeratesapi.io/v1/latest?access_key=0e8e6c40cd601ee7352cbb23f0f894d2&format=1")
    const data = response.json();
    return data;
}
