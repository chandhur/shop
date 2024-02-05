import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-feed-back',
  templateUrl: './feed-back.component.html',
  styleUrl: './feed-back.component.css'
})
export class FeedBackComponent {

  form:FormGroup = this.fb.group({

    from_name :"",
    to_name:"chandhuru varatharaj",
    from_email:"",
    subject:"",
    message:""


  });

  constructor(private fb:FormBuilder) { }

   async send(){
    emailjs.init("GRv37OUjtUVVguMzb");
   let response=await emailjs.send("service_7nw9lda","template_c6siho5",{
        from_name: this.form.value.from_name,
        to_name:this.form.value.to_name,
        from_email: this.form.value.from_email,
        subject: this.form.value.subject,
        message: this.form.value.message,
        });


        alert("done")
     console.log(this.form)

    }

  
  }
