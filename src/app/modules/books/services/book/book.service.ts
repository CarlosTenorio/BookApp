import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Book } from 'app/modules/books/models/book.model';

import { map, finalize } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { some } from 'lodash';

@Injectable()
export class BookService {
    private myCollection: Book[] = [];
    private myCollectionSubject: BehaviorSubject<Book[]> = new BehaviorSubject([]);
    readonly myCollection$: Observable<Book[]> = this.myCollectionSubject.asObservable();

    private searchingSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
    readonly searching$: Observable<boolean> = this.searchingSubject.asObservable();

    readonly googleAPI = 'https://www.googleapis.com/books/v1/volumes';

    constructor(private http: HttpClient) {}

    generateBook(): Book {
        return {
            id: '1',
            volumeInfo: {
                title: 'title',
                subtitle: 'subtitle',
                authors: ['author'],
                publisher: 'publisher',
                publishDate: '',
                description: 'description',
                averageRating: 3,
                ratingsCount: 5,
                imageLinks: {
                    thumbnail: 'string',
                    smallThumbnail: 'string'
                }
            }
        } as Book;
    }

    addBook(book: Book) {
        this.myCollection.push(book ? book : this.generateBook());
        this.myCollectionSubject.next(this.myCollection);
    }

    searchBooks(queryTitle: string): Observable<Book[]> {
        this.searchingSubject.next(true);
        return this.http.get<{ items: Book[] }>(`${this.googleAPI}?q=${queryTitle}`).pipe(
            map(books => books.items || []),
            finalize(() => {
                this.searchingSubject.next(false);
            })
        );
    }

    retrieveBook(volumeId: string): Observable<Book> {
        return this.http.get<Book>(`${this.googleAPI}/${volumeId}`);
    }

    bookIsInCollection(book: Book): boolean {
        return some(this.myCollection, (bookOnCollection: Book) => {
            return bookOnCollection.id === book.id;
        });
    }
}
