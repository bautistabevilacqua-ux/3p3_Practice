import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavItem } from '../../../interfaces/nav-item.interface';

@Component({
  selector: 'app-side-nav-item',
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatExpansionModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './side-nav-item.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavItemComponent {
  @Input({ required: true }) item!: NavItem;
}
