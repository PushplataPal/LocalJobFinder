// ------------------------------
// Page Navigation Buttons (Home, Post Job, Find Job)
// ------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const postJobBtn = document.getElementById("postJobBtn");
  const findJobBtn = document.getElementById("findJobBtn");
  const homeBtn = document.getElementById("homeBtn");

  if (postJobBtn) postJobBtn.addEventListener("click", showPostJob);
  if (findJobBtn) findJobBtn.addEventListener("click", showFindJob);
  if (homeBtn) homeBtn.addEventListener("click", showHome);
});

function showHome() {
  document.getElementById("content").innerHTML = `
    <section>
      <h2>Welcome!</h2>
      <p>Find or post local jobs easily.</p>
    </section>`;
}

function showPostJob() {
  document.getElementById("content").innerHTML = `
    <section>
      <h2>Post a Job</h2>
      <form id="jobForm">
        <input type="text" id="title" placeholder="Job Title" required><br>
        <input type="text" id="location" placeholder="Location" required><br>
        <textarea id="desc" placeholder="Job Description" required></textarea><br>
        <button type="submit">Post Job</button>
      </form>
    </section>`;

  document.getElementById("jobForm").addEventListener("submit", e => {
    e.preventDefault();
    alert("Job posted successfully!");
  });
}

function showFindJob() {
  document.getElementById("content").innerHTML = `
    <section>
      <h2>Available Jobs</h2>
      <ul id="jobList">
        <li><strong>Plumber</strong> - Delhi</li>
        <li><strong>Electrician</strong> - Mumbai</li>
      </ul>
    </section>`;
}

// ------------------------------
// AUTHENTICATION LOGIC
// ------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;

  // ✅ SIGN UP
  if (path.includes("signup.html")) {
    const form = document.querySelector("form");
    form?.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      if (!email || !password) {
        alert("Please enter both email and password!");
        return;
      }

      localStorage.setItem("user", JSON.stringify({ email, password }));
      alert("Account created successfully!");
      window.location.href = "completeprofile.html";
    });
  }

  // ✅ SIGN IN
  if (path.includes("signin.html")) {
    const signinForm = document.getElementById("signinForm");
    const signupLink = document.getElementById("signup-link");

    if (signinForm) {
      signinForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (storedUser && storedUser.email === email && storedUser.password === password) {
          alert("Login successful!");
          window.location.href = "homepage.html";
        } else {
          alert("Invalid email or password!");
        }
      });
    }

    signupLink?.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "signup.html";
    });
  }

  // ✅ COMPLETE PROFILE
  if (path.includes("completeprofile.html")) {
    const form = document.querySelector("form");
    form?.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Profile saved successfully!");
      window.location.href = "homepage.html";
    });
  }
});

// ✅ LOGOUT FUNCTION
function logout() {
  localStorage.removeItem("user");
  window.location.href = "signin.html";
}
