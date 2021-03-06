import { Injectable } from '@angular/core';
import { Requete } from '../_models/requete';
import { WebService } from './web.service';

@Injectable({
    providedIn: 'root'
})

export class RequeteService {
    // requetes = [new Requete('accident', new Date('2018-03-13'), 'patient1', 47.2737829, -2.2603029),
    // new Requete('accident 2', new Date('2015-11-04'), 'patient2', 47.239367, -1.7199081)];


    constructor(private ws: WebService) { }

    table = 'requete';

    getAll() {
        return this.ws.getAll(this.table + 's');
      }

    get(id: number) {
        return this.ws.get(this.table, id);
      }

    add(requete: Requete) {
        return this.ws.add(this.table, requete);
      }

    /* getRequetes() {
        return this.requetes;
    }

    getRequeteById(identifiant: number): Requete {
        return this.requetes.filter(r => r.id === identifiant)[0];

    }*/

}
