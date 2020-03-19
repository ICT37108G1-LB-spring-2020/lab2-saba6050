import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  students: {name: string, lastname: string, status: string, id: number}[];

  constructor() {
    this.students = [
      {
        name: 'nikoloz',
        lastname: 'palagashvili',
        status: 'Student',
        id: '1231231231'
      },
      {
        name:'dato',
        lastname:'seiranovi',
        status:'student',
        id:'1231231231'
      },
      {
        name:'lasha',
        lastname:'tsevelidze',
        status:'Student',
        id:'1231231231'
      }

    ]
  }

  ngOnInit() {


  }


}
