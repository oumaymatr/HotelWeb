import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NgZorroAntdModule } from '../../../../NgZorroAntdModules';
@Component({
  selector: 'app-post-room',
  templateUrl: './post-room.component.html',
  styleUrl: './post-room.component.scss',
  standalone: true,
  imports: [NgZorroAntdModule, ReactiveFormsModule],
})
export class PostRoomComponent {
  roomDetailsForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private message: NzMessageService,
    private router: Router,
  ){
    this.roomDetailsForm = this.fb.group({
      name:['', Validators.required],
      type:['', Validators.required],
      price:['', Validators.required]
    })
  }
  submitForm(){
    
  }
}