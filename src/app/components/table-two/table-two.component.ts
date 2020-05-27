import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

const ELEMENT_DATA1: PeriodicElement[] = [
  //{position: , name: , weight: , symbol: }
];


@Component({
  selector: 'app-table-two',
  templateUrl: './table-two.component.html',
  styleUrls: ['./table-two.component.scss']
})
export class TableTwoComponent implements OnInit {


  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  //dataSource = ELEMENT_DATA;
  //dataSource = ELEMENT_DATA1;

  dataSource = new MatTableDataSource();


  columnDefinitions = [
    {def: 'position', showTableOne: true, showTableTwo: true},
    {def: 'name', showTableOne: true, showTableTwo: true},
    {def: 'weight', showTableOne: false, showTableTwo: true},
    {def: 'symbol', showTableOne: false, showTableTwo: true},
    {def: 'update', showTableOne: true, showTableTwo: true},
    {def: 'delete', showTableOne: true, showTableTwo: true},
  ]

  currentDispaly = 'Nothing';

  @ViewChild(MatTable) table: MatTable<any>;

  constructor() { }

  ngOnInit(): void {
  }

  getDisplayedColumns(): string[] {
    const showTableOne = this.currentDispaly === 'showTableOne';
    const showTableTwo = this.currentDispaly === 'showTableTwo';
    
    if(showTableOne){
      return this.columnDefinitions.filter(cd => !showTableOne || cd.showTableOne)
        .map(cd => cd.def);
    }

    if(showTableTwo){
      return this.columnDefinitions.filter(cd => showTableOne || cd.showTableTwo)
        .map(cd => cd.def);
    }
  }

  updateTableOne(){
     if(this.dataSource.data.length <= 0){
       this.addRow();
     }
    this.currentDispaly = 'showTableOne';
  }

  updateTableTwo(){
     if(this.dataSource.data.length <= 0){
       this.addRow();
     }
    this.currentDispaly = 'showTableTwo';
  }

  addRow(){
    console.log("add row")
    this.dataSource.data.push({});
    this.table.renderRows();
  }
}
