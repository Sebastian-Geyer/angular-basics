import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, MenuModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  menuItems: MenuItem[] | undefined;

  ngOnInit() {
    this.menuItems = [
        {
            label: 'Pages',
            items: [
                {
                    label: 'First Page',
                    url: '/first'
                },
                {
                    label: 'Prime NG First Page',
                    routerLink: '/prime'
                }
            ]
        }
    ];
  }
}
