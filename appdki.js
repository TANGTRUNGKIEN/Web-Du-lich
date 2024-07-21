document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registration-form");
    const message = document.getElementById("message");
  
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const formData = new FormData(form);
        const data = {};
        formData.forEach(function(value, key) {
            data[key] = value;
        });
  
        message.textContent = "Đăng ký thành công!";
        form.reset();
    });
  });