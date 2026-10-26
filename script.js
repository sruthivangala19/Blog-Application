console.log("MyBlog application loaded successfully!");
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const message = document.getElementById("message");

        if (email && password) {
            message.textContent =
                "Form validated! Real login will be added with the backend.";
            message.style.color = "green";
        }
    });
}
const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const message = document.getElementById("registerMessage");

        if (name && email && password.length >= 6) {
            message.textContent =
                "Registration form validated successfully!";
            message.style.color = "green";
        }
    });
}
const blogForm = document.getElementById("blogForm");

if (blogForm) {
    blogForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const title = document.getElementById("blogTitle")
            .value.trim();
        const category = document.getElementById("category")
            .value;
        const content = document.getElementById("blogContent")
            .value.trim();

        if (!title || !category || !content) {
            return;
        }

        const posts = JSON.parse(
            localStorage.getItem("myBlogPosts") || "[]"
        );

        posts.push({
            title: title,
            category: category,
            content: content,
            date: new Date().toLocaleDateString()
        });

        localStorage.setItem("myBlogPosts", JSON.stringify(posts));

        document.getElementById("blogMessage").textContent =
            "Blog published successfully!";

        document.getElementById("blogMessage").style.color = "green";

        blogForm.reset();
    });
}
/* Display saved blog posts on the Dashboard */

const myPosts = document.getElementById("myPosts");
const totalPosts = document.getElementById("totalPosts");

if (myPosts && totalPosts) {
    const posts = JSON.parse(
        localStorage.getItem("myBlogPosts") || "[]"
    );

    totalPosts.textContent = posts.length;

    if (posts.length === 0) {
        myPosts.innerHTML =
            "<p>No blog posts yet. Create your first blog!</p>";
    } else {
        myPosts.innerHTML = "";

        posts.forEach(function (post) {
            const card = document.createElement("article");
            card.className = "post-card";

            const title = document.createElement("h3");
            title.textContent = post.title;

            const category = document.createElement("p");
            category.textContent = "Category: " + post.category;

            const content = document.createElement("p");
            content.textContent = post.content;

            const date = document.createElement("small");
            date.textContent = "Published: " + post.date;

            card.append(title, category, content, date);
            myPosts.appendChild(card);
        });
    }
}
