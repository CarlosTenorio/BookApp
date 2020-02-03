import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedModule } from '@shared/shared.module';
import { BookPreviewListComponent, BookPreviewComponent } from 'app/modules/books/components';

describe('BookPreviewListComponent', () => {
    let component: BookPreviewListComponent;
    let fixture: ComponentFixture<BookPreviewListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                BookPreviewListComponent,
                BookPreviewComponent
            ],
            imports: [SharedModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BookPreviewListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
