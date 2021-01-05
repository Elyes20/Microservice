import { Component, OnInit } from '@angular/core';
import { Avion } from '../avion';
import { AvionRegistrationService } from '../avion-registration.service';

@Component({
  selector: 'app-register-avion',
  templateUrl: './register-avion.component.html',
  styleUrls: ['./register-avion.component.css']
})
export class RegisterAvionComponent implements OnInit {

  avion : Avion = new Avion ("","",0);
  message:any;

  constructor(private service:AvionRegistrationService) { }

  ngOnInit(): void {
  }
public registerNow(){
let resp=this.service.doRegistration(this.avion);
resp.subscribe((data)=>this.message=data);
}
}
