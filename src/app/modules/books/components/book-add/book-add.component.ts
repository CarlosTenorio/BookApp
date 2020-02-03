import { Component, Output, EventEmitter, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Book, VolumeInfo } from 'app/modules/books/models';
import { cloneDeep } from 'lodash';

@Component({
    selector: 'bc-book-add',
    templateUrl: './book-add.component.html',
    styleUrls: ['./book-add.component.scss']
})
export class BookAddComponent {

    @Input() saving: boolean;
    @Output() add = new EventEmitter<Book>();

    @ViewChild('addForm', { static: false }) addForm: NgForm;

    public book: Book = {} as Book;
    public volumeInfo: VolumeInfo = {} as VolumeInfo;

    constructor() { }

    public addBook() {
        if (this.addForm.valid) {
            this.book.volumeInfo = this.volumeInfo;
            this.add.emit(cloneDeep(this.book));
            this.addForm.reset();
        }
    }
}
