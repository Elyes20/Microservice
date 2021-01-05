import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Compagnie } from '../compagnie';
import { CompagnieService } from '../compagnie.service';

@Component({
  selector: 'app-create-compagnie',
  templateUrl: './create-compagnie.component.html',
  styleUrls: ['./create-compagnie.component.css']
})
export class CreateCompagnieComponent implements OnInit {
  compagnie: Compagnie=new Compagnie (0,"","");
  submitted=false;
  constructor(private compagnieService:CompagnieService,
    private router: Router) { }

  ngOnInit() {
  }
 newCompagnie():void{
   this.submitted=false;
   this.compagnie=new Compagnie(0,"","");
 }
 save(){
   this.compagnieService.createCompagnie(this.compagnie).subscribe((data: any)  =>{
     console.log(data)
     this.compagnie = new Compagnie(0,"","");
     this.gotoList();
   },
     (   error: any) => console.log(error)); 
}
onSubmit(){
  this.submitted=true;
  this.save();
}
gotoList(){
  this.router.navigate(['/compagnies']);
}
}