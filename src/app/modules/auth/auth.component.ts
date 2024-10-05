import {Component, OnInit} from '@angular/core'
import {CardModule} from "primeng/card"
import {CheckboxModule} from "primeng/checkbox"
import {Button} from "primeng/button"
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms"
import {BasicInputComponent} from "../../shared/controls/basic-input/basic-input.component"
import {ControlsComponent} from "../../shared/controls/controls.component"
import {InputTextModule} from "primeng/inputtext"

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    CardModule,
    CheckboxModule,
    Button,
    ReactiveFormsModule,
    BasicInputComponent,
    ControlsComponent,
    InputTextModule
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent implements OnInit {


  form: FormGroup

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    })
  }


  submit() {
    console.log('form', this.form.value)
  }
}
