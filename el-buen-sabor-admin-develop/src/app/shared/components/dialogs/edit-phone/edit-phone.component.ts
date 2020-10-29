import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-phone',
  templateUrl: './edit-phone.component.html',
  styleUrls: ['./edit-phone.component.scss']
})
export class EditPhoneComponent implements OnInit {

  public editPhoneForm: FormGroup;
  public hide = true;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.editPhoneForm = this.formBuilder.group({
      password: ['', Validators.required],
      telefono: ['', Validators.required],
    });
  }

}
