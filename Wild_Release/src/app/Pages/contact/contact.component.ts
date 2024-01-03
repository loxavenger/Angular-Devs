import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('slideInFromLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('1s ease-in-out', style({ transform: 'translateX(0%)' })),
      ]),
    ]),
  ],
})
export class ContactComponent implements OnInit {
  userForm!: FormGroup;
 
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {

    this.userForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", Validators.required, Validators.email],
      message: ["", Validators.maxLength(200)]
    })
  }

  loading = false;
  send = "../../../assets/icons/send.png"
  sendIcon = this.send;
  sendHover = "../../../assets/icons/sendHover.png";

  handleSubmit() {
    this.loading = true;
    this.userForm.reset()
  }

  changeSendIcon(icon: string) {
    this.sendIcon = icon;
  }

}

