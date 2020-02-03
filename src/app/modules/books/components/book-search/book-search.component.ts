import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'bc-book-search',
    templateUrl: './book-search.component.html',
    styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent {
    @Input() searching: boolean;
    @Output() search = new EventEmitter<string>();

    searchValue: string;

    constructor() {}

    applySearch() {
        this.search.emit(this.searchValue);
    }
}
