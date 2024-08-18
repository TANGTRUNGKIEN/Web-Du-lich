import { getAuth, onAuthStateChanged,signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const auth = getAuth();

// kiểm tra đăng nhập
document.addEventListener('DOMContentLoaded', () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log('Người dùng đã đăng nhập:', user.uid);
      $('#signin').hide();
      $('#signup').hide();

      $('#btn_info').show();
      $('#logoutButton').show();

    } else {
      $('#signin').show();
      $('#signup').show();

      $('#btn_info').hide();
      $('#logoutButton').hide();
    }
  });
});


// đăng xuất
const logoutButton = document.getElementById('logoutButton');

logoutButton.addEventListener('click', async () => {
  try {
    await signOut(auth);
    localStorage.removeItem('loggedInUser'); // Xóa thông tin người dùng đã đăng nhập từ localStorage
    console.log('Đã đăng xuất thành công');
    // Thực hiện các hành động khác sau khi đăng xuất, ví dụ: chuyển hướng về trang chủ, vv.
  } catch (error) {
    console.error('Lỗi khi đăng xuất:', error);
    // Xử lý lỗi nếu cần thiết
  }
});