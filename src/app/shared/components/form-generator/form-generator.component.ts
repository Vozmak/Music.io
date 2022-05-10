import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormField } from '../../../core/interfaces/form-field';

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.scss']
})
export class FormGeneratorComponent implements OnInit {

  @Input() formField: FormField[];
  @Input() labelIcon: string;
  @Input() buttonValue: string;

  @Output() onSubmit: EventEmitter<any> = new EventEmitter<any>();

  public form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    if (this.formField) {
      this.form = this.#formGenerator();
    }
  }

  submit(): void {
    this.onSubmit.emit(this.form.value);
  }

  #formGenerator(): FormGroup {
    const group: any = {};
    for (const field of this.formField) {
      const validator = field.required ? [Validators.required] : [];
      group[field.name] = new FormControl('', validator);
    }
    return new FormGroup(group)
  }
}
