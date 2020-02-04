import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Book } from '@books/models';

import { map, finalize } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '@env';

@Injectable()
export class BookService {
    private myCollection: Book[] = [];
    private myCollectionSubject: BehaviorSubject<Book[]> = new BehaviorSubject([]);
    readonly myCollection$: Observable<Book[]> = this.myCollectionSubject.asObservable();

    private searchingSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
    readonly searching$: Observable<boolean> = this.searchingSubject.asObservable();

    private savingSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
    readonly saving$: Observable<boolean> = this.savingSubject.asObservable();

    private isBookInCollectionSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
    readonly isBookInCollection$: Observable<boolean> = this.isBookInCollectionSubject.asObservable();

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
        this.savingSubject.next(true);
        this.myCollection.push(book ? book : this.generateBook());
        this.myCollectionSubject.next(this.myCollection);
        this.savingSubject.next(false);
        this.isBookInCollectionSubject.next(true);
    }

    searchBooks(queryTitle: string): Observable<Book[]> {
        this.searchingSubject.next(true);
        return this.http.get<{ items: Book[] }>(`${environment.googleAPI}?q=${queryTitle}`).pipe(
            map(books => books.items || []),
            finalize(() => {
                this.searchingSubject.next(false);
            })
        );
    }

    retrieveBook(bookId: string): Observable<Book> {
        this.checkIfIsCollection(bookId);
        return this.http.get<Book>(`${environment.googleAPI}/${bookId}`).pipe(map(book => book));
    }

    checkIfIsCollection(bookId: string) {
        this.isBookInCollectionSubject.next(
            this.myCollection.some((book: Book) => {
                return book.id === bookId;
            })
        );
    }

    setSearching(searching: boolean) {
        this.searchingSubject.next(searching);
    }
}
