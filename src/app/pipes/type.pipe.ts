import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  japanese: { [index: string]: string} = {
    Grass: 'くさ',
    Poison: 'どく',
    Fire: 'ほのお',
    Water: 'みず',
    Bug: 'むし',
    Flying: 'ひこう',
    Normal: 'ノーマル',
    Electric: 'でんき',
    Ground: 'じめん',
    Fairy: 'フェアリー',
    Fighting: 'かくとう',
    Psychic: 'エスパー',
    Rock: 'いわ',
    Dragon: 'ドラゴン',
    Ice: 'こおり',
    Ghost: 'ゴースト',
    Steel: 'はがね'
  };

  transform(types: string[], ...args: any[]): any {
    return types.map(type => this.japanese[type]  || type);
  }

}
