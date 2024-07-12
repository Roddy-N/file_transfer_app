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
        linkOutput.textContent = 'https://example.com/download?file=yourfile';
        alert('Files uploaded successfully.');
    }, 2000);
}
