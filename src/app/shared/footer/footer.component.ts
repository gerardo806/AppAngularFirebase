import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  standalone: true,
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  private year: number = new Date().getFullYear();

  getYear(): number {
    return this.year;
  }

}
