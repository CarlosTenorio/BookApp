import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Book } from 'app/modules/books/models';
import { SharedModule } from '@shared/shared.module';
import { BookService } from 'app/modules/books/services';
import { FindBookPageComponent } from 'app/modules/books/containers';
import { BookSearchComponent, BookPreviewListComponent, BookPreviewComponent } from 'app/modules/books/components';

describe('FindBookPageComponent CONTAINER // Integration', () => {
    let component: FindBookPageComponent;
    let fixture: ComponentFixture<FindBookPageComponent>;
    let injector: TestBed;
    let service: BookService;
    let httpMock: HttpTestingController;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                BookPreviewListComponent,
                BookPreviewComponent,
                BookSearchComponent,
                FindBookPageComponent
            ],
            imports: [
                HttpClientTestingModule,
                SharedModule,
                BrowserAnimationsModule
            ],
            providers: [BookService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FindBookPageComponent);
        component = fixture.componentInstance;
        injector = getTestBed();
        service = injector.get(BookService);
        httpMock = injector.get(HttpTestingController);
        fixture.detectChanges();
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should return an Observable<Book[]>', () => {
        const mockBooks: Book[] = [
            {
                id: '1',
                volumeInfo: {
                    title: 'title 1',
                    subtitle: 'subtitle 1',
                    authors: ['author'],
                    publisher: 'publisher',
                    publishDate: '',
                    description: 'description',
                    averageRating: 3,
                    ratingsCount: 5,
                    imageLinks: {
                        thumbnail: 'string',
                        smallThumbnail: 'string',
                    },
                },
            }
        ];

        const query = 'query';

        service.searchBooks(query).subscribe(books => {
            expect(books.length).toBeGreaterThan(0);
            expect(books).toEqual(mockBooks);
        });

        const req = httpMock.expectOne(`${service.googleAPI}?q=${query}`);
        expect(req.request.method).toBe('GET');
        req.flush({
            incomplete_results: false,
            items: mockBooks,
            total_count: 1
        });
    });

});
