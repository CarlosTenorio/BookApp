import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '@books/models';

@Component({
    selector: 'bc-book-detail',
    templateUrl: './book-detail.component.html',
    styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent {
    @Input() book: Book;
    @Input() inCollection: boolean;

    @Output() add = new EventEmitter<Book>();

    constructor() {}

    addToCollection(book: Book) {
        this.add.emit(book);
    }
}
