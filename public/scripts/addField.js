//Procurar botão
document.querySelector('#add-time').addEventListener('click', cloneField)
//Quando clicar no botão

//executa uma ação
function cloneField() {
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //função cloneNode recebe true ou false para copiar o item apontado pelo queryselector (schedule item)
    const fields = newFieldContainer.querySelectorAll('input') //especifica a captura de todos os campos de input dentro da const anterior para a nova const
    fields.forEach(function(field) {
        field.value = ''
    })
    //define que o newFieldContainer será um elemento filho de #schedule-item (que é o formulário geral)
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
