import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from '@shared/shared.module';
import { BookSearchComponent } from './book-search.component';

describe('BookSearchComponent', () => {
    let component: BookSearchComponent;
    let fixture: ComponentFixture<BookSearchComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BookSearchComponent],
            imports: [
                SharedModule,
                BrowserAnimationsModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BookSearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
