import { Component, OnInit } from '@angular/core';
import { BookService } from 'app/modules/books/services';
import { Book } from 'app/modules/books/models';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-collection-page',
    templateUrl: './collection-page.component.html',
    styleUrls: ['./collection-page.component.scss']
})
export class CollectionPageComponent implements OnInit {
    saving$: Observable<boolean>;
    myCollection$: Observable<Book[]>;

    constructor(private bookService: BookService) {}

    ngOnInit() {
        this.myCollection$ = this.bookService.myCollection$;
        this.saving$ = this.bookService.saving$;
    }

    addBook(book: Book) {
        this.bookService.addBook(book);
    }
}
