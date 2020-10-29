import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/shared/authentication/auth.service';
import { Empleado } from 'src/app/core/models/usuarios/empleado';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();
  private userSubject = new BehaviorSubject<Empleado>(null);
  public user$ = this.userSubject.asObservable();
  public edit = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.subscription.add(this.authService.user.subscribe((user) =>
      this.userSubject.next(user))
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onEditPassword() {
    this.authService.resetPassword(this.userSubject.value.email);
  }

  toggleEdit() {
    this.edit = !this.edit;
  }

}
