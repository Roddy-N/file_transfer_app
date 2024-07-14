function generatePassword(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

function uploadFiles() {
    const fileInput = document.getElementById('fileInput');
    const files = fileInput.files;
    if (files.length === 0) {
        alert('Please select files to upload.');
        return;
    }

    // Simulate file upload process
    setTimeout(() => {
        const linkOutput = document.getElementById('linkOutput');
        const passwordOutput = document.getElementById('passwordOutput');
        const password = generatePassword(10);

        linkOutput.textContent = 'Download Link: https://example.com/download?file=yourfile';
        passwordOutput.textContent = 'Password: ' + password;
        alert('Files uploaded successfully. Share the link and password with the recipient.');
    }, 2000);
}
