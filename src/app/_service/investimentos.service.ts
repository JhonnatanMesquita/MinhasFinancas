import {Injectable} from '@angular/core';
import {PortifolioDTO} from '../_models/portifolio.dto';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable()
export class InvestimentosService {

    constructor(private firestore: AngularFirestore) {
    }

    create(investimento: PortifolioDTO) {
        return this.firestore.collection('Investimentos').add(investimento);
    }

    findAll() {
        return this.firestore.collection('Investimentos', res => res.orderBy('papel', 'asc').orderBy('dataCompra', 'asc')).snapshotChanges();
    }

    deletar(id) {
        return this.firestore.doc('Investimentos/' + id).delete();
    }

    findById(id) {
        return this.firestore.doc('Investimentos/' + id).get();
    }
}
