// finances options 

function CheckedValue (valueCurrent, nameProduct, priceProduct) {
    this.valueCurrent = valueCurrent;
    this.nameProduct = nameProduct; 
    this.priceProduct = priceProduct; 
}

CheckedValue.prototype.CheckingValueCurrent = function (valueAdd) {

    if (valueAdd.valueCurrent == '') {
        alert('Insira o seu saldo atual!')
    } else if (valueAdd.valueCurrent == '0') {
        alert('Esse saldo não é permitido. ')
    } else {
        
        const conteinerCreate = document.createElement('div'); 

        conteinerCreate.innerHTML = `
            <div>
                <span class="valueCurrent">Seu saldo antes da compra: R$ ${valueAdd.valueCurrent}</span>
                <h2>Nome do prodto: ${valueAdd.nameProduct}</h2>
                <p>Preço do produto: R$ ${valueAdd.priceProduct}</p>
                <span class="remaining"></span>
            </div>
        `

        const areaAnswer = document.getElementById('conteinerAnswer'); 
        areaAnswer.appendChild(conteinerCreate)
        document.getElementsByClassName('form_action')[0].style.display = 'block'

        /*
        console.log('Saldo atual: '+); 
        console.log('Nome do produto: '+valueAdd.nameProduct); 
        console.log('Preço '+valueAdd.priceProduct); 
        console.log(`Saldo restante: ${valueAdd.valueCurrent - valueAdd.priceProduct}`)
        */
    }
}


document.getElementById('form_finacial')
    .addEventListener('submit', function (e) {
        e.preventDefault()
        // dom 
        const current = document.getElementById('currentMoney').value
        const name = document.getElementById('nameProduct').value 
        const price = document.getElementById('priceProduct').value       

        current.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    // checking value 
        const checkingValue = new CheckedValue(current, name, price); 
        checkingValue.CheckingValueCurrent(checkingValue); 
    })


    // falta adicionar estilo aqui e o formulário. Meta de terminar amanhã