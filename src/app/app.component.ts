import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'navbar-angular';

  user = {
    DOB: '01/05/2001',
    Name: 'Nazim',
    lastname: 'Chishti',
    salary: 5000
  }
}
