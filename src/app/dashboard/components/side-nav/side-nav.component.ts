import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { NavItem } from '../../interfaces/nav-item.interface';
import { SideNavItemComponent } from './side-nav-item/side-nav-item.component';

@Component({
  selector: 'app-side-nav',
  imports: [MatListModule, MatIconModule, MatExpansionModule, SideNavItemComponent],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavComponent {
  menuItems: NavItem[] = [
    {
      label: 'Credential Status',
      icon: 'bar_chart',
      route: '/dashboard/main',
    },
    {
      label: 'Create Requests',
      icon: 'description',
      children: [
        { label: 'Onboarding', route: '/dashboard/requests/onboarding' },
        { label: 'Change Request', route: '/dashboard/requests/change-request' },
        { label: 'Extension', route: '/dashboard/requests/extension' },
        { label: 'Offboarding', route: '/dashboard/requests/offboarding' },
        { label: 'Transfer In', route: '/dashboard/requests/transfer-in' },
        { label: 'Transfer Out', route: '/dashboard/requests/transfer-out' },
      ],
    },
    {
      label: 'View Requests',
      icon: 'visibility',
      route: '/dashboard/view-requests',
    },
    {
      label: 'Contracts',
      icon: 'edit_note',
      children: [
        { label: 'RITMs', route: '/dashboard/contracts/ritms' },
        { label: 'ADM', route: '/dashboard/contracts/adm' },
        { label: 'PSOWs', route: '/dashboard/contracts/psows' },
      ],
    },
    {
      label: 'Reports',
      icon: 'pie_chart',
      route: '/dashboard/reports',
    },
  ];
}
