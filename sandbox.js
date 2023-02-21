
const items = document.querySelectorAll('li');
items.forEach(item => {
    
    item.addEventListener('click', e => {
        console.log(`You removed ${e.target.innerText} from the list!`);
        e.target.style.textDecoration = 'line-through';
    })
});