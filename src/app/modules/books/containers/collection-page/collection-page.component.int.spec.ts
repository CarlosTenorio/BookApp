import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from '@shared/shared.module';
import { CollectionPageComponent } from 'app/modules/books/containers';
import { BookAddComponent, BookPreviewListComponent, BookPreviewComponent } from 'app/modules/books/components';
import { BookService } from 'app/modules/books/services';
import { Book } from 'app/modules/books/models';

describe('CollectionPageComponent CONTAINER // Integration', () => {
    let component: CollectionPageComponent;
    let fixture: ComponentFixture<CollectionPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                CollectionPageComponent,
                BookAddComponent,
                BookPreviewListComponent,
                BookPreviewComponent
            ],
            imports: [
                HttpClientTestingModule,
                BrowserAnimationsModule,
                SharedModule
            ],
            providers: [BookService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CollectionPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('add a Book to my collection', () => {
        const newBook: Book = {
            title: 'Title Test',
            subtitle: 'Subtitle Test'
        } as Book;

        component.addBook(newBook);
        expect(component.bookService.myCollection).toContain(newBook);
    });

    it('should be show an init list of my book collection', () => {
        expect(component.bookService.myCollection).not.toBeNull();
        expect(component.bookService.myCollection).not.toBeUndefined();
    });
});
