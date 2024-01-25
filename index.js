const beer = document.getElementById("beerName");
const type = document.getElementById("beerType");
const alcohol = document.getElementById("beerAlcohol");
const origin = document.getElementById("beerOrigin");
const rating = document.getElementById("beerRating");
const button =document.getElementById("button");
const url = 'https://cors-anywhere.herokuapp.com/https://beer-app-cffs.onrender.com/beers';
const proxyUrl = 'https://cors-anywhere.herokuapp.com';
let newData = [];

let postNum =0;
  
// const getInfo = async () => {
//     const res = await axios.get('https://api.punkapi.com/v2/beers')
// }

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
origin.innerText=post[postNum].origin;
rating.innerText=post[postNum].rating;
alcohol.innerText=post[postNum].alcohol;
})

};

function nextBeer(){
    postNum++;
    // if (postNum>=newData.length){
    //     postNum=0
    // }
    console.log(postNum)
    beer.innerText=newData[postNum].name;
    type.innerText=newData[postNum].type;
    origin.innerText=newData[postNum].origin;
    rating.innerText=newData[postNum].rating;
    alcohol.innerText=newData[postNum].alcohol;
}



getInfo()



button.addEventListener('click', nextBeer);
