import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BookService } from 'app/modules/books/services';
import { Book } from 'app/modules/books/models';

@Component({
    selector: 'app-view-book-page',
    templateUrl: './view-book-page.component.html',
    styleUrls: ['./view-book-page.component.scss']
})
export class ViewBookPageComponent implements OnInit, OnDestroy {

    public book: Book;
    public isSelectedBookInCollection: boolean;
    private id: string;
    private subscriptions: Subscription[] = [];

    constructor(
        public bookService: BookService,
        private route: ActivatedRoute) {
        this.subscriptions.push(this.route.params.subscribe(params => {
            this.id = params.id;
        }));
    }

    public ngOnInit(): void {
        this.subscriptions.push(this.bookService.retrieveBook(this.id)
            .subscribe((book: Book) => {
                this.book = book;
                this.isSelectedBookInCollection = this.bookService.bookIsInCollection(this.book);
            }));
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
    }

    public addToCollection(book: Book) {
        this.bookService.addBook(book);
    }

}
