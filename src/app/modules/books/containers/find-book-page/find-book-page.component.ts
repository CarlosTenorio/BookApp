import { Component, OnDestroy, OnInit } from '@angular/core';

import { BookService } from 'app/modules/books/services';
import { Book } from 'app/modules/books/models';

import { finalize, takeUntil } from 'rxjs/operators';
import { Subscription, Observable, Subject } from 'rxjs';

@Component({
    selector: 'bc-find-book-page',
    templateUrl: './find-book-page.component.html',
    styleUrls: ['./find-book-page.component.scss']
})
export class FindBookPageComponent implements OnInit, OnDestroy {
    searchQuery = '';
    books$: Observable<Book[]>;
    searching$: Observable<boolean>;
    destroy$: Subject<boolean> = new Subject<boolean>();

    private subscriptions: Subscription[] = [];

    constructor(private bookService: BookService) {}

    ngOnInit(): void {
        this.searching$ = this.bookService.searching$;
    }

    ngOnDestroy(): void {
        this.destroy$.next(true);
    }

    search(queryTitle: string) {
        this.books$ = this.bookService.searchBooks(queryTitle).pipe(takeUntil(this.destroy$));
    }
}
