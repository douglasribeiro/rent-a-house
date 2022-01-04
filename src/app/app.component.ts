import { AuthService } from './login/auth.service';
import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  menuOn: boolean = false;

  constructor(
    private observer: BreakpointObserver,
    private router: Router,
    private authService: AuthService) {}

ngOnInit(){
  this.authService.mostrarMenuEmitter.subscribe(
    mostrar => this.menuOn = mostrar
  )
  console.log(this.menuOn + "passei aqui....")

}

  XngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (!res.matches) {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        } else {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        }
      });
  }

  home(){
    this.router.navigate(['/home']);
  }

  proprietario(){
    this.router.navigate(['/proprietario']);
  }
}
