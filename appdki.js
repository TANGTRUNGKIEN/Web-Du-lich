import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { app } from "/js/config.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const db = getFirestore(app);
const auth = getAuth();

const signupForm = document.getElementById('registration-form');

signupForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const ngaysinh = document.getElementById('ngaysinh').value;
  const diachi = document.getElementById('diachi').value;
  const hoten = document.getElementById('hoten').value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    const data_user = {
      hoten: hoten,
      ngaysinh: ngaysinh,
      diachi: diachi,
    };

    const userDocRef = doc(db, "users", user.uid);
    await setDoc(userDocRef, data_user);

    alert(`Đăng ký thành công! User ID: ${user.uid}`);
    window.location.href = '/index-gt.html';
  } catch (error) {
    alert(`Đăng ký thất bại. Lỗi: ${error.message}`);
  }
});