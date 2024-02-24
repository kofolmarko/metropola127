import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';

const routes: Routes = [
    { 
        path: '',
        component: NavigationComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
            },
            {
                path: 'team',
                loadChildren: () => import('../team/team.module').then(m => m.TeamModule)
            },
            {
                path: 'projects',
                loadChildren: () => import('../projects/projects.module').then(m => m.ProjectsModule)
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BackboneRoutingModule { }
