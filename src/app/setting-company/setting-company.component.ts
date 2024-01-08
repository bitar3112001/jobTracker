import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-setting-company',
  templateUrl: './setting-company.component.html',
  styleUrls: ['./setting-company.component.css']
})
export class SettingCompanyComponent {
  information:any
  users={
    id:"",
    name:"",
    email:"",
    location:"",
    password:"",  }
constructor(private data: DataService){}
    ngOnInit():void{
      const info= localStorage.getItem("infoCompany")
  console.log(info)
  if(info){
    this.information= JSON.parse(info);
    console.log(this.information)
    this.users={
      id:this.information.company_id,
      name:this.information.name,
      email:this.information.email,
      location:this.information.location,
      password:this.information.password
    }
  }else{
    console.log("Error");
  }
}
logOut(){
  localStorage.removeItem('infoCompany')
}
updatePass(password:string){
  this.data.updateCompany(parseInt(this.users.id),password).subscribe()
}

}
