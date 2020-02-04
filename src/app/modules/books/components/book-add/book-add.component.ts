import { Component, Output, EventEmitter, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UtilsService } from '@core/services';
import { Book, VolumeInfo } from '@books/models';

@Component({
    selector: 'bc-book-add',
    templateUrl: './book-add.component.html',
    styleUrls: ['./book-add.component.scss']
})
export class BookAddComponent {
    @Input() saving = false;
    @Output() add = new EventEmitter<Book>();

    @ViewChild('addForm', { static: false }) addForm: NgForm;

    book: Book = {} as Book;
    volumeInfo: VolumeInfo = {} as VolumeInfo;

    constructor(private utilsService: UtilsService) {}

    addBook() {
        if (this.addForm.valid) {
            this.book.volumeInfo = this.volumeInfo;
            this.book.custom = true;
            this.add.emit(this.utilsService.cloneDeep(this.book));
            this.addForm.reset();
        }
    }
}
