const hamburger = document.querySelector('.hamburger')
const hidden = document.querySelector('.cover')
const form = document.querySelector('.form')
const url =document.querySelector('#url')
const copy = document.querySelector('.copy')
const shortened = document.querySelector('#short')
const answer = document.querySelector('.answer')
hamburger.addEventListener('click', openHidden)

function openHidden(){
    hidden.classList.toggle("hidden")
}

const results = document.createElement('div')
function result(url){
    fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
    .then(res => res.json())
    .then(data =>{
        
        var data= data
        results.innerHTML = `<div class="result">
        <div class="sent">${data.result.original_link}</div>
        <div class="shortened" id="short"><div>${data.result.short_link}</div>
        <div class="copy-wrapper"></div><a href="#" class="copy" onClick= "copyLink()">Copy</a></div>
        </div>`
        answer.appendChild(results)
        
        
 
    })
    
   
 }


form.addEventListener('submit', submit)

function submit(e){
   e.preventDefault()
    if(url.value.length === 0){
        url.style.outline = "solid 1px hsl(0, 87%, 67%)"
        alert('PLease input a link')
    }else{
        result(url.value)
        
        
    }

}


copy.addEventListener('click', copyLink)

function copyLink(data){
    navigator.clipboard.writeText(data.result.short_link)
}







