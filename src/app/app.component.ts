import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cryptoApp';
  selectedCurrency : string = "USD"

  constructor(){  }

  sendCurrency(event:string){
    console.log(event);
  }
}
