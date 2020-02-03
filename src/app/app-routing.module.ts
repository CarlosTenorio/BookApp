import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'books',
        loadChildren: () => import('./modules/books/books.module').then(module => module.BooksModule)
    },
    {
        path: '',
        redirectTo: 'books',
        pathMatch: 'full'
    },
    { path: '**', redirectTo: 'books' }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
