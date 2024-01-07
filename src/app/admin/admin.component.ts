import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
informationCompany:any;
informationUser:any
constructor(private data: DataService){}

ngOnInit(): void {
  this.data.getAllCompany().subscribe( (response)=>{this.informationCompany=response})
  this.data.getAllUser().subscribe((response)=>{this.informationUser=response})

}
deleteCompany(i:number){
this.data.deleteCompany(i).subscribe();
window.location.reload()

}


deleteUser(i:number){
this.data.deleteUser(i).subscribe(
);
window.location.reload()
}
}
