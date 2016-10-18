// 1. Count the number of records in the "Current Quarter Details" table.
var rows = document.querySelectorAll('tbody tr')
console.log(rows.length)

// 2. Set each dashboard image to different images, one for each season. Make sure you also set the alt="" attribute with an appropriate description.
var images = document.querySelectorAll('.placeholders img')
images[0].setAttribute('src', 'http://unsplash.it/200?image=1')
images[0].setAttribute('alt', 'Winter Image')
images[1].setAttribute('src', 'http://unsplash.it/200?image=2')
images[1].setAttribute('alt', 'Spring Image')
images[2].setAttribute('src', 'http://unsplash.it/200?image=3')
images[2].setAttribute('alt', 'Summer Image')
images[3].setAttribute('src', 'http://unsplash.it/200?image=4')
images[3].setAttribute('alt', 'Fall Image')


// 3. Below each dashboard image, there's a season/quarter name. Below those, there are three dots. Replace those three dots with a randomly generated number formatted as currency, like $12,589.00.
var subTitles = document.querySelectorAll('.placeholders span')
function makeRandomAmount() {
    return '$' + Math.round(Math.random() * 100000) + '.00'
}
subTitles.forEach(function(subTitle){
    subTitle.innerHTML = makeRandomAmount()
})


// 4. Change the currently selected left side menu item from Overview to Reports.
document.querySelector('.nav-sidebar li:nth-child(1)').classList.remove('active')
document.querySelector('.nav-sidebar li:nth-child(2)').classList.add('active')

// alternative way
var navItems = document.querySelectorAll('.nav-sidebar li')
navItems[0].classList.remove('active')
navItems[1].classList.add('active')

// 5. Set the default search input value to "Q4 sales".
document.querySelector('.navbar-form input').value = 'Q4 sales'
//console.dir(document.querySelector('.navbar-form input'))
document.querySelector('.navbar-form input').setAttribute('value', 'Q4 sales')

// 6. Add the "table-hover" class to the table. See the Bootstrap table docs.
document.querySelector('table').classList.add('table-hover')


// 7. Add the "success" class to the 7th - 10th row of the table, like: <tr class="success">...</tr>
var rows = document.querySelectorAll('tbody tr')
rows = Array.from(rows)

function filterRows(row, index) {
    return (index >= 7 && index <= 10)
}

rows = rows.filter(filterRows)

rows.forEach(function(row) {
    row.classList.add('success')
})

// alternative way
var rows = document.querySelectorAll('tbody tr')
rows.forEach(function(row, i) {
    console.log(row)
    if (i >= 7 && i <= 10) {
        row.classList.add('success')
    }
})


// 8. Change the table header names to: ID, First Name, Last Name, Department, Client.
var headers = document.querySelectorAll('thead th')
headers.forEach(function(header, i) {
    var headerLabels = ['ID', 'First Name', 'Last Name', 'Department', 'Client']
    header.innerHTML = headerLabels[i]
})

// alternative, long hand way
headers[0].innerHTML = 'ID'
headers[1].innerHTML = 'First Name'
headers[2].innerHTML = 'Last Name'
headers[3].innerHTML = 'Department'
headers[4].innerHTML = 'Client'


// 9. Make an array of objects, each object representing a single row in the table. Remove the commas from the ID column and convert it to an actual Number data type. Example: [{id: 1001, firstName: 'Lorem', lastName: 'ipsum', department: 'dolor', client: 'sit'}]
var rowsArray = []
var rows = document.querySelectorAll('tbody tr')

rows.forEach(function(row) {
    var rowObject = {
        id: Number(row.children[0].innerHTML.replace(',', '')),
        firstName: row.children[1].innerHTML,
        lastName: row.children[2].innerHTML,
        department: row.children[3].innerHTML,
        client: row.children[4].innerHTML,
    }
    rowsArray.push(rowObject)
})
console.log(rowsArray)

// alternative way
var rows = document.querySelectorAll('tbody tr')
rows = Array.from(rows).map(function(row) {
    return {
        id: Number(row.children[0].innerHTML.replace(',', '')),
        firstName: row.children[1].innerHTML,
        lastName: row.children[2].innerHTML,
        department: row.children[3].innerHTML,
        client: row.children[4].innerHTML,
    }
})
console.log(rows)

// 10. Make each word in the table capitalized.
var cells = document.querySelectorAll('tbody td')
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
}
cells.forEach(function(cell) {
    //cell.classList.add('text-capitalize')
    //cell.style.textTransform = 'capitalize'
    cell.innerHTML = capitalize(cell.innerHTML)
})


//
