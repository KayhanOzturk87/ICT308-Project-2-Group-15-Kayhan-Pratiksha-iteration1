// Chat functionality
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');

// Simple chatbot responses based on keywords
const botResponses = {
    'hello': 'Hello! How can I help you with your teaching today?',
    'quiz': 'To create a new quiz, click the "Create Quiz" button in the sidebar or use the Quick Actions card.',
    'upload': 'You can upload course materials using the "Upload Course Material" button in Quick Actions.',
    'schedule': 'To schedule a new class, use the "Schedule Class" button or check your calendar for available slots.',
    'help': 'I can help you with creating quizzes, uploading materials, scheduling classes, and managing your subjects. What would you like to know more about?'
};

// Add a bot welcome message
window.addEventListener('load', () => {
    addMessage('Hello! I\'m your Subject Assistant. How can I help you today?', 'bot');
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
    return 'I\'m here to help with your teaching needs. You can ask me about creating quizzes, uploading materials, or scheduling classes.';
}

// Quick Actions button handlers
document.querySelectorAll('.btn-action').forEach(button => {
    button.addEventListener('click', (e) => {
        const action = e.target.textContent;
        switch(action) {
            case 'Upload Course Material':
                alert('Opening course material upload form...');
                break;
            case 'Create New Quiz':
                alert('Opening quiz creation interface...');
                break;
            case 'Schedule Class':
                alert('Opening class scheduler...');
                break;
        }
    });
});

// Subject management handlers
document.querySelectorAll('.btn-outline').forEach(button => {
    button.addEventListener('click', () => {
        const subjectName = button.parentElement.querySelector('h4').textContent;
        alert(`Opening management interface for ${subjectName}...`);
    });
});

// Create New Subject button handler
document.querySelector('.btn-secondary').addEventListener('click', () => {
    alert('Opening new subject creation form...');
});
