import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { constants } from 'src/app/utils';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    {
        path: constants.ROUTES.DASHBOARD,
        component: DashboardComponent,
    },
    {
        path: constants.ROUTES.AUTH.MODULE,
        children: [
            {
                path: constants.ROUTES.AUTH.LOGIN,
                component: LoginComponent,
            },
        ],
    },
];

@NgModule({
    declarations: [LoginComponent, DashboardComponent],
    imports: [RouterModule.forChild(routes)],
})
export class AuthModule {}
