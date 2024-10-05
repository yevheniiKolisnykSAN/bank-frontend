import {Component, input} from '@angular/core'
import {BasicInputComponent, BasicInputType} from "./basic-input/basic-input.component"
import {InputTextModule} from "primeng/inputtext"
import {AbstractControl, ReactiveFormsModule} from "@angular/forms"
import {FormControlPipe} from "../pipes/form-control.pipe"
import {JsonPipe, NgClass, NgStyle} from "@angular/common"
import {PasswordInputComponent} from "./password-input/password-input.component"

@Component({
  selector: 'app-controls',
  standalone: true,
  imports: [
    InputTextModule,
    BasicInputComponent,
    ReactiveFormsModule,
    FormControlPipe,
    NgClass,
    JsonPipe,
    NgStyle,
    PasswordInputComponent
  ],
  templateUrl: './controls.component.html',
  styleUrl: './controls.component.scss'
})
export class ControlsComponent {

  type = input<ControlsType>('text')
  label = input<string>()
  control = input.required<AbstractControl>()
  id = input<string>(Math.random().toString(36).substring(7))
}

export type ControlsType = BasicInputType | 'password';
