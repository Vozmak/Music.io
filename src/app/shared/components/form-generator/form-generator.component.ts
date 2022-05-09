import { Component, Input, OnInit } from '@angular/core';
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

  public form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    if (this.formField) {
      this.form = this.#formGenerator();
    }
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
