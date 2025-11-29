import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { BaseFormControl } from '../controllers/base-controller';
import { Dropdown } from '../controllers/dropdown';
import { Textbox } from '../controllers/textbox';
@Injectable()
export class OpenFormDataService {
    // TODO: get from a remote source of question metadata
    getFields() {
        const formData: BaseFormControl<string>[] = [
            new Dropdown({
                key: 'favoriteAnimal',
                label: 'Favorite Animal',
                options: [
                    { key: 'cat', value: 'Cat' },
                    { key: 'dog', value: 'Dog' },
                    { key: 'horse', value: 'Horse' },
                    { key: 'capybara', value: 'Capybara' },
                ],
                order: 3,
            }),
            new Textbox({
                key: 'firstName',
                label: 'First name',
                value: 'Alex',
                required: true,
                order: 1,
            }),
            new Textbox({
                key: 'emailAddress',
                label: 'Email',
                type: 'email',
                order: 2,
            }),
        ];
        return of(formData.sort((a, b) => a.order - b.order));
    }
}