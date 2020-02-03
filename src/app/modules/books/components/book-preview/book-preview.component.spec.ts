import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SharedModule } from '@shared/shared.module';
import { BookPreviewComponent } from 'app/modules/books/components';

describe('BookPreviewComponent', () => {
    let component: BookPreviewComponent;
    let fixture: ComponentFixture<BookPreviewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BookPreviewComponent],
            imports: [
                SharedModule,
                RouterTestingModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BookPreviewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
