document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the username and password values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Perform validation (you can customize this based on your requirements)
    if (username === "admin" && password === "password") {
      // Redirect to the home page
      window.location.href = "home.html";
    } else {
      alert("Invalid username or password"); // Show error message
    }
  });
  