import { Subject, Observable } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BookService } from 'app/modules/books/services';
import { Book } from 'app/modules/books/models';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-view-book-page',
    templateUrl: './view-book-page.component.html',
    styleUrls: ['./view-book-page.component.scss']
})
export class ViewBookPageComponent implements OnInit, OnDestroy {
    book$: Observable<Book>;
    isBookInCollection$: Observable<boolean>;
    id: string;
    destroy$: Subject<boolean> = new Subject<boolean>();

    constructor(private bookService: BookService, private route: ActivatedRoute) {
        this.route.params.pipe(takeUntil(this.destroy$)).subscribe(params => {
            this.id = params.id;
        });
    }

    ngOnInit() {
        this.book$ = this.bookService.retrieveBook(this.id).pipe(takeUntil(this.destroy$));
        this.isBookInCollection$ = this.bookService.isBookInCollection$;
    }

    ngOnDestroy() {
        this.destroy$.next(true);
    }

    addToCollection(book: Book) {
        this.bookService.addBook(book);
    }
}
