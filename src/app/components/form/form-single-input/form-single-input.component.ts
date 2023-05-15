import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-single-input',
  templateUrl: './form-single-input.component.html',
  styleUrls: ['./form-single-input.component.css']
})

export class FormSingleInputComponent {

  @Input()
  shouldShowInput: boolean = true;

  @Input()
  labelName: string = "";
  
  @Input()
  inputType: any = "text";

  @Input()
  inputPlaceholder: any = "";

  @Input()
  formControlName!: string;

  @Input()
  buttonValue: string = "submit";

  @Input()
  buttonName: string = "Submit";

  @Output()
  onSubmit: EventEmitter<any> = new EventEmitter();

  formGroup = new FormGroup({
    "input": new FormControl()
  })
  
  emit() {
    this.onSubmit.emit(this.formGroup.value)
    console.log("FormSingleComponent: Submit formGroup: values = ");
    console.log(this.formGroup.value);
  }
}
