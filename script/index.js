// Data Structure to store newly created blogs
const blogData =[];

// function to create new blog
function createBlogPost(){
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const content = document.getElementById('blog-content').value;
    // check content is empty or not
    if(content.trim()===''){
        alert('Please enter some content for your blog post.');
        return;
    }
    // if content is not empty create a new blog object.
    const post = {
        title,
        author,
        content,
        date: new Date().toLocaleString()
    };
     // Add the new post to the data structure
     blogData.push(post);
     // Clear the textarea
     document.getElementById('blog-content').value = '';
     renderBlogPosts();
}

// function to render blog posts

function renderBlogPosts(){
    const blogPostsContainer = document.getElementById('post-blog');
    blogPostsContainer.innerHTML = '';
    blogData.forEach((post, index) => {
        const postDiv = document.createElement('div');
        postDiv.className = 'blog-post';
        postDiv.innerHTML = `
        <div class="post-blog">
           
            <h3 class="title">${post.title}</h3>
            <h3 class="author">${post.author}</h3>
            <p class="content">${post.content}</p>
            <p>Date: ${post.date}</p>
            </div>
        `;
        blogPostsContainer.appendChild(postDiv);
    });
}
// Initial rendering
renderBlogPosts();
