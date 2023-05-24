const joke = document.querySelector('.joke');
const btn = document.querySelector('button');
const url = "https://api.chucknorris.io/jokes/random";
function getFact()
{
    fetch(url).then(data => data.json())
    .then(item=>{
        joke.textContent=`${item.value}`;
    })
}

getFact();
btn.addEventListener('click',getFact);