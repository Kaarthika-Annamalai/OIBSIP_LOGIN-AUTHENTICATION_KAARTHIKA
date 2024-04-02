document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  // Simple validation (you can replace this with your own authentication logic)
  if (username === "admin" && password === "password") {
      // Successful login, redirect or do something else
      alert("Login successful!");
  } else {
      // Display error message
      document.getElementById("error-message").innerText = "Invalid username or password";
  }
}
);