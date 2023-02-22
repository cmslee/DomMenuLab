//=== Part I ===

// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

// Task 1.0: Select and cache the <main>element in a variable named mainEl.
const mainEl = document.querySelector('main');

// Task 1.1: Set the background color of mainEl to the value stored in the --main-bgCSS custom property. Hint: Assign a string that uses the CSS var()function like this: 'var(--main-bg)'
mainEl.style.backgroundColor = 'var(--main-bg)';

// Task 1.2: Set the content of mainEl to <h1>SEI Rocks!</h1>.
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';

// Task 1.3: Add a class of flex-ctr to mainEl.
mainEl.classList.add('flex-ctr');

// Task 2.0: Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl = document.querySelector('#top-menu');

// Task 2.1: Set the height topMenuEl element to be 100%.
topMenuEl.style.height = '100%';

// Task 2.2: Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// Task 2.3: Add a class of flex-around to topMenuEl.
topMenuEl.classList.add('flex-around')

// Task 3.1:

// Iterate over the entire menuLinks array and for each "link" object:
for (element of menuLinks){
    // a. Create an <a> element.
    const a = document.createElement('a')
    // b. On the new element, add an href attribute with its value set to the hrefproperty of the "link" object.
    a.setAttribute('href', element.href)
    // c. Set the new element's content to the value of the textproperty of the "link" object.
    a.textContent = ('text', element.text)
    // d. Append the new element to the topMenuElelement.
    topMenuEl.append(a)
}

// using .forEach method

/*
menuLinks.forEach(obj => {
  const a = document.createElement('a');
  a.setAttribute('href', obj.href);
  a.textContent = obj.text
  topMenuEl.append(a)
})
*/

// What this task is doing is building an anchor tag for each item in array
// 3.1a: for each value in array, we created an anchor tag element
// 3.1b: for Each value in array, we want to set the link attribute to the anchor via...
// 3.1c:
// 3.2d: append the anchor tag to the top menu

// Task 4.0: Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
const subMenuEl = document.querySelector('#sub-menu');

// Task 4.1: Set the height subMenuEl element to be 100%.
subMenuEl.style.height = '100%';

// Task 4.2: Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

// Task 4.3: Add the class of flex-around to the subMenuElelement.
subMenuEl.classList.add('flex-around');

// Task 4.4: Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = 'absolute';

// Task 4.5: Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = '0';

// Task 5.1: Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
const topMenuLinks = document.querySelectorAll('a')

// Declare a global (CHECK <-- what does global mean here) showing SubMenu variable and initialize it to false;
let showingSubMenu = false;

// Task 5.2: Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener('click', function(event) {
  // a.The first line of code of the event listener function should call the event object's preventDefault()method.
  event.preventDefault();
  // b.The second line of code function should immediately return if the element clicked was not an <a>element. (DOUBLECHECK! why tagname and to lower case???)
  if (event.target.tagName.toLowerCase() !== 'a'){
    return;
  }

})



// c.console.log the content of the <a>to verify the handler is working.
console.log(<a></a>)