
function sendMail() {
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
  
    const mailtoLink = `mailto:nareshkasimkota03@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  }
