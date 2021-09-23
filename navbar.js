let navbar = document.querySelector('.navigation_bar');
console.log(navbar);
let html_template = `<ul id="navbar">
<li><a href="/index.html">HOME</a></li>
<li><a href="/contact.html">CONTACT</a></li>
<li><a href="/clock.html">CLOCK</a></li>
</ul>`;

navbar.innerHTML = html_template;

console.log(html_template);