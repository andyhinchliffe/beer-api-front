const beer = document.getElementById("beerName");
const type = document.getElementById("beerType");
const button =document.getElementById("button");
const url = 'https://beer-app-cffs.onrender.com/beers';
let newData = [];

let postNum =0;
  

function getInfo(){ 
fetch(url)
.then(data => {
return data.json();

})
.then(post => {
    newData=post;
console.log(post)
console.log(newData)

beer.innerText=post[postNum].name;
type.innerText=post[postNum].type;
})

};

function nextBeer(){
    postNum++
    console.log(postNum)
    beer.innerText=newData[postNum].name;
    type.innerText=newData[postNum].type;
}



getInfo()



button.addEventListener('click', nextBeer);
