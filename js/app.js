// Get all tge parts of body and store them in a variable
var rLeg = document.getElementById("r-leg");
var lLeg = document.getElementById("l-leg");
var Legs = document.getElementById("leg");
var chest = document.getElementById("chest");
var rHand = document.getElementById("r-hand");
var lHand = document.getElementById("l-hand");
var head = document.getElementById("head");

// Get the modal background
var modalBg = document.getElementById("modal-bg")

// Close button script
var closeBtn = document.getElementById("modal-close");

// Get text for translation
var engTxt = document.getElementById('eng-text');
var yorTxt = document.getElementById("yor-text");

// function for modal visibility
rLeg.addEventListener("click",function(){
    modalBg.classList.add('modal-view');
    engTxt.innerHTML = "Right Leg";
    yorTxt.innerHTML = "ẹsẹ ọtun";
});

lLeg.addEventListener("click",function(){
    modalBg.classList.add('modal-view');
    engTxt.innerHTML = "Left Leg";
    yorTxt.innerHTML = "ẹsẹ osi";
});

Legs.addEventListener("click",function(){
    modalBg.classList.add('modal-view');
    engTxt.innerHTML = "Legs";
    yorTxt.innerHTML = "ẹsẹ";
});

chest.addEventListener("click",function(){
    modalBg.classList.add('modal-view');
    engTxt.innerHTML = "Body";
    yorTxt.innerHTML = "Ara";
});
rHand.addEventListener("click",function(){
    modalBg.classList.add('modal-view');
    engTxt.innerHTML = "Right Hand";
    yorTxt.innerHTML = "Ọwọ ọtún ";
});
lHand.addEventListener("click",function(){
    modalBg.classList.add('modal-view');
    engTxt.innerHTML = "Left Hand";
    yorTxt.innerHTML = "Ọwọ òsi ";
});
head.addEventListener("click",function(){
    modalBg.classList.add('modal-view');
    engTxt.innerHTML = "Head";
    yorTxt.innerHTML = "Ori";
});


// Close button function
closeBtn.addEventListener("click",function(){
    modalBg.classList.remove("modal-view");
});
