const joke = document.querySelector('.joke');
const btn = document.querySelector('button');
const url = "https://api.chucknorris.io/jokes/random";
function getFact()
{
    joke.classList.remove('fade');
    fetch(url).then(data => data.json())
    .then(item=>{
        joke.textContent=`${item.value}`;
        joke.classList.add('fade');
    })
}

getFact();
btn.addEventListener('click',getFact);