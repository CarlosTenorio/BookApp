import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SharedModule } from '@shared/shared.module';
import { BookService } from 'app/modules/books/services';
import { ViewBookPageComponent } from 'app/modules/books/containers';
import { BookDetailComponent } from 'app/modules/books/components';

describe('ViewBookPageComponent', () => {
    let component: ViewBookPageComponent;
    let fixture: ComponentFixture<ViewBookPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ViewBookPageComponent,
                BookDetailComponent
            ],
            imports: [
                SharedModule,
                HttpClientTestingModule,
                RouterTestingModule
            ],
            providers: [BookService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ViewBookPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
