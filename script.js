const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');
const counter = document.getElementById('counter');

// les commandes dans un nv tab
let todos = [];

function render() {
    
    list.innerHTML = '';

   
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        
       
        if (todo.completed) {
            li.classList.add('completed');
        }

        
        li.innerHTML = `
            <span onclick="toggleTodo(${index})">${todo.text}</span>
            <button class="delete-btn" onclick="deleteTodo(${index})">X</button>
        `;

        list.appendChild(li);
    });

    
    const remaining = todos.filter(t => !t.completed).length;
    counter.textContent = `${remaining} tâche(s) restante(s)`;
}

form.addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    const text = input.value.trim();
    if (text !== '') {
        todos.push({ text: text, completed: false });
        input.value = ''; 
        render(); 
    }
});


function toggleTodo(index) {
    todos[index].completed = !todos[index].completed;
    render();
}


function deleteTodo(index) {
    todos.splice(index, 1);
    render();
}