// const divElement = document.createElement('div');

// // Set properties and content
// divElement.id = 'myDiv';
// divElement.className = 'myClass';
// divElement.textContent = 'This is a dynamically created div element.';

// // Append the div to the body of the page
// document.body.appendChild(divElement);
const navBar=document.getElementById('navbar')
const postNav = document.createElement('div');
// postNav.style.backgroundColor='gray';
// postNav.style.color='white';
// postNav.style.display='flex';
// postNav.style.alignItems='center';
// postNav.style.justifyContent='space-evenly';
// postNav.style.padding='5px';

postNav.className ='nav-container';
postNav.innerHTML=`
<a href="#" class="nav-list">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <div class="search">
        <input type="text"/> Search</div>

`;
navBar.appendChild(postNav);




// const postDiv = document.createElement('div');
//         postDiv.className = 'blog-post';
//         postDiv.innerHTML = `
//             <h3>Post ${index + 1}</h3>
//             <p>${post.content}</p>
//             <p>Date: ${post.date}</p>
//         `;
//         blogPostsContainer.appendChild(postDiv);