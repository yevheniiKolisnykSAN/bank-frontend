import {
  Component,
  forwardRef, inject, Injector,
  input, OnInit, signal,
} from '@angular/core'
import {AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl} from "@angular/forms"
import {InputTextModule} from "primeng/inputtext"
import {NgClass} from "@angular/common"

@Component({
  selector: 'app-basic-input',
  standalone: true,
  imports: [
    InputTextModule,
    NgClass
  ],
  templateUrl: './basic-input.component.html',
  styleUrl: './basic-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BasicInputComponent),
      multi: true
    },
  ]
})
export class BasicInputComponent implements ControlValueAccessor, OnInit {
  injector: Injector = inject(Injector)

  type = input('text')
  controlId = input.required<string>()

  value = signal<string>('')
  isDisabled = signal<boolean>(false)
  control = signal<AbstractControl | null>(null)

  ngOnInit() {
    const injectedControl = this.injector.get(NgControl)
    this.control.set(injectedControl.control)
  }

  onChange: any = () => {
  }
  onTouch: any = () => {
  }

  writeValue(value: any): void {
    this.value.set(value)
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled.set(isDisabled)
  }

  updateValue(event: any) {
    this.value.set(event.target.value)
    this.onChange(this.value())
    this.onTouch()
  }
}

export type BasicInputType =
  'text' |
  'email';
