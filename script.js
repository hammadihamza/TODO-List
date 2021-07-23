const form = document.querySelector('#form-todo')
const inputText = document.querySelector('#inputText')
const submitBtn = document.querySelector('#submitBtn')

form.addEventListener("submit",e=>{
    e.preventDefault()
    const item = document.createElement("div")

    item.classList.add("list-item")
    item.innerText =  inputText.value
    form.appendChild(item)

    inputText.value=""

    item.addEventListener('click',()=>
    {
        item.remove()
    })

})
