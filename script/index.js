// Data Structure to store newly created blogs
const blogData =[];

// function to create new blog
function createBlogPost(){
    const content = document.getElementById('blog-content').value;
    // check content is empty or not
    if(content.trim()===''){
        alert('Please enter some content for your blog post.');
        return;
    }
    // if content is not empty create a new blog object.
    const post = {
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
    const blogPostsContainer = document.getElementById('blog-posts');
    blogPostsContainer.innerHTML = '';
    blogData.forEach((post, index) => {
        const postDiv = document.createElement('div');
        postDiv.className = 'blog-post';
        postDiv.innerHTML = `
            <h3>Post ${index + 1}</h3>
            <p>${post.content}</p>
            <p>Date: ${post.date}</p>
        `;
        blogPostsContainer.appendChild(postDiv);
    });
}
// Initial rendering
renderBlogPosts();
