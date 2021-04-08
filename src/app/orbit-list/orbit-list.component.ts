import { Component, OnInit, Input} from '@angular/core';
import { Satelite } from '../sattelite';
@Component({
  selector: 'app-orbit-list',
  templateUrl: './orbit-list.component.html',
  styleUrls: ['./orbit-list.component.css']
})

export class OrbitListComponent implements OnInit {
  @Input() satellites: Satelite[];
  alternateColor: string = 'red'
  changeColor : boolean = false;

  constructor() { 

  }

  ngOnInit(): void {

  }
  sort(column: string): void {
    // array.sort modifies the array, sorting the items based on the given compare function
    this.satellites.sort(function(a: Satelite, b: Satelite): number {
       if(a[column] < b[column]) {
          return -1;
       } else if (a[column] > b[column]) {
          return 1;
       }
       return 0;
    });
 }

}
