import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { response } from 'express';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-comapy',
  templateUrl: './comapy.component.html',
  styleUrls: ['./comapy.component.css']
})
export class ComapyComponent implements OnInit {

  name:string="";
  error=""
  message=""
  arrayCompany:any=[{id:1,name:"sada",phone:"000000",email:"qwe@gmail.com",location:"saida"},
{id:2,name:"sada",phone:"0003000",email:"qwe@gmail.com",location:"saida"},
{id:3,name:"sada",phone:"00220000",email:"qwe@gmail.com",location:"beirut"},
{id:4,name:"sada",phone:"00011000",email:"qwe@gmail.com",location:"nabatieh"},]
constructor(private data: DataService){}

ngOnInit(): void {
  this.data.getAllCompany().subscribe((response)=>{this.arrayCompany=response})
}


onSearchInput(event:any){
// if(this.name){
//   this.data.getAllCompany().subscribe((response)=>{this.arrayCompany=response})
// }else{
  this.data.getCompanySearch(this.name).subscribe(
    {
      next: (response)=>{
  this.error=""
  this.message=""
  this.arrayCompany=response
  console.log(this.arrayCompany)
  },
  error: (error: any) =>{
        this.message="",
        this.error=error},
  complete: ()=>{}
    })
 // }

}



}
