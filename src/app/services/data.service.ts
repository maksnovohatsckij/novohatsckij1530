import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokupka } from '../shared/pokupka.model';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  url = "http://localhost:3000/pokupki";

  constructor(private http: HttpClient) { }

  add(pokupka: Pokupka): Promise<any> {
    return this.http.post(this.url, pokupka).toPromise();
  }

  change(pokupka: Pokupka): Promise<any> {
    return this.http.put(this.url + "/" + pokupka.id, pokupka).toPromise();
  }

  delete(pokupka: Pokupka): Promise<any> {
    return this.http.delete(this.url + "/" + pokupka.id).toPromise();
  }

  get(): Promise<any> {
    return this.http.get(this.url).toPromise();
  }
}

