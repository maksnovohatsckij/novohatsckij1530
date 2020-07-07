import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pokupka } from 'src/app/shared/pokupka.model';
import { buildForm, dataFrom } from 'src/app/shared/form.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  form: FormGroup;
  @Output() addItem = new EventEmitter<Pokupka>();

  constructor() {
    this.form = buildForm(true);
  }

  ngOnInit(): void { }

  onAddItem() {
    let formData = this.form.value;
    formData.status = false;
    console.log(formData);
    this.addItem.emit(formData);
    this.form.reset();
  }

}
