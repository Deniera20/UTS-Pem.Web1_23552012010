function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        alert("Login Berhasil!");
        window.location.href = "menu.html";
        return false;
    } else {
        alert("Username atau Password salah!");
        return false;
    }
}
