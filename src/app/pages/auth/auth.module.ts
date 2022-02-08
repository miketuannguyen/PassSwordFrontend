import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/includes/shared.module';
import { constants } from 'src/app/utils';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

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
    imports: [RouterModule.forChild(routes), SharedModule],
})
export class AuthModule {}
