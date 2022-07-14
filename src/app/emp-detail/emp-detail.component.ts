import { EmpDataService } from './../emp-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.css']
})
export class EmpDetailComponent implements OnInit {

  dataEmpId !: any;
  detailData !: any;
  constructor(
    private _empData: EmpDataService,
    private _activeRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    this._activeRoute.paramMap.subscribe(res => {
      this.dataEmpId = res.get('dataId');
    })
    if(this.dataEmpId) {
      this._empData.getSingleData(this.dataEmpId).subscribe(res => {
        this.detailData = res;
      })
    }
  } 
}


