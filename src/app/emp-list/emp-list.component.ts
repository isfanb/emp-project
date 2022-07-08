import { EmpDataService } from './../emp-data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Interface } from './emp-interface';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  formValue !: FormGroup;
  getEmpDataFull !: any;
  empDataObject : Interface = new Interface();
  constructor(
    private _formBuilder: FormBuilder,
    private _empData : EmpDataService
    ) { }

  ngOnInit(): void {
    this.formValue = this._formBuilder.group({
      username: [''],
      firstName: [''],
      lastName: [''],
      email: [''],
      birthDate: [''],
      basicSalary: [''],
      status: [''],
      group: [''],
      description: ['']
    })

    this.getEmpData();
  }

  postEmpData() {
    this.empDataObject.username = this.formValue.value.username;
    this.empDataObject.firstName = this.formValue.value.firstName;
    this.empDataObject.lastName = this.formValue.value.lastName;
    this.empDataObject.email = this.formValue.value.email;
    this.empDataObject.birthDate = this.formValue.value.birthDate;
    this.empDataObject.basicSalary = this.formValue.value.basicSalary;
    this.empDataObject.status = this.formValue.value.status;
    this.empDataObject.group = this.formValue.value.group;
    this.empDataObject.description = this.formValue.value.description;
    
    this._empData.postData(this.empDataObject).subscribe(res => {
      console.log(res)
      alert('berhasil')
      let ref = document.getElementById('cancel');
      ref?.click();
      this.formValue.reset();
      this.getEmpData();
      },
      error => {
        alert('gagal')
      } 
    )
  }

  getEmpData() {
    this._empData.getData().subscribe(res => {
      this.getEmpDataFull = res;
    })
  }
}
