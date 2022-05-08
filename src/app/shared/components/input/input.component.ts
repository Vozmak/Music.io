import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NbComponentOrCustomStatus, NbComponentShape, NbComponentSize } from '@nebular/theme';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() fullWidth: boolean = false;
  @Input() type: string = 'text';
  @Input() value: any = '';
  @Input() placeholder: string = 'Text';
  @Input() color: NbComponentOrCustomStatus = 'basic';
  @Input() fieldSize: NbComponentSize = 'small';
  @Input() shape: NbComponentShape = 'rectangle';
  @Input() icon: string;
  @Input() disabled: boolean = false;

  @Output() onChangeValue: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  public onChange(event: string): void {
    this.onChangeValue.emit(event);
  }

}
