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
    saving: boolean;
    myCollection$: Observable<Book[]>;

    constructor(private bookService: BookService) {}

    ngOnInit() {
        this.myCollection$ = this.bookService.myCollection$;
    }

    addBook(book: Book) {
        this.saving = true;
        this.bookService.addBook(book);
        this.saving = false;
    }
}
