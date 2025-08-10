import { MonsterType } from "../utils/monster.utils.js";

export class Monster {
	id:number=-1;
    name: string = "My Monster";
	image:string="./assets/img/monster.png";
	type:MonsterType=MonsterType.ELECTRIC;
	hp: number = 40;
	figureCaption: string = "N°001 My Monster";
    
	attackName: string = "Geo Impact";
	attackStrength: number = 60;
	attackDescription: string = "This is a long description of a monster capacity.";

	/**
	 * Todo cette fonction permet de copier les attributs de cette classe actuelle à une nouvelle classe
	 * @returns 
	 */
	copy():Monster {
		return Object.assign(new Monster(),this);
	}
}