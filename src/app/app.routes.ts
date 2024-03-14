import { Routes } from '@angular/router';
import { FirstPageComponent } from './pages/first-page/first-page.component';
import { PrimeNgComponent } from './pages/prime-ng/prime-ng.component';

export const routes: Routes = [
    {
        path: 'first',
        component: FirstPageComponent
    },
    {
        path: 'prime',
        component: PrimeNgComponent
    },
];
