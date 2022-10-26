import { pokemonType } from './../types/pokemons';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { POKEMONS } from '../models/pokedex';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  pokemons = POKEMONS;
  pokemon: pokemonType | undefined;

  constructor(
    private route: ActivatedRoute
  ) { 
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe(map => {
      const id = Number(map.get('id'));
      this.pokemon = this.pokemons[id - 1];
    });
  }

}
