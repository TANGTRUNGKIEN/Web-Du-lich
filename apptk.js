import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const auth = getAuth();

const loginForm = document.getElementById('signin');

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  console.log("đăng nhập");
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    localStorage.setItem('loggedInUser', JSON.stringify(user));
    alert(`Đăng nhập thành công! User ID: ${ user.uid }`);
    window.location.href = '/index-gt.html'
  } catch (error) {
    alert(`Đăng nhập thất bại. Lỗi: ${ error.message }`);
  }
});