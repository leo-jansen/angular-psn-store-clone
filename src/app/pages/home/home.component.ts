import { Component, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: { id: number; name: string; price: string; pathImg: string; gameLabel: string; gameType: string}[] = [{ id: 0, name: '', price: '', pathImg: '', gameLabel: '', gameType: ''}] 
  constructor() { }

  ngOnInit(): void {
    this.items = dataFake;
  }

}
