import { BaseClassInterface } from '../interfaces/Class.interface';
import { Abilities } from '../enums/Abilites.enum';

export default class BaseClasses {

    public classes(): BaseClassInterface[] {
        return [
            {
                "name": "Barbarian",
                "description": "A fierce warrior of primitive background who can enter a battle rage.",
                "hitDie": 12,
                "primaryAbility": [
                    Abilities.STR
                ],
                "saves": [
                    Abilities.STR,
                    Abilities.CON
                ]
            },
            {
                "name": "Warlock",
                "description": "A wielder of magic that is derived from a bargain with an extraplanar entity.",
                "hitDie": 8,
                "primaryAbility": [
                    Abilities.CHA
                ],
                "saves": [
                    Abilities.WIS,
                    Abilities.CHA
                ]
            },
            {
                "name": "Monk",
                "description": "A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection.",
                "hitDie": 8,
                "primaryAbility": [
                    Abilities.DEX,
                    Abilities.WIS
                ],
                "saves": [
                    Abilities.STR,
                    Abilities.DEX
                ]
            }
        ]
    }
}

