import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'jesus';
  public nameUpper: string = 'JESUS';
  public fullName: string = 'JesUs GUerrERo';

  public customDate: Date = new Date();

}
