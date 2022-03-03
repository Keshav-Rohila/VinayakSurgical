document.getElementById("year").innerHTML = new Date().getFullYear();

const form = document.getElementById("contactUs-form");
const infoBtn = document.querySelectorAll(".item-desc-btn");

if (window.innerWidth <= 600){
    for(var i = 0; i < infoBtn.length; i++){
        infoBtn[i].style.visibility = "visible";
        var desc = document.getElementsByClassName("desc-para-" + (i+1));
        desc[0].style.visibility = "hidden";
        desc[0].style.margin = "0px";
        desc[0].style.height = "0px";
    }
}

for(var i = 0; i < infoBtn.length; i++ ){
    infoBtn[i].addEventListener("click", (e) => {
        n = parseInt(e.target.getAttribute("data-num"));
        var desc = document.querySelector(".desc-para-" + (n));

        if(desc.style.visibility == "hidden"){
            infoBtn[n-1].textContent = "<<less info";
            desc.style.height = "auto";
            desc.style.marginBottom = "15px";
            desc.style.visibility = "visible";
        }else {
            infoBtn[n-1].innerHTML = ">>more info";
            desc.style.height = "0";
            desc.style.merginBottom = "0"
            desc.style.visibility = "hidden";
        }
    });
}


function submissionSuccess(){
    var status = document.getElementById("status");
    status.innerHTML = "Thanks! for contacting us we will call you soon.";
    status.classList.toggle("success");
}

function submissionError(){
    var status = document.getElementById("status");
    status.innerHTML = "oops! something went wrong. please try again";
    status.classList.toggle("error");
}

function sendEmail() {

    const name = document.getElementById("name").value;
    const email = document.getElementById("e-mail").value;
    const number = document.getElementById("number").value;
    const requirements = document.getElementById("message").value;

    const parameters = {
        to_name: "Vinayak",
        from_name: name,
        email: email,
        number: number,
        requirements: requirements,
    }
    emailjs.send("service_3xtri76", "template_upip3tc", parameters)
    .then((res) => {
        if(res.status == 200){
            submissionSuccess();
        }else {
            submissionError();
        }
    })
}

