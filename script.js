const form = document.getElementById("postForm");
const posts = document.getElementById("posts");

// Create a new post
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const thought = document.getElementById("thought").value.trim();

    if (name === "" || thought === "") {
        alert("Please enter your name and thoughts!");
        return;
    }

    const post = document.createElement("div");
    post.className = "post";

    const heading = document.createElement("h3");
    heading.textContent = "👤 " + name.toUpperCase();

    const message = document.createElement("p");
    message.textContent = thought;

    const likeButton = document.createElement("button");
    likeButton.className = "like-btn";
    likeButton.innerHTML = '❤️ Like (<span>0</span>)';
    likeButton.onclick = function() {
        likePost(this);
    };

    const commentButton = document.createElement("button");
    commentButton.className = "comment-btn";
    commentButton.textContent = "💬 Comment";
    commentButton.onclick = function() {
        addComment(this);
    };

    const comments = document.createElement("div");
    comments.className = "comments";

    post.append(heading, message, likeButton,
                commentButton, comments);

    posts.prepend(post);
    form.reset();
});

// Increase like count
function likePost(button) {
    const count = button.querySelector("span");
    count.textContent = Number(count.textContent) + 1;
}

// Add a comment
function addComment(button) {
    const comment = prompt("Enter your comment:");

    if (comment && comment.trim() !== "") {
        const comments = button.parentElement.querySelector(".comments");

        const p = document.createElement("p");
        const icon = document.createTextNode("💬 ");

        const bold = document.createElement("b");
        bold.textContent = "Comment: ";

        p.append(icon, bold, document.createTextNode(comment.trim()));
        comments.appendChild(p);
    }
}
