function validateForm() {
    var username = document.getElementById("username").value.trim();
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message");

    // Kiểm tra các trường có rỗng không
    if (username === "" || password === "" || email === "") {
        message.innerHTML = "Vui lòng điền đầy đủ thông tin.";
        return false;
    }

    // Kiểm tra độ dài mật khẩu
    if (password.length < 6) {
        message.innerHTML = "Mật khẩu phải có ít nhất 6 ký tự.";
        return false;
    }

    // Kiểm tra định dạng email đơn giản
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        message.innerHTML = "Email không hợp lệ.";
        return false;
    }

    // Nếu thông tin hợp lệ, cho phép submit form
    message.innerHTML = "Đăng kí thành công!";
    return true;
}
