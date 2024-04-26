// Add a new task
const listParent = document.querySelector('#listParent');

function ADDING() {
    const text = document.querySelector('.input').value.trim(); // Trim to remove whitespace
    
    // Check if the input field is empty
    if (text === '') {
        alert('Please enter a task.'); // Show an alert to the user
        return; // Exit the function early
    }
    const existingTasks = listParent.querySelectorAll('.listChildren span');
    for (const task of existingTasks) {
        if (task.textContent === text) {
            alert('This task already exists.'); // Show an alert to the user
            return; // Exit the function early
        }
    }
    // If the input field is not empty, proceed to add the task
    const newElement = document.createElement('div');
    
    newElement.classList.add('listChildren');
    newElement.innerHTML = `
        <span>${text}</span>
        <div class="group">
            <input type="checkbox" class="checkbox">
            <button class="delete"><i class="deletei fa-solid fa-trash"></i></button>
        </div>`;
    listParent.prepend(newElement);
    // Add event listener to the delete button
    const deleteButton = newElement.querySelector('.delete');
    deleteButton.addEventListener('click', () => {
        listParent.removeChild(newElement); // Remove the task element from the list
    });
    // Add event listener to the checkbox
    const checkbox = newElement.querySelector('.checkbox');
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            newElement.classList.add('completed');
        } else {
            newElement.classList.remove('completed');
        }
    })
}
const add = document.querySelector('.add');
add.addEventListener('click', ADDING);