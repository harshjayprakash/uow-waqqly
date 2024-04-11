import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule, Routes } from '@angular/router';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { DogService } from '../core/services/storage/dog.service';
import { UsersService } from '../core/services/storage/users.service';
import { AccountComponent } from './account/account.component';
import { AddDogComponent } from './add-dog/add-dog.component';
import { CognitoAuthComponent } from './cognito-auth/cognito-auth.component';
import { FindWalkersComponent } from './find-walkers/find-walkers.component';
import { HomeComponent } from './home/home.component';
import { ManageDogsComponent } from './manage-dogs/manage-dogs.component';
import { EditDogComponent } from './edit-dog/edit-dog.component';

export const VIEWS_MODULE_ROUTES: Routes = [
    {
        path: '',
        title: 'Home',
        component: HomeComponent
    },
    {
        path: 'find-walkers',
        title: 'Find Dog Walkers',
        component: FindWalkersComponent
    },
    {
        path: 'manage-dogs',
        title: 'Manage Dogs',
        component: ManageDogsComponent
    },
    {
        path: 'authenticate',
        title: 'Authentication',
        component: CognitoAuthComponent
    },
    {
        path: 'account',
        title: 'Account',
        component: AccountComponent
    }
];

@NgModule({
    declarations: [
        HomeComponent,
        FindWalkersComponent,
        AccountComponent,
        ManageDogsComponent,
        AddDogComponent,
        CognitoAuthComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(VIEWS_MODULE_ROUTES),
        FormsModule,
        MatCommonModule,
        MatIconModule,
        MatCardModule,
        MatTabsModule,
        MatCheckboxModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
        AmplifyAuthenticatorModule
    ],
    exports: [RouterModule],
    providers: [UsersService, DogService]
})
export class ViewsModule { }
