import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl   } from '@angular/forms';

@Component({
  selector: 'app-first-page',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './first-page.component.html',
  styleUrl: './first-page.component.css'
})
export class FirstPageComponent {

  public savedText: string = "Starting Text";
  public formControl: FormControl = new FormControl();

  public onClick(): void {
    this.savedText = this.formControl.getRawValue();
  }
}
