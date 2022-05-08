import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NbButtonAppearance, NbComponentOrCustomStatus, NbComponentShape, NbComponentSize } from '@nebular/theme';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() size: NbComponentSize = 'small';
  @Input() color: NbComponentOrCustomStatus = 'basic';
  @Input() shape: NbComponentShape = 'rectangle';
  @Input() appearance: NbButtonAppearance = 'filled';
  @Input() fullWidth: boolean = false;
  @Input() icon: string;
  @Input() value: string;
  @Input() disabled: boolean = false;

  @Output() onButtonClick: EventEmitter<Event> = new EventEmitter<Event>();

  constructor() { }

  ngOnInit(): void {
  }

  public onClick(event: Event): void {
    this.onButtonClick.emit(event);
  }
}
