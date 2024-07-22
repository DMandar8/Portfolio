const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');

const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));


const cv=document.getElementById("cv");

cv.addEventListener("click", ()=>{
    const link = document.createElement('a');
            link.href = './images/MandarDeshmukh.pdf'; // Replace with the actual path to your PDF file
            link.download = 'Resume.pdf'; // The name the file will have when downloaded
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
});

const mail=document.getElementById("exampleFormControlInput1");

const form=document.getElementById("form");
const fname=document.getElementById("exampleFormControlFirstName");
const lname=document.getElementById("exampleFormLastName");
const txt=document.getElementById("exampleFormControlTextarea1");

function sendEmail(){

    const bodyMsg=`First Name: ${fname.value}<br> Last Name: ${lname.value}<br>Mail:
     ${mail.value}<br>Body: ${txt.value}`;


    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "mandardeshmukh863@gmail.com",
        Password : "D0D21717EE95D71F976FB149E7B8F34699BB",
        To : 'mandardeshmukh863@gmail.com',
        From : "mandardeshmukh863@gmail.com",
        Subject : "Mail from Porfolio Site",
        Body : bodyMsg,
    }).then(
      message => alert("Mail has been successfully Sent")
    );
}

form.addEventListener("submit", (e)=>{
    console.log("haoa");
    e.preventDefault();

    sendEmail();



    form.reset();
    
})


// mandardeshmukh863@gmail.com
// Password
// D0D21717EE95D71F976FB149E7B8F34699BB
// Copy
// Server
// smtp.elasticemail.com
// Port
// 2525