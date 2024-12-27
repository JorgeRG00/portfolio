import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'experiencia',
        loadChildren: () => import('./components/experiencia/experiencia.component')
            .then(m => m.ExperienciaComponent)
    }
];
