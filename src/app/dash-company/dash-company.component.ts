import { Component,OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dash-company',
  templateUrl: './dash-company.component.html',
  styleUrls: ['./dash-company.component.css']
})
export class DashCompanyComponent implements OnInit {
jobs:any;
information:any
constructor(private data:DataService){}

ngOnInit(): void {
  const info= localStorage.getItem('infoCompany')
if(info){
this.information = JSON.parse(info)
}

  this.data.getJobCompanyId(this.information.company_id).subscribe( (response)=>{this.jobs=response})
}

delete(job_id:number){
this.data.deleteJob(job_id).subscribe();
window.location.reload()
}

}
