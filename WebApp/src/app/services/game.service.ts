/**
 * Created by rafael on 25/04/17.
 */

import {Injectable} from '@angular/core'

@Injectable()
export class GameService {
    private conditions = [];
    private actions = [];

    public getConditions() {
        return this.conditions;
    }

    public getActions() {
        return this.actions;
    }
}