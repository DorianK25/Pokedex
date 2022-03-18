import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './authentification/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pokedex';

  constructor(private userService :UserService,private router:Router) {

  }

  logout(){
    this.userService.logout();
    this.router.navigate(['/login']);
  }

  isLogged(){
    return this.userService.ifIsLogged();
  }
}
