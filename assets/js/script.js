const typedTextSpan = document.querySelector(".Rewriter");

const textArray = ["I'm Pankaj Pant","I'm Web Designer","I'm Looking For Job"];
const typingDelay = 200;
const erasingDelay= 100; 
const newTextDelay= 2000; 
let textArrayIndex = 0; 
let charIndex = 0; 

function type(){
    if(charIndex < textArray[textArrayIndex].length){
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type,typingDelay)
    }
    else{
        setTimeout(erase,newTextDelay)
    }
}

function erase(){
    if (charIndex > 0){
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0,charIndex-1);
        charIndex--;
        setTimeout(erase,erasingDelay);
    }

    else{
        textArrayIndex++;
        if(textArrayIndex>=textArray.length) textArrayIndex=0;
        setTimeout(type, typingDelay + 1100);
    }
}
document.addEventListener("DOMContentLoaded", function(){
    setTimeout(type,newTextDelay + 250)
})




function formvalidation(){
    let validate = document.forms["mailSender"]["fName"].value;
    if (validate === ''){
        alert("form bhar bsdk");
    } 
}

const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const tabId = button.getAttribute('data-tab');
    
    tabContents.forEach(content => {
      content.style.display = 'none';
    });
    
    const tabContent = document.getElementById(tabId);
    tabContent.style.display = 'block';
  });
});