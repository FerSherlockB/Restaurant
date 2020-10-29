import { DireccionLegal } from './../../../core/models/direccion/direccion-legal';
import { Direccion } from './../../../core/models/direccion/direccion';
import { Empleado } from './../../../core/models/usuarios/empleado';
import { Router } from '@angular/router';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { AuthService } from '../../authentication/auth.service';
import { Subscription, BehaviorSubject, Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {

  @Input() visible: boolean;
  private subscription: Subscription = new Subscription();
  private userSubject = new BehaviorSubject<Empleado>(null);
  public user$ = this.userSubject.asObservable();
  public isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(map(result => result.matches), shareReplay());

  constructor(
    public authService: AuthService,
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) { }

  ngOnInit() {
    this.subscription.add(this.authService.user.subscribe((user) =>
      this.userSubject.next(user))
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSignOut() {
    this.authService.logoutUser()
      .then((resolve) => {
        this.userSubject.next(null);
        this.subscription.unsubscribe();
        this.router.navigate(['']);
      }, (reject) => {
        console.log('error ', reject);
      });
  }

}
