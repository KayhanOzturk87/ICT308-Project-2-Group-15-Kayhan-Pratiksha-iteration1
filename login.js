document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;

    // For demonstration, hardcoded credentials
    // In real implementation, this would connect to backend
    if (username === 'teacher' && password === 'teacher123') {
        window.location.href = 'teacher-dashboard.html';
    } else if (username === 'student' && password === 'student123') {
        window.location.href = 'student-dashboard.html';
    } else {
        alert('Invalid credentials. Please try again.');
    }
});
