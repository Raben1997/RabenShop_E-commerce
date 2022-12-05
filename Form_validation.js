let form=document.getElementById('myform');
let namee=document.getElementById('name');
let mail=document.getElementById('mail');
let subject=document.getElementById('subject');
let message=document.getElementById('message');
let error1=document.getElementById('error1');
let error2=document.getElementById('error2');
let error3=document.getElementById('error3');
let error4=document.getElementById('error4');


form.addEventListener('change',(eventt)=>{
  eventt.preventDefault();
  //   let validPass=RegExp('^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,15}$')
  let validname=RegExp('^[a-zA-Z]+ [a-zA-Z]+$')
  let validmail=RegExp('^([A-Za-z0-9.-]+)@([a-z]{5,15}).([a-z.]{2,20})$')
  let validsubject=RegExp('^[a-zA-Z]+ [a-zA-Z]+$')
  let validmessage=RegExp('^[a-zA-Z]+ [a-zA-Z]+$')


  // fullname validation
  
  if(namee.value === "")
  {
    error1.innerHTML="** This field is required field"
  }
  else if(!validname.test(namee.value))
  {
    error1.innerHTML='** Valid name given'
  }
  else
  {
    error1.innerHTML=" "
  }

    // mail validation
    if(mail.value === "")
    {
      error2.innerHTML="** This field is required field"
    }
    else if(!validmail.test(mail.value))
    {
      error2.innerHTML='** Valid email given'
    }
    else
    {
      error2.innerHTML=" "
    }

    //subject validation
    if(subject.value === "")
    {
      error3.innerHTML="** This field is required field"
    }
    else if(!validsubject.test(subject.value))
    {
      error3.innerHTML='** Please fill the subject'
    }
    else
    {
      error3.innerHTML=" "
    }

    //Message Validation
    if(message.value === "")
    {
      // document.namee.style.border="1px solid red"
      error4.innerHTML="** This field is required field"
    }
    else if(!validmessage.test(message.value))
    {
      error4.innerHTML='** Please fill the message'
    }
    else
    {
      error4.innerHTML=" "
    }
})