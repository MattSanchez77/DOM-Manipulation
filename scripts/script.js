/*
1). Select and cache the <main> element in a variable named mainEl.
2.) Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
3). Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
4). Add a class of flex-ctr to mainEl.
Hint: Use the Element.classList API.
*/

let mainEl = document.querySelector('main')
console.log(mainEl);

mainEl.style.backgroundColor = `var( --main-bg)`;

mainEl.innerHTML = `<h1> DOM Manipulation </h1>`

mainEl.classList.add('flex-ctr')


// Part 2

// let topmenuEl = document.getElementById

// topmenuEl.style.height = 100%

// topmenuEl.style.backgroundColor = `var(--topmenuEl-)`;


menulinks.forEach((Link) => {
let newAnchor = document.createElement('a')

newAnchor.setAttribute('href', )
});




