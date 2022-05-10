// finances options 

function CheckedValue (valueCurrent, nameProduct, priceProduct) {
    this.valueCurrent = valueCurrent;
    this.nameProduct = nameProduct; 
    this.priceProduct = priceProduct; 
}

CheckedValue.prototype.CheckingValueCurrent = function (valueAdd) {

    let impossible = valueAdd.priceProduct < valueAdd.valueCurrent

    if (valueAdd.valueCurrent == '' || valueAdd.nameProduct == '' || valueAdd.priceProduct == '') {
        alert('Insira as informações nos campos!')
    } else if (valueAdd.valueCurrent == '0') {
        alert('Esse saldo não é permitido. ')
    } else if (impossible == false) {
        alert('Saldo insuficiênte!')
    } else {
        
        let remaining = `${valueAdd.valueCurrent - valueAdd.priceProduct}`
        let day = new Date().getDate(); 
        let mouth = new Date().getMonth()+1
        let yers = new Date().getFullYear()    

        let dateComplete = `
            ${day < 10 ? '0'+day : day }/
            ${mouth < 10 ? '0'+mouth : mouth}/
            ${yers}
        `; 

        let hours = new Date().getHours(); 
        let minutes = new Date().getMinutes()
        
        dateComplete += ` às
            ${hours < 10 ? '0'+hours : hours }:
            ${minutes < 10 ? '0'+minutes : minutes}
        `; 

        const conteinerCreate = document.createElement('div'); 

        conteinerCreate.innerHTML = `
            <div class="box_div_js">
            
                <div class="conteinerAnswerJs">
                    <div class="flexTitle"> 
                        <h2>Nome da compra: ${valueAdd.nameProduct}</h2>
                        <span class="dateJs">${dateComplete}</span>
                    </div>
                    <span class="valueCurrent">Seu saldo antes da compra: R$ ${valueAdd.valueCurrent}</span>
                    
                    <p>Preço da compra: R$ ${valueAdd.priceProduct}</p>
                    <span class="remaining">Seu saldo restante: ${remaining}</span>
                </div>
            </div>
        `

        const areaAnswer = document.getElementById('addConteinerJs'); 
        areaAnswer.appendChild(conteinerCreate)

        // display none conteiners action
        document.getElementsByClassName('form_action')[0].style.display = 'none'; 

        document.getElementsByClassName('form_money_Current')[0].style.display = 'none'

        // action buttons state
        document.getElementById('addMoreProduct').style.display = 'block'; 
        document.getElementById('checkedValue').style.display = 'none'; 

        document.getElementById('removeItens').style.display = 'block'; 

    }

    this.formatDefaultForm = function () {
        document.getElementById('form_finacial').reset() 
    }

    this.addMoreProduct = function () {
        document.getElementById('addMoreProduct').addEventListener('click', function() {
            // display block conteiners   
        document.getElementsByClassName('form_action')[0].style.display = 'block'

        document.getElementsByClassName('form_money_Current')[0].style.display = 'block'

        document.getElementById('checkedValue').style.display = 'block';

        document.getElementById('removeItens').style.display = 'none'

        document.getElementById('addMoreProduct').style.display = 'none'; 
    })
    }

    this.removeItem = function () {
        document.getElementById('removeItens').addEventListener('click', function() {
            // apagar
            document.getElementsByClassName('box_div_js')[0].remove();  

            document.getElementsByClassName('box_div_js')[0].style.display = 'none'; 

            document.getElementById('removeItens').style.display = 'none'
        })
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
        checkingValue.CheckingValueCurrent(checkingValue);   checkingValue.addMoreProduct(); 
        checkingValue.formatDefaultForm();
        checkingValue.removeItem() 

        document.getElementById('removeItens').style.display = 'block'
    })