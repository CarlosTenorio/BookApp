import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedModule } from '@shared/shared.module';
import { BookDetailComponent } from 'app/modules/books/components';

describe('BookDetailComponent', () => {
    let component: BookDetailComponent;
    let fixture: ComponentFixture<BookDetailComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BookDetailComponent],
            imports: [SharedModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BookDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
