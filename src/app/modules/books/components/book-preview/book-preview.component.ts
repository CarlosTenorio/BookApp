import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';

import { Book } from 'app/modules/books/models';

@Component({
    selector: 'bc-book-preview',
    templateUrl: './book-preview.component.html',
    styleUrls: ['./book-preview.component.scss']
})
export class BookPreviewComponent {
    @Input() book: Book;

    constructor(private router: Router) {}

    goToDetail() {
        if (!this.book.custom) {
            this.router.navigate(['./books', this.book.id]);
        }
    }
}
