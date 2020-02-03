// Angular stuff
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// Our stuff
import { CollectionPageComponent, FindBookPageComponent, ViewBookPageComponent } from '@books/containers';
import {
    BookPreviewComponent,
    BookPreviewListComponent,
    BookAddComponent,
    BookSearchComponent,
    BookDetailComponent
} from '@books/components';
import { BookService } from '@books/services';
// Material Imports
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';

const childRoutes: Route[] = [
    { path: '', component: CollectionPageComponent },
    { path: 'search', component: FindBookPageComponent },
    {
        path: ':id',
        component: ViewBookPageComponent
    }
];

@NgModule({
    declarations: [
        CollectionPageComponent,
        BookPreviewComponent,
        BookPreviewListComponent,
        BookAddComponent,
        BookSearchComponent,
        FindBookPageComponent,
        BookDetailComponent,
        ViewBookPageComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild(childRoutes),
        MatCardModule,
        MatProgressSpinnerModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule
    ],
    providers: [BookService]
})
export class BooksModule {}
