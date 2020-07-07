import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pokupka } from 'src/app/shared/pokupka.model';
import { buildForm, dataFrom } from 'src/app/shared/form.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.css']
})
export class ChangeComponent implements OnInit {

  @Input() pokupka: Pokupka;
  @Output() changeItem = new EventEmitter<Pokupka>();

  form: FormGroup;

  constructor() {
    this.form = buildForm();
  }

  ngOnInit(): void {
    this.form.setValue(dataFrom(this.pokupka));
  }

  onChangeItem() {
    //console.log("this.pokupka.id");
    //console.log(this.pokupka.id);
    
    let pokupkaData ={
      id:this.pokupka.id,
      name : this.form.value.name,
      amount : this.form.value.amount,
      status : this.form.value.status
    };
   
    //console.log("pokupkaData");
    //console.log(pokupkaData);
    this.changeItem.emit(pokupkaData);
  }
}
