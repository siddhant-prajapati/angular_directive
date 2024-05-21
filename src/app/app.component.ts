import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HighlighterDirective } from './highlighter.directive';
import { CustomIfDirectiveDirective } from './custom-if-directive.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HighlighterDirective, CustomIfDirectiveDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'directive';

  showContent : boolean = true;

  showContent1 : boolean = true;
}
