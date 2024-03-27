import { Component } from '@angular/core';
import {CardComponent} from "../components/card/card.component";
import {NgForOf} from "@angular/common";
import {OnlyTextComponent} from "../components/only-text/only-text.component";
import {FooterComponent} from "../containers/footer/footer.component";
import {JoinUsFormComponent} from "../components/join-us-form/join-us-form.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CardComponent,
    NgForOf,
    OnlyTextComponent,
    FooterComponent,
    JoinUsFormComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  public cards = [
    {
      name: 'arma 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A commodi consequatur et excepturi facilis impedit iste laboriosam magnam',
      imgUri: ''
    }
  ]

}
