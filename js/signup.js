document.querySelector("form").addEventListener("submit", async function (event) {
    event.preventDefault();
  
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm_password").value;
  
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    const formData = new FormData(event.target);
  
    try {
      const response = await fetch("/signup_process", {
        method: "POST",
        body: formData,
        headers: {
          "X-CSRFToken": getCookie("csrftoken"),
        },
      });
  
      if (response.ok) {
        alert("Your registration has been submitted successfully!");
        window.location.href = "dashboard.html";
      } else {
        // Handle server-side validation errors
        const errors = await response.json();
        console.log(errors);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  });
  
  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) === name + "=") {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }
  