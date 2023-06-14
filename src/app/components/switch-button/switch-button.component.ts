import { Component } from '@angular/core';

@Component({
  selector: 'switch-button',
  templateUrl: './switch-button.component.html',
  styleUrls: ['./switch-button.component.scss']
})
export class SwitchButton {
  toggleSwitch(event: Event): void {
    const state = (event.currentTarget as HTMLInputElement).getAttribute('data-state');
    (event.currentTarget as HTMLInputElement).setAttribute('data-state', state === '0' ? '1' : '0');
  } 
}
