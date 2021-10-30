let name = prompt('name ');
let age = +prompt('age');
if (age < 18 ){
    confirm(`${name} You are not allowed to visit this website?`)
} else if (age > 18 || age < 22){
    alert('Are you sure you want to continue?')
}
