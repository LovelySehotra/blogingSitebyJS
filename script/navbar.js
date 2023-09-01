// const divElement = document.createElement('div');

// // Set properties and content
// divElement.id = 'myDiv';
// divElement.className = 'myClass';
// divElement.textContent = 'This is a dynamically created div element.';

// // Append the div to the body of the page
// document.body.appendChild(divElement);
const navBar = document.getElementById('navbar')
const postNav = document.createElement('div');


postNav.className = 'nav';
postNav.innerHTML = `
        <div class="nav-container">
        <div class="logo"><img src="./assest/logo_mockup.jpg"/></div>
        <div class="navlist">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        </div>
        <button>Get Started</button>
        </div>
        <hr>

        <div class="nav-bottom">
        <div class="nav-bottom-left">
            <h1>Stay Curious</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, fuga.</p>
            <div><button>Start Learning</button></div>
        </div>
        <div class="nav-bottom-right">
            <img src="./assest/background-img.jpg" alt="">
        </div>
    </div>
 
`;
navBar.appendChild(postNav);




const postDiv = document.createElement('div');
        postDiv.className = 'blog-post';
        postDiv.innerHTML = `
            <h3>Post ${index + 1}</h3>
            <p>${post.content}</p>
            <p>Date: ${post.date}</p>
        `;
        blogPostsContainer.appendChild(postDiv);