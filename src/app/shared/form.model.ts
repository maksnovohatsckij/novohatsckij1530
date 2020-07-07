import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Pokupka } from 'src/app/shared/pokupka.model';

export function buildForm(add?: boolean): FormGroup {
    return add
        ? new FormGroup({ // создание новой формы
            name: new FormControl(null, [Validators.required]), // поля формы
            amount: new FormControl(null, [Validators.required])
        })
        : new FormGroup({ // создание новой формы
            name: new FormControl(null, [Validators.required]), // поля формы
            amount: new FormControl(null, [Validators.required]),
            status: new FormControl(null, [Validators.required])
        });
}

export function dataFrom(obj: Pokupka): Pokupka {
    return {
        name: obj.name,
        amount: obj.amount,
        status: obj.status
    };
}
