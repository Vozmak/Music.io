import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NbButtonModule, NbFormFieldModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';



@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
  ],
  exports: [
    InputComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    NbInputModule,
    NbButtonModule,
    NbFormFieldModule,
    NbIconModule,
    FormsModule,
  ],
})
export class SharedModule { }
