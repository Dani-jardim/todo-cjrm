const formAddTodo = document.querySelector('.form-add-todo')

const ul = document.querySelector('.todos-container')

formAddTodo.addEventListener('submit', event => {
  event.preventDefault()
    const inputValue = event.target.add.value.trim()
    ul.innerHTML +=`
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span> ${inputValue}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>`;
    console.log(inputValue)
})
