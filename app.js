function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}

function generatePassword(length) {
    return generateRandomString(length);
}

function generateLink(fileName) {
    const randomString = generateRandomString(10);
    return `https://example.com/download?token=${randomString}&file=${encodeURIComponent(fileName)}`;
}

function uploadFiles() {
    const fileInput = document.getElementById('fileInput');
    const files = fileInput.files;
    if (files.length === 0) {
        alert('Please select files to upload.');
        return;
    }

    const file = files[0]; // Assuming single file upload for simplicity
    const fileName = file.name;
    const link = generateLink(fileName);
    const password = generatePassword(10);

    // Simulate file upload process
    setTimeout(() => {
        const linkOutput = document.getElementById('linkOutput');
        const passwordOutput = document.getElementById('passwordOutput');

        linkOutput.textContent = 'Download Link: ' + link;
        passwordOutput.textContent = 'Password: ' + password;
        alert('Files uploaded successfully. Share the link and password with the recipient.');
    }, 2000);
}
