import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { BookService } from 'app/modules/books/services';
import { CollectionPageComponent, FindBookPageComponent } from 'app/modules/books/containers';
import {
    BookAddComponent,
    BookPreviewListComponent,
    BookPreviewComponent,
    BookSearchComponent
} from 'app/modules/books/components';

describe('BookService', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            declarations: [
                FindBookPageComponent,
                CollectionPageComponent,
                BookAddComponent,
                BookPreviewListComponent,
                BookPreviewComponent,
                BookSearchComponent
            ],
            imports: [HttpClientTestingModule],
            providers: [BookService]
        })
    );

    it('should be created', () => {
        const service: BookService = TestBed.get(BookService);
        expect(service).toBeTruthy();
    });
});
