import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-join-us-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './join-us-form.component.html',
  styleUrl: './join-us-form.component.scss',
})
export class JoinUsFormComponent {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  })

  public onSubmit(): void {
    if(!this.form.valid) {
      this.form.markAllAsTouched();
    }
  };
}
