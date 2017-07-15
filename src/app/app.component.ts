import { Component } from '@angular/core';
import { DataService } from './data.service';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  template: `


  <p>{{someProperty}}</p>



  <h1 [style.color]="titleStyle ? 'green': 'pink'">Hey guys!</h1>
  <h2 [ngStyle]="titleStyle1">How do you do!</h2>
  <h2 [class]="titleClass">How do you do?</h2>

  <div *ngIf= "myArr; then tmpl1 else tmpl2"></div>
  <ng-template #tmpl1>Truth</ng-template>
  <ng-template #tmpl2>False</ng-template>

  <ul><li *ngFor="let item of myArr1">{{item}}</li></ul>

  <div *ngFor="let key of keysGetter(items)">{{key + ' : ' + items[key]}}</div>

  <img src="{{ angularLogo }}">
  <img [src]="angularLogo">
  <img bind-src="angularLogo">

  <button [disabled]="buttonStatus == 'enabled'">My Button</button>

  <button (click)="myEvent($event)">Click Event Button</button>
  <button (mouseenter)="myEvent($event)">MouseEnter Event Button</button>
  `,
  styles: [`
    h1 {
        text-decoration:underline;
    }
    .blue-title{
        color: blue;
    }
    p{
      width:200px;
      background: lightgray;
      margin: 100px auto;
      text-align:center;
      padding: 20px;
      font-size:1.5em;
    }
`],
 animations: [
    trigger('myAwesomeAnimation', [
        state('small', style({
            transform: 'scale(1)',
        })),
        state('large', style({
            transform: 'scale(1.2)',
        })),
        transition('small => large', animate('100ms ease-in')),
    ]),
  ]
})
export class AppComponent {
    
  state: string = 'small';

  animateMe() {
        this.state = (this.state === 'small' ? 'large' : 'small');
  }
    
  myArr = true;
  myArr1 = [ 'his' , 'her' , 'your' ];
  keysGetter = Object.keys;
  items = {keyOne: 'value 1', keyTwo: 'value 2', keyThree: 'value 3'};

  angularLogo = 'https://angular.io/assets/images/logos/angular/angular.png';
  buttonStatus = 'enabled';

  myEvent(event){
      console.log(event);
  }
    
  titleStyle = true;
  titleStyle1 = {
      'color': 'red',
      'font-size': '4em'
  }
  titleClass = 'blue-title';
    
  constructor(private dataService:DataService){
      
  }
  someProperty:string = '';
  ngOnInit(){
      console.log(this.dataService.cars);
      
      this.someProperty=this.dataService.myData();
  }
}
