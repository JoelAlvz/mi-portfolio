import { Component } from '@angular/core';
import { RouterLinkActive, RouterLink } from "@angular/router";

@Component({
  selector: 'app-nav',
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
