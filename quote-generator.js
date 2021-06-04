const url = 'https://api.quotable.io/random';

setInterval(() => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => (document.getElementById('quote').innerHTML = data.content))
    .catch((err) => console.log(err));
}, 10000);
