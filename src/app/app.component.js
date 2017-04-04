"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());
exports.Hero = Hero;
var Power = (function () {
    function Power() {
    }
    return Power;
}());
exports.Power = Power;
var windstormPowers = [
    { Name: 'Lazer Eyes', Strength: 200 },
    { Name: 'Blaster', Strength: 3000 },
    { Name: 'Speed', Strength: 12000 },
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
        this.hero = {
            id: 1,
            name: 'Windstorm'
        };
        this.powers = windstormPowers;
    }
    AppComponent.prototype.onSelect = function (power) {
        this.selectedPower = power;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        styles: ["\n  .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .powers {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n  .powers li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .powers li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .powers li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .powers .text {\n    position: relative;\n    top: -3px;\n  }\n  .powers .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n  p.55f72dec-495e-4670-a25e-c3f9efc75648\n\t{margin-bottom:.0001pt;\n\tfont-size:12.0pt;\n\tfont-family:Arial,serif;\n\t        margin-left: 0in;\n            margin-right: 0in;\n            margin-top: 0in;\n        }\n"],
        selector: 'my-app',
        template: "\n    <h1>{{title}}</h1>\n    <h2>{{hero.name}} details!</h2>\n    <div><label>id: </label>{{hero.id}}</div>\n    <div>\n      <label>name: </label>\n      <input [(ngModel)]=\"hero.name\" placeholder=\"name\">\n    </div>\n    <h2>{{hero.name}} Abilities!</h2>\n    <div *ngIf=\"selectedPower\">\n    <h2>Abilities: {{selectedPower.Name}}</h2>\n    </div>\n<ul class=\"powers\">\n  <li *ngFor=\"let pwr of powers\" \n  [class.selected]=\"power === selectedPower\"\n  (click)=\"onSelect(pwr)\">\n  <span class=\"badge\">{{pwr.Name}}</span> {{pwr.Strength}}\n</li>\n</ul>\n <p class=\"55f72dec-495e-4670-a25e-c3f9efc75648\" style=\"font-family: Arial, sans-serif; font-weight: normal\">\n        Dear Valued Customer,\n    </p>\n    <p class=\"55f72dec-495e-4670-a25e-c3f9efc75648\" style=\"font-family: Arial, sans-serif; font-weight: normal\">\n        We acknowledge receipt of your Claim request and your claim will be duly processed.\n    </p>\n    <p class=\"55f72dec-495e-4670-a25e-c3f9efc75648\" style=\"font-family: Arial, sans-serif; font-weight: normal\">\n        Your Tracking Number is: Tracking Do not hesitate to contact us via <strong>0700MYCLAIMS</strong> for further enquiries.\n    </p>\n    <p class=\"55f72dec-495e-4670-a25e-c3f9efc75648\" style=\"font-family: Arial, sans-serif; font-weight: normal\">\n        This is also to confirm the use one of our <strong>Partner Garages </strong>Garage<strong>.</strong></p>\n    <p class=\"55f72dec-495e-4670-a25e-c3f9efc75648\" style=\"font-family: Arial, sans-serif; font-weight: normal\">\n        Thank you. <br />\n        <br />\n        <br />\n        Regards.\n    </p>\n    "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map