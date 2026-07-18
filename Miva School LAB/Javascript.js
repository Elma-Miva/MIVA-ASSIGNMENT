// Wait for DOM to load fully before initializing scripts
document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // MODULE 1: INTERACTIVE ACADEMIC PLANNER SYSTEM
    // ==========================================
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    if (addTaskBtn && taskInput && taskList) {
        let tasks = []; // Array data structure handling structural items

        function renderTasks() {
            taskList.innerHTML = "";
            tasks.forEach((task, index) => {
                const li = document.createElement("li");
                if (task.completed) li.classList.add("completed");

                li.innerHTML = `
                    <span>${task.text}</span>
                    <div class="task-actions">
                        <button class="btn" onclick="toggleTask(${index})">✓</button>
                        <button class="btn" style="background-color:#e74c3c" onclick="deleteTask(${index})">✗</button>
                    </div>
                `;
                taskList.appendChild(li);
            });
        }

        addTaskBtn.addEventListener("click", () => {
            const text = taskInput.value.trim();
            if (text !== "") {
                tasks.push({ text: text, completed: false });
                taskInput.value = "";
                renderTasks();
            }
        });

        window.toggleTask = (index) => {
            tasks[index].completed = !tasks[index].completed;
            renderTasks();
        };

        window.deleteTask = (index) => {
            tasks.splice(index, 1);
            renderTasks();
        };
    }

    // ==========================================
    // MODULE 2: CONTACT FORM VALIDATION ENGINE
    // ==========================================
    const contactForm = document.getElementById("contactForm");
    const formFeedback = document.getElementById("formFeedback");

    if (contactForm && formFeedback) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Halt implicit execution block

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const message = document.getElementById("message").value.trim();

            // 1. Structural Completeness Field Validation
            if (!name || !email || !phone || !message) {
                formFeedback.className = "error-msg";
                formFeedback.innerText = "Error: All processing configuration fields must be provided.";
                return;
            }

            // 2. Syntax Structured Email Matching Validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                formFeedback.className = "error-msg";
                formFeedback.innerText = "Error: The email syntax configuration format is invalid.";
                return;
            }

            // 3. Numeric Structural Pattern Testing (Digits Only Rule)
            const digitsRegex = /^\d+$/;
            if (!digitsRegex.test(phone)) {
                formFeedback.className = "error-msg";
                formFeedback.innerText = "Error: Phone records must exclusively contain numeric tokens.";
                return;
            }

            // Passed System Validation Constraints successfully
            formFeedback.className = "success-msg";
            formFeedback.innerText = "Success: Form successfully verified and submitted!";
            contactForm.reset();
        });
    }
});
