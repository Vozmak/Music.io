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
  @Input() buttonIcon: string;
  @Input() buttonDisabled: boolean = false;

  @Output() onChangeValue: EventEmitter<string> = new EventEmitter<string>();
  @Output() onClickButton: EventEmitter<Event> = new EventEmitter<Event>();

  constructor() { }

  ngOnInit(): void {
  }

  public onChange(event: string): void {
    this.onChangeValue.emit(event);
  }

  public buttonClick(event: Event): void {
    this.onClickButton.emit(event);
  }
}
