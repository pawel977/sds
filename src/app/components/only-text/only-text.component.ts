import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-only-text',
  standalone: true,
  imports: [],
  templateUrl: './only-text.component.html',
  styleUrl: './only-text.component.scss'
})
export class OnlyTextComponent {
  @Input()
  public tite: string = '';
  @Input()
  public uri: string = '';

}
