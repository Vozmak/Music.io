import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbFormFieldModule, NbIconModule, NbInputModule, NbUserModule } from '@nebular/theme';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { FormGeneratorComponent } from './components/form-generator/form-generator.component';



@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    UserCardComponent,
    FormGeneratorComponent,
  ],
  exports: [
    InputComponent,
    ButtonComponent,
    UserCardComponent,
    FormGeneratorComponent,
  ],
  imports: [
    CommonModule,
    NbInputModule,
    NbButtonModule,
    NbFormFieldModule,
    NbIconModule,
    FormsModule,
    NbUserModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule { }
