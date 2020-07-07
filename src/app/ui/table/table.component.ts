import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pokupka } from 'src/app/shared/pokupka.model';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  private _pokupki: Pokupka[] = [];
  @Input()
  set pokupki(pokupkaArr: Pokupka[]) {
    this._pokupki = this.sort(pokupkaArr);
  }
  get pokupki() {
    return this._pokupki;
  };

  @Output() deleteItem = new EventEmitter<Pokupka>();
  @Output() changeItem = new EventEmitter<Pokupka>();


  constructor() { }

  sort(pokupkaArr: Pokupka[]): Pokupka[] {
    pokupkaArr.sort((p1: Pokupka, p2: Pokupka) => {
      let [a, b] = [p1.name, p2.name];
      return a > b ? 1 : a < b ? -1 : 0;
    });
    pokupkaArr.sort((p1: Pokupka, p2: Pokupka) => {
      let [a, b] = [p1.status, p2.status];
      return a > b ? 1 : a < b ? -1 : 0;
    });
    return pokupkaArr;
  }

  ngOnInit(): void { }

  onDelete(pokupka: Pokupka) {
    this.deleteItem.emit(pokupka);
  }

  onChangeItem(pokupka: Pokupka) {
    this.changeItem.emit(pokupka);
  }

  toggleItem(pokupka: Pokupka){
    pokupka.status=Boolean(!pokupka.status);
    this.onChangeItem(pokupka);
  }
}
