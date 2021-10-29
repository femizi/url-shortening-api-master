const hamburger = document.querySelector('.hamburger')
const hidden = document.querySelector('.cover')
const form = document.querySelector('.form')
const url =document.querySelector('#url')
const copyBtn = document.querySelector('.copy')

const answer = document.querySelector('.answer')
mainBtn = document.querySelector('.main-btn')



// add event listener to hamburger
hamburger.addEventListener('click', openHidden)

function openHidden(){
    hidden.classList.toggle("hidden")
    hidden.classList.toggle("animate__fadeIn")
}

// Validate URl
function ValidateUrl(link) 
{
 var urlFormat = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
	if(link.match(urlFormat)) {
		return true;
	}
	else {
		return false;
	}
}
const results = document.createElement('div')
// call api
function result(url){
    fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
    .then(res => res.json())
    .then(data =>{
        if (data.ok){
        var data= data
        results.innerHTML = `<div class="result">
        <div class="sent">${data.result.original_link}</div>
        <div class="shortened" id="short"><div>${data.result.short_link}</div>
        <div class="copy-wrapper"></div><a href="#" class="copy" onClick="copyLink('${data.result.short_link}')">Copy</a></div>
        </div>`
        // create div 
        
        answer.appendChild(results)
        
        console.log(results.innerHTML.length)
        
    }else {
        alert('incorrect url')

    }
    mainBtn.innerHTML = "Shorten it!"
    
 
    })
  
  
 }


form.addEventListener('submit', submit)

function submit(e){
   e.preventDefault()
    if(ValidateUrl(url.value)){
        mainBtn.innerHTML = "Please wait..."
        result(url.value)
    }else{
        
        url.style.outline = "solid 1px hsl(0, 87%, 67%)"
        alert('PLease input a link')
        
    }

}


// copy to clipboard
function copyLink(data){
    navigator.clipboard.writeText(data)
    alert(`Your shortened Url "${data}" has been copied`)
}

