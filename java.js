        
        // Simulated user credentials (replace with your authentication logic)
        const validUsername = "tomi";
        const validPassword = "tomi";

        document.getElementById("loginForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent the form from submitting normally.

            // Get user input
            const usernameInput = document.getElementById("text").value;
            const passwordInput = document.getElementById("password").value;

            // Check if the provided credentials are valid
            if (usernameInput === validUsername && passwordInput === validPassword) {
                // Redirect to a new page (change the URL as needed)
                window.location.href = "/MacWebApp/index.html";
            } else {
                alert("Invalid username or password. Please try again.");
            }
        });