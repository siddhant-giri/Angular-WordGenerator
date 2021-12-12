import { Component } from '@angular/core';
import arrayWords from "../utils/words"
import countryWords from "../utils/countries";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';

  words = '';
  limit = 10;


  handleSlideChange(newLimit: number){
      this.limit = newLimit;
  }

  generate(){
    this.words = arrayWords.slice(0, this.limit).join(" ");
  }


  climit = 8;
  cwords = '';
  handleCSlide(newCLimit: number){
      this.climit = newCLimit;
  }

  

  generateCountry(){
   
    this.cwords = countryWords.sort(() => 0.5 - Math.random()).slice(0, this.climit).join(" ");
  }



}
