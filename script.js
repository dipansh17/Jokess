fetch('https://icanhazdadjoke.com/slack')
    .then(data => data.json())
    .then(jokeData => {
        const jokeText = jokeData.attachments[0].text;
        const jokeElement = document.getElementById('jokeElement');

        jokeElement.innerHTML = jokeText;
    })

// fetch('https://icanhazdadjoke.com/slack')
//  .then(data =>data.json())
//  .then(jokeData =>{
//     const jokeText=jokeData.attachements[0].text;
//     const jokeElement=document.getElementById('jokeElement');
//     jokeElement.innerHTML=jokeText;
// })
// // function get_joke_of_the_day() {
// //     var xhttp = new XMLHttpRequest();
// //     xhttp.onreadystatechange = function() {
// // 	 if (this.readyState == 4 && this.status == 200) {
// // 	     // Access the result here
// // 	     alert(this.responseText);
// // 	 }
// //     };
// //     xhttp.open("GET", "https://api.jokes.one/jod/categories", true);
// //     xhttp.setRequestHeader("Content-type", "application/json");
// //     xhttp.setRequestHeader("X-JokesOne-Api-Secret", "YOUR API HERE");
// //     xhttp.send();
// // }

// // get_joke_of_the_day()
