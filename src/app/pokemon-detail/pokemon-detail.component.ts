import { pokemonType } from './../types/pokemons';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { POKEMONS } from '../models/pokedex';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  pokemons = POKEMONS;
  pokemon: pokemonType | undefined;

  // Radar
  public radarChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  public radarChartLabels: string[] = [ 'HP', '攻撃', '防御', 'すばやさ'];

  public radarChartData: ChartData<'radar'> = {
    labels: this.radarChartLabels,
    datasets: []
  };
  public radarChartType: ChartType = 'radar';

  constructor(
    private route: ActivatedRoute
  ) { 
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe(map => {
      const id = Number(map.get('id'));
      this.pokemon = this.pokemons[id - 1];
      this.radarChartData.datasets.push({
        data: [
          this.pokemon.base.HP,
          this.pokemon.base.Attack,
          this.pokemon.base.Defense,
          this.pokemon.base.Speed
        ],
        label: "ステータス"
      });
    });
  }

}
