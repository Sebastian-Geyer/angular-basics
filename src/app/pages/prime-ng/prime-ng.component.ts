import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prime-ng',
  standalone: true,
  imports: [ FormsModule, ButtonModule, InputTextModule ],
  templateUrl: './prime-ng.component.html',
  styleUrl: './prime-ng.component.css'
})
export class PrimeNgComponent {

  public savedText: string = "Starting Text";
  public textInputValue: string = "";

  public onClick(): void {
    this.savedText = this.textInputValue;
  }

}
