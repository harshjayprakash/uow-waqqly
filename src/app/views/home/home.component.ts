import { Component } from '@angular/core';
import { DogService } from '../../core/services/storage/dog.service';
import { UsersService } from '../../core/services/storage/users.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {

    constructor(private users: UsersService, private dogs: DogService) {}

    onClick() {
        this.users.getUsers().then(result => {
            console.log(result);
        }).catch(err => console.log(err));
        this.dogs.getDogs().then(result => {
            console.log(result);
        }).catch(err => console.log(err));
    }

}
