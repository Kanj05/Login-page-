document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMsg = document.getElementById("errorMsg");
  
    // Simple example validation
    if (email === "admin@technova.com" && password === "admin123") {
      alert("Login successful!");
      errorMsg.textContent = "";
      // redirect or other action
    } else {
      errorMsg.textContent = "Invalid email or password.";
    }
  });
  