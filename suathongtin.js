import { app } from "/js/config.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const db = getFirestore(app);
const auth = getAuth();

document.addEventListener('DOMContentLoaded', () => {
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            updateData(user)
            getData(user);
        } else {
            console.log('Chưa có người dùng đăng nhập');
            window.location.href = '/login.html';
        }
    });
});


function updateData (user) {
    const infoForm = document.getElementById('registration-form');
    infoForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(infoForm);
        const formDataJSON = {};
        formData.forEach((value, key) => {
            formDataJSON[ key ] = value;
        });

        await addUser(user.uid, formDataJSON);
    });
}
async function getData (user) {
    try {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const data = docSnap.data();
            document.querySelector('#infoForm [name="hoten"]').value = data.hoten;
            document.querySelector('#infoForm [name="ngaysinh"]').value = data.ngaysinh;
            document.querySelector('#infoForm [name="diachi"]').value = data.diachi;
        } else {
            console.log('Không có dữ liệu');
        }
    } catch (error) {
        log("Có lỗi");
    }
}


async function addUser (userId, formData) {
    try {
        const userDocRef = doc(db, "users", userId);
        await setDoc(userDocRef, formData, { merge: true });
        alert("Cập nhật dữ liệu thành công")
    } catch (error) {
        alert("Có lỗi");
    }
}


