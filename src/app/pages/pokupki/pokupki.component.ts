import { Component, OnInit } from '@angular/core';
import { Pokupka } from 'src/app/shared/pokupka.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-pokupki',
  templateUrl: './pokupki.component.html',
  styleUrls: ['./pokupki.component.css']
})
export class PokupkiComponent implements OnInit {
  title = 'Покупки';
  pokupki: Pokupka[] = [];

  constructor(private base: DataService) {
    this.getDatabase();
  }

  ngOnInit(): void {
  }

  async getDatabase() {
    try {
      this.pokupki = await this.base.get();
    } catch (err) {
      console.error(err);
    }
  }

  async onDeleteItem(pokupka: Pokupka) {
    try {
      await this.base.delete(pokupka);
    } catch (err) {
      console.error(err);
    } finally {
      this.getDatabase();
    }
  }

  async onAddItem(pokupka: Pokupka) {
    try {
      pokupka.id = this.pokupki.length > 0
        ? this.pokupki[this.pokupki.length - 1].id + 1
        : 0;
      await this.base.add(pokupka);
    } catch (err) {
      console.error(err);
    } finally {
      this.getDatabase();
    }
  }

  async onChangeItem(pokupka: Pokupka) {
    try {
      await this.base.change(pokupka);
    } catch (err) {
      console.error(err);
    } finally {
      this.getDatabase();
    }
  }

}
