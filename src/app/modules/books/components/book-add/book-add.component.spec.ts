import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from '@shared/shared.module';
import { BookAddComponent } from 'app/modules/books/components';
import { NgForm } from '@angular/forms';

describe('BookAddComponent', () => {
    let component: BookAddComponent;
    let fixture: ComponentFixture<BookAddComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BookAddComponent],
            imports: [
                SharedModule,
                BrowserAnimationsModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BookAddComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('title field validity', () => {
        fixture.whenStable().then(() => {
            let errors = {};
            const title = component.addForm.controls.title;
            expect(title.valid).toBeFalsy();

            // Title field is required
            errors = title.errors || {};
            expect(errors['required']).toBeTruthy();

            // Set title to check required
            title.setValue('test');
            errors = title.errors || {};
            expect(errors['required']).toBeFalsy();

            const subtitle = component.addForm.controls.subtitle;
            // Subtitle field is NOT required
            subtitle.setValue('subtitle');
            errors = subtitle.errors || {};
            expect(errors['required']).toBeFalsy();
        });
    });
});
