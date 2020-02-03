import { Component, Input } from '@angular/core';

import { Book } from 'app/modules/books/models';

@Component({
    selector: 'bc-book-preview-list',
    templateUrl: './book-preview-list.component.html',
    styleUrls: ['./book-preview-list.component.scss']
})
export class BookPreviewListComponent {

    @Input() books: Book[];

    constructor() { }

}
