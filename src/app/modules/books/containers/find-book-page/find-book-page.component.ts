import { Component, OnDestroy, OnInit } from '@angular/core';

import { BookService } from '@books/services';
import { Book } from '@books/models';

import { takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Component({
    selector: 'bc-find-book-page',
    templateUrl: './find-book-page.component.html',
    styleUrls: ['./find-book-page.component.scss']
})
export class FindBookPageComponent implements OnInit, OnDestroy {
    books$: Observable<Book[]>;
    searching$: Observable<boolean>;
    destroy$: Subject<boolean> = new Subject<boolean>();

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
