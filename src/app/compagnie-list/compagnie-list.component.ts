import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Compagnie } from '../compagnie';
import { CompagnieService } from '../compagnie.service';

@Component({
  selector: 'app-compagnie-list',
  templateUrl: './compagnie-list.component.html',
  styleUrls: ['./compagnie-list.component.css']
})
export class CompagnieListComponent implements OnInit {
  compagnies!: Observable<Compagnie[]>;

  constructor(private compagnieService: CompagnieService, 
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  } 
  reloadData(){
    this.compagnies = this.compagnieService.getCompagniesList();
  }
 deleteCompagnie (compagnieId:number)
 {
   this.compagnieService.deleteCompagnie(compagnieId).subscribe(
     (data:any)=>{
       console.log(data);
       this.reloadData();
     },
     (error:any)=> console.log(error));
   
 }
 compagnieDetails(compagnieId:number)
 {
   this.router.navigate(['details', compagnieId]);
 }
}
