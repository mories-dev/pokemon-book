import { Component, OnInit } from '@angular/core';
import { POKEMONS } from '../models/pokedex'

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemons = POKEMONS;

  constructor() { }

  ngOnInit(): void {
  }

}
