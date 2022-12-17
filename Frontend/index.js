function getUsers() {
    fetch("http://localhost:3000/api/users")
    .then((response) => response.json())
    .then((data) => console.log(data));
}

function getUser(id) {
    fetch(`http://localhost:3000/api/users/${id}`)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

getUsers();
getUser("639cd7b60c78c99a01505120");