import { Routes } from '@angular/router';
import { ProdutoDetailComponent } from './components/produto-detail/produto-detail.component';
import { ProdutoListComponent } from './components/produto-list/produto-list.component';

export const routes: Routes = [
     { path: '', component: ProdutoListComponent },
];
