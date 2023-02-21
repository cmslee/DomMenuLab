//=== Part I ===

// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
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
    // Create an <a> element.
    const a = document.createElement('a')
    // On the new element, add an href attribute with its value set to the hrefproperty of the "link" object.
    a.setAttribute('href', element.href)
    // Set the new element's content to the value of the textproperty of the "link" object.
    a.textContent = ('text', element.text)
    // Append the new element to the topMenuElelement.
    topMenuEl.append(a)
}



