import { ChangeDetectionStrategy, Component, inject, signal, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SideNavComponent } from '../../components/side-nav/side-nav.component';
import { DashboardToolbarComponent } from '../../components/dashboard-toolbar/dashboard-toolbar.component';
import { filter } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard-layout',
  imports: [
    RouterOutlet,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    SideNavComponent,
    DashboardToolbarComponent,
  ],
  templateUrl: './dashboard-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardLayoutComponent {
  private breakpointObserver = inject(BreakpointObserver);
  private router = inject(Router);

  @ViewChild('sidenav') sidenav!: MatSidenav;

  isMobile = signal(false);

  constructor() {
    this.breakpointObserver.observe('(max-width: 800px)').subscribe((result) => {
      this.isMobile.set(result.matches);
    });

    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      if (this.isMobile()) {
        this.sidenav.close();
      }
    });
  }
}
