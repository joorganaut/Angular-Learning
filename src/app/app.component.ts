import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}
export class Power{
  Name: string;
  Strength: number;
}
const windstormPowers: Power[] = [
    {Name: 'Lazer Eyes', Strength : 200},
    {Name: 'Blaster', Strength : 3000},
    {Name: 'Speed', Strength : 12000},
     ];
     
@Component({
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .powers {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .powers li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .powers li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .powers li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .powers .text {
    position: relative;
    top: -3px;
  }
  .powers .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
  p.55f72dec-495e-4670-a25e-c3f9efc75648
	{margin-bottom:.0001pt;
	font-size:12.0pt;
	font-family:Arial,serif;
	        margin-left: 0in;
            margin-right: 0in;
            margin-top: 0in;
        }
`],
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name">
    </div>
    <h2>{{hero.name}} Abilities!</h2>
    <div *ngIf="selectedPower">
    <h2>Abilities: {{selectedPower.Name}}</h2>
    </div>
<ul class="powers">
  <li *ngFor="let pwr of powers" 
  [class.selected]="power === selectedPower"
  (click)="onSelect(pwr)">
  <span class="badge">{{pwr.Name}}</span> {{pwr.Strength}}
</li>
</ul>
 <p class="55f72dec-495e-4670-a25e-c3f9efc75648" style="font-family: Arial, sans-serif; font-weight: normal">
        Dear Valued Customer,
    </p>
    <p class="55f72dec-495e-4670-a25e-c3f9efc75648" style="font-family: Arial, sans-serif; font-weight: normal">
        We acknowledge receipt of your Claim request and your claim will be duly processed.
    </p>
    <p class="55f72dec-495e-4670-a25e-c3f9efc75648" style="font-family: Arial, sans-serif; font-weight: normal">
        Your Tracking Number is: Tracking Do not hesitate to contact us via <strong>0700MYCLAIMS</strong> for further enquiries.
    </p>
    <p class="55f72dec-495e-4670-a25e-c3f9efc75648" style="font-family: Arial, sans-serif; font-weight: normal">
        This is also to confirm the use one of our <strong>Partner Garages </strong>Garage<strong>.</strong></p>
    <p class="55f72dec-495e-4670-a25e-c3f9efc75648" style="font-family: Arial, sans-serif; font-weight: normal">
        Thank you. <br />
        <br />
        <br />
        Regards.
    </p>
    `
})
export class AppComponent {
  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  powers = windstormPowers;
  selectedPower: Power;
  onSelect(power: Power): void {
  this.selectedPower = power;
}
}
