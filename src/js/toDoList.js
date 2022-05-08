// To do list 

class ToDoList {
    constructor (titleList, textList) {
        this.titleList = titleList; 
        this.textList = textList;
    }
}

class AddToList {
    listItens(list) {

        const elements = document.createElement('div'); 

        // get date current
        const day = new Date().getDate(); 
        const mouth = new Date().getMonth()+1; 
        const yers = new Date().getFullYear(); 
        let newDateAddList = ''

        newDateAddList += `
        ${day < 10 ? '0' + day : day}/
        ${mouth+1 < 10 ? '0' + mouth : mouth}/
        ${yers}`

        // get hours current 

        const hours = new Date().getHours(); 
        const minutes = new Date().getMinutes();
        let hoursCurrent = ''  

        hoursCurrent += `
        ${hours < 10 ? '0' + hours : hours}: 
        ${minutes < 10 ? '0' + minutes : minutes}
        `

        elements.innerHTML = `
            <div class="crateItensList">
                <span class="dateComplete"> 
                    Adicionado: ${newDateAddList} 
                    às ${hoursCurrent}
                </span>
                <div class="textAdd" id="indexAtual">
                    
                    <h2>${list.titleList}</h2>
                    <p>${list.textList}</p>
                </div> 
            </div>
        `
        const boxAnswer = document.getElementById('answer_area'); 
        boxAnswer.appendChild(elements); 
    }

    resetForm () {
        document.getElementById('form_ToDoList').reset() 
    }
}

document.getElementById('btnAddList')
    .addEventListener ('click', () => {
        document.getElementById('form_ToDoList').style.display = 'block'
    })


function removeListAdd() {
    window.alert('Um item foi apagado!')
    document.getElementsByClassName('crateItensList')[0].remove()
}  

document.getElementById('form_ToDoList')
    .addEventListener ('submit', (e) => {
        e.preventDefault(); 

        const title = document.getElementById('titleOfList').value; 
        const text = document.getElementById('textListAdd').value; 

        if (title === '' || text === '') {
            window.alert('Preencha os dados corretamente!')
        } else {

            document.getElementById('buttonShow')
                .addEventListener ('click', () => {
            document.getElementById('answer_area').style.display = 'flex';
            })


            const list = new ToDoList(title, text)
            const addItens = new AddToList();
            addItens.resetForm()
            addItens.listItens(list) 
           

            document.getElementById('form_ToDoList').style.display = 'none'
        }  
    }); 

    