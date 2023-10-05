let button = document.querySelector("button");
let quote = document.querySelector(".Quote");
let author = document.querySelector(".Author");
 
const Quote =[ {
    author: '– Emily Dickinson',
    quote :'"That it will never come again is what makes life so sweet."'
} 
,
{
    author:  '– George Eliot' ,
    quote :'"That it will never come again is what makes life so sweet."'
}
,
{
    author:  ' – Ralph Emerson' ,
    quote :'"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."'
}
,
{
    author:  ' – Haruki Murakami' ,
    quote :'"Pain is inevitable. Suffering is optional."'
}
,
{
    author:  '– William Shakespeare' ,
    quote :"'All the world's a stage, and all the men and women merely players.'"
}
,
{
    author:  '– Plato' ,
    quote :'"Be kind, for everyone you meet is fighting a hard battle."'
}
,
{
    author:  '– Emily Dickinson' ,
    quote :"'Unable are the loved to die for love is immortality.'"
}]

button.addEventListener("click",function(){
    let randomNumber=Math.floor( Math.random() * Quote.length);
   
    author.innerText= Quote[randomNumber].author;
    quote.innerText= Quote[randomNumber].quote;
    
})