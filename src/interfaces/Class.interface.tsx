import { Abilities } from "../enums/Abilites.enum";

export interface BaseClassInterface {
    name: string,
    description: string,
    hitDie: number,
    primaryAbility: Abilities[],
    saves: Abilities[]
}
