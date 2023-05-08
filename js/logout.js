document.addEventListener('DOMContentLoaded', function () {
  const logoutSection = document.getElementById('logout-section');

  // Remove any stored session or authentication tokens
  localStorage.removeItem('token');
  sessionStorage.removeItem('token');

  // Show confirmation message
  logoutSection.innerHTML = `
    <h1>You have successfully logged out</h1>
    <p><a href="/login/">Click here</a> to log in again.</p>
  `;
});
