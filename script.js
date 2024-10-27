const profile = {
    name: "Nama Anda",
    role: "Front End Designer",
    availability: "Full Time",
    age: "19",
    location: "Jakarta",
    yoe: "2",
    email: "email@gmail.com"
};

window.onload = function() {
    loadProfile();
};

function loadProfile() {
    document.getElementById("name").textContent = localStorage.getItem("name") || profile.name;
    document.getElementById("role").textContent = localStorage.getItem("role") || profile.role;
    document.getElementById("availability").textContent = localStorage.getItem("availability") || profile.availability;
    document.getElementById("age").textContent = localStorage.getItem("age") || profile.age;
    document.getElementById("location").textContent = localStorage.getItem("location") || profile.location;
    document.getElementById("yoe").textContent = localStorage.getItem("yoe") || profile.yoe;
    document.getElementById("email").textContent = localStorage.getItem("email") || profile.email;
}

function editProfile() {
    document.getElementById("profile").style.display = "none";
    document.getElementById("form-section").style.display = "block";

    document.getElementById("input-name").value = localStorage.getItem("name") || "";
    document.getElementById("input-role").value = localStorage.getItem("role") || "";
    document.getElementById("input-availability").value = localStorage.getItem("availability") || "";
    document.getElementById("input-age").value = localStorage.getItem("age") || "";
    document.getElementById("input-location").value = localStorage.getItem("location") || "";
    document.getElementById("input-yoe").value = localStorage.getItem("yoe") || "";
    document.getElementById("input-email").value = localStorage.getItem("email") || "";
}

function saveProfile() {
    localStorage.setItem("name", document.getElementById("input-name").value);
    localStorage.setItem("role", document.getElementById("input-role").value);
    localStorage.setItem("availability", document.getElementById("input-availability").value);
    localStorage.setItem("age", document.getElementById("input-age").value);
    localStorage.setItem("location", document.getElementById("input-location").value);
    localStorage.setItem("yoe", document.getElementById("input-yoe").value);
    localStorage.setItem("email", document.getElementById("input-email").value);

    document.getElementById("form-section").style.display = "none";
    document.getElementById("profile").style.display = "flex";
    loadProfile();
}

function cancelEdit() {
    document.getElementById("form-section").style.display = "none";
    document.getElementById("profile").style.display = "flex";
}

function resetProfile() {
    localStorage.clear(); 

    document.getElementById("name").textContent = profile.name;
    document.getElementById("role").textContent = profile.role;
    document.getElementById("availability").textContent = profile.availability;
    document.getElementById("age").textContent = profile.age;
    document.getElementById("location").textContent = profile.location;
    document.getElementById("yoe").textContent = profile.yoe;
    document.getElementById("email").textContent = profile.email;
}