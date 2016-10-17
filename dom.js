var body = document.body
console.log(body)

var h1 = document.body.childNodes[1]
console.log(h1)

var helloWorld = h1.innerHTML
console.log(helloWorld)

h1.innerHTML = 'Hello Universe'

console.dir(h1)

var helloH1 = document.getElementById('hello')
console.log(helloH1)

var navItems = document.getElementsByClassName('nav-item')
console.log(navItems)

var navItems = document.querySelectorAll('body *')
console.log(navItems)

var helloH1 = document.querySelector('#hello')
console.log(helloH1)

// Convert NodeList to an Array data type
//console.log(Array.from(navItems).filter())

navItems.forEach(function(navItem) {
    //console.dir(navItem)
    //console.log(navItem.tagName)
    navItem.addEventListener('mouseover', function(e) {
        e.target.classList.add('red')
    })

    navItem.addEventListener('mouseout', function(e) {
        e.target.classList.remove('red')
    })

    navItem.addEventListener('click', function(e) {
        e.target.remove()
    })

    // if (navItem.tagName === 'LI' && navItem.classList.contains('active')) {
    //     //navItem.style.color = 'red'
    //     navItem.classList.add('red')
    // }
})

var navItems = document.querySelectorAll('.nav-item')

navItems.forEach(function(navItem) {

    console.log(navItem.id)
    console.log(navItem.tagName)
    console.log(navItem.className)
    console.log(navItem.getAttribute('title'))
    console.log(navItem.setAttribute('title', 'Foo'))
    console.log(navItem.getAttribute('data-details'))
    navItem.innerHTML = '<a href="http://google.com">' + navItem.getAttribute('data-details') + '</a>'
    console.log(navItem.innerHTML)


})

var searchInput = document.getElementById('search')
var searchInput = document.querySelector('#search')

// searchInput.forEach(function(input) {
//     input.setAttribute('value', 'test')
// })

searchInput.setAttribute('value', 'pizza parties in my area')
searchInput.value = 'movies near me'

alert(searchInput.value)
//alert(searchInput.getAttribute('value'))



//
