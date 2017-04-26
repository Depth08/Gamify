/**
 * Created by rafael on 25/04/17.
 */

import {Injectable} from '@angular/core'

@Injectable()
export class GameService {
    private name: string;
    private desc: string;
    private beacons;

    constructor() {
        this.beacons = [];
    }

    newGame(name, desc): void {
        this.name = name;
        this.desc = desc;

        this.beacons = [];
    }

    getBeacons() {
        return this.beacons;
    }

    addBeacon(): void {
        this.beacons.push({
            name: 'Give me a cool name :)',
            tagline: 'Cheesy description here...',
            interactions: []
        });
    }

    // TODO: Text is based upon condition node text and not db
    addInteraction(id, text): void {
        this.beacons[id].interactions.push({
            condition: {
                name: text
            },
            actions: []
        });
    }

    // TODO: Text is based upon condition node text and not db
    addAction(beaconId, interactionId, text): void {
        this.beacons[beaconId].interactions[interactionId].actions.push({
            name: text
        });
    }
}