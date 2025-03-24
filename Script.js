const typed = new Typed('.multiple-Text',{
    strings:['Software Engineer', 'Data Analyst','Web Developer','Data Engineer','AI Researcher'],
    typeSpeed:73,
    backSpeed:73,
    backdelay:1000,
    loop:true, 
});


const scriptURL = 'https://script.google.com/macros/s/AKfycbwR9p_PpOY2iwbEDMSMUSMrUKVqT5rO9X6hlm2QP5CCAcIb3x0p8Pta7ElJk2bilMo/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML="Message Sent Successfully"
        setTimeout(function(){
            msg.innerHTML=""
        },3000)
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})
