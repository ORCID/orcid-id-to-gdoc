import { Location }               from '@angular/common';
import { Component, OnInit }      from '@angular/core';
//import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

import { Collection } from './../collection';

import { CollectionService } from './../collection.service';

@Component({
    selector: 'app-collection-form',
    templateUrl: './collection-form.component.html',
    styleUrls: ['./collection-form.component.scss']
})

export class CollectionFormComponent implements OnInit {
    //collection: Collection;
    //collectionForm: FormGroup;

    constructor(
        //private formBuilder: FormBuilder,
        private location: Location,
        private route: ActivatedRoute,
    ) 
    {
        /*
        this.collectionForm = formBuilder.group(
            {
                'description' : '',
                'title' : ''
            }
        );
        */
    }

    ngOnInit() {
        console.log('params', this.route.params);
    }

    submitForm(form: any): void{
        console.log('Form Data: ');
        console.log(form);
    }

}
