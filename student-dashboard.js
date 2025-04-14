// Chat functionality
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');

// Subject-specific chatbot responses
const botResponses = {
    'hello': 'Hello! How can I help you with your studies today?',
    'assignment': 'I can help explain your assignments or provide resources. Which subject would you like help with?',
    'quiz': 'I can help you prepare for quizzes with practice questions. Which subject are you studying?',
    'database': 'For database management, I can help with SQL queries, database design, and normalization concepts.',
    'programming': 'I can assist with programming concepts, debugging, and practice exercises. What specific topic are you working on?',
    'help': 'I can help you with understanding course materials, assignments, quiz preparation, and specific subject questions. What would you like to know more about?'
};

// Add a bot welcome message
window.addEventListener('load', () => {
    addMessage('Hi! I\'m your Subject Assistant. I can help you with your coursework and answer subject-specific questions. What would you like to learn about?', 'bot');
});

chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && chatInput.value.trim() !== '') {
        const userMessage = chatInput.value.trim();
        addMessage(userMessage, 'user');
        
        // Process user message and get bot response
        const botResponse = getBotResponse(userMessage.toLowerCase());
        
        // Simulate bot typing delay
        setTimeout(() => {
            addMessage(botResponse, 'bot');
        }, 1000);
        
        chatInput.value = '';
    }
});

function addMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotResponse(message) {
    // Check for keywords in the message
    for (const [keyword, response] of Object.entries(botResponses)) {
        if (message.includes(keyword)) {
            return response;
        }
    }
    
    // Default response if no keyword matches
    return 'I\'m here to help with your studies. You can ask me about specific subjects, assignments, or quiz preparation.';
}

// Course continuation handlers
document.querySelectorAll('.course-item .btn-outline').forEach(button => {
    button.addEventListener('click', () => {
        const courseName = button.parentElement.querySelector('h4').textContent;
        alert(`Loading course content for ${courseName}...`);
    });
});

// Assignment handlers
document.querySelectorAll('.assignment-item .btn-outline').forEach(button => {
    button.addEventListener('click', () => {
        const assignmentName = button.parentElement.querySelector('h4').textContent;
        const action = button.textContent;
        if (action === 'Start') {
            alert(`Starting assignment: ${assignmentName}`);
        } else {
            alert(`Continuing assignment: ${assignmentName}`);
        }
    });
});

// Quiz review handlers
document.querySelectorAll('.quiz-item .btn-outline').forEach(button => {
    button.addEventListener('click', () => {
        const quizName = button.parentElement.querySelector('h4').textContent;
        alert(`Opening review for ${quizName}`);
    });
});

// View All Courses button handler
document.querySelector('.btn-secondary').addEventListener('click', () => {
    alert('Loading all available courses...');
});

// Update progress bars animation
document.querySelectorAll('.progress-bar').forEach(progressBar => {
    const progress = progressBar.querySelector('.progress');
    const width = progress.style.width;
    progress.style.width = '0';
    setTimeout(() => {
        progress.style.transition = 'width 1s ease-in-out';
        progress.style.width = width;
    }, 100);
});

// Generate practice questions based on course content
function generatePracticeQuestion(subject) {
    const questions = {
        'database': [
            {
                question: 'What is a primary key in a database?',
                hint: 'Think about unique identification of records'
            },
            {
                question: 'Explain the concept of normalization.',
                hint: 'Consider data redundancy and consistency'
            }
        ],
        'programming': [
            {
                question: 'What is the difference between a while loop and a for loop?',
                hint: 'Think about use cases and iteration control'
            },
            {
                question: 'Explain the concept of recursion.',
                hint: 'Consider a function calling itself'
            }
        ]
    };
    
    return questions[subject] || null;
}

// Add subject-specific help functionality
function getSubjectHelp(subject) {
    const resources = {
        'database': {
            links: ['SQL Tutorial', 'Database Design Guide'],
            practice: generatePracticeQuestion('database')
        },
        'programming': {
            links: ['Programming Fundamentals', 'Practice Problems'],
            practice: generatePracticeQuestion('programming')
        }
    };
    
    return resources[subject] || null;
}
