document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskDate = document.getElementById('taskDate').value;
    const taskText = taskInput.value.trim();
    
    if (taskText) {
        addTask(taskText, taskDate);
        taskInput.value = '';
        document.getElementById('taskDate').value = ''; // Clear date input
    }
});

function addTask(taskText, taskDate) {
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    
    li.innerHTML = `
        <div class="taskDetails">
            <span class="taskText">${taskText}</span>
            <span class="taskDate">${taskDate ? `Due: ${new Date(taskDate).toLocaleDateString()}` : ''}</span>
        </div>
        <input type="text" class="editInput" value="${taskText}" style="display:none;">
        <button class="editBtn">Edit</button>
        <button class="removeBtn">Remove</button>
    `;
    
    const editBtn = li.querySelector('.editBtn');
    const removeBtn = li.querySelector('.removeBtn');
    const taskTextSpan = li.querySelector('.taskText');
    const editInput = li.querySelector('.editInput');
    const taskDateSpan = li.querySelector('.taskDate');
    
    // Edit button functionality
    editBtn.addEventListener('click', function() {
        if (editInput.style.display === 'none') {
            editInput.style.display = 'inline';
            taskTextSpan.style.display = 'none';
            editInput.focus();
        } else {
            const newText = editInput.value.trim();
            if (newText) {
                taskTextSpan.textContent = newText;
                editInput.value = newText;
            }
            editInput.style.display = 'none';
            taskTextSpan.style.display = 'inline';
        }
    });
    
    // Remove button functionality
    removeBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });
    
    // Toggle completed status
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });
    
    taskList.appendChild(li);
}
