const username = "root";
const password = "root";
const servername = "localhost";
const dbname = "gscheme";

const conn = mysql.createConnection({
    host: servername,
    user: username,
    password: password,
    database: dbname
});

conn.connect(function (err) {
    if (err) {
        console.error("Connection Failed: " + err.message);
        return;
    }
    console.log("Connected to database");
});

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    submitButton.addEventListener('click', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const hashedPassword = md5(password); // Assuming you have a function to hash passwords

        const sql = `SELECT * FROM users WHERE name='${username}' AND password='${hashedPassword}'`;

        conn.query(sql, function (err, result) {
            if (err) {
                console.error("Error executing query: " + err.message);
                return;
            }

            const rowcount = result.length;

            if (rowcount === 1) {
                const user_id = result[0].user_id;
                console.log(user_id);

                // Assuming you have functions to set cookies and handle session
                setCookie('user_id', user_id, 7);
                setCookie('user_name', username, 7);
                sessionStorage.setItem('user_id', user_id);

                // Redirect to index.html
                window.location.href = './index.html';
            } else {
                // Redirect to login.html
                window.location.href = './login.html';
            }
        });
    });
});

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}