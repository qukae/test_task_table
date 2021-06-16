import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  [key: string]: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {address: '0.0.0./0', gateway: '193.0.174.1', interface: 'Ethernet Connetion', uuid: '', mask: ''},
  {address: '10.1.30.0/24', gateway: '0.0.0.0', interface: 'Guest Network', uuid: '', mask: ''},
  {address: '192.168.1.0/24', gateway: '0.0.0.0', interface: 'Home Network', uuid: '', mask: ''},
  {address: '193.0.174.0/24', gateway: '0.0.0.0', interface: 'Ethernet Connetion', uuid: '', mask: ''},
  {address: '193.0.175.0/25', gateway: '193.0.174.10', interface: 'Ethernet Connetion', uuid: '', mask: ''},
  {address: '193.0.175.22/32', gateway: '193.0.174.1', interface: 'Ethernet Connetion', uuid: '', mask: ''},
];

 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  displayedColumns: string[] = ['address', 'gateway', 'interface'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort)
   sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = (item: PeriodicElement, property): string | number => {
      if (property === 'gateway') {
        return item.address
      }
      return item[property];
      }
  };
}

