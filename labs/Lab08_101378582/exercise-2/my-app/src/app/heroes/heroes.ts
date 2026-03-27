import { InputFormatDirective } from '../input-format';
import { RemoveSpacesPipe } from '../remove-spaces-pipe';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HEROES, Hero } from './hero-data';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, RemoveSpacesPipe, InputFormatDirective],
  templateUrl: './heroes.html',
  styleUrl: './heroes.css'
})
export class HeroesComponent {
  heroes: Hero[] = HEROES;
}