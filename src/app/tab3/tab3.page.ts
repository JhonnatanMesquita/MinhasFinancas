import {Component} from '@angular/core';
import {ModalCadastroPage} from '../_pages/modal-cadastro/modal-cadastro.page';
import {Router} from '@angular/router';
import {ModalController} from '@ionic/angular';
import {FavoritosDTO} from '../_models/favoritos.dto';
import {FavoritosService} from '../_service/favoritos.service';

@Component({
    selector: 'app-tab3',
    templateUrl: 'tab3.page.html',
    styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

    constructor(private router: Router, public modalController: ModalController, private service: FavoritosService) {
    }

    itens: FavoritosDTO[];

    item: FavoritosDTO;

    ionViewDidEnter() {
        this.carregarItens();
    }

    async presentModal() {
        const modal = await this.modalController.create({
            component: ModalCadastroPage,
            componentProps: {
                tipo: 'favorito'
            },
            cssClass: 'my-custom-modal-css'
        });
        await modal.present();
        const {data} = await modal.onWillDismiss();
        if (data != null) {
            this.carregarItens();
        }
    }

    deletar(id) {
        this.service.remove(id).then(res => {
            this.carregarItens();
        });
    }

    async carregarItens() {
        await this.service.findAll().subscribe(res => {
            this.itens = res.map(e => {
                this.item = e.payload.doc.data();
                return {
                    id: e.payload.doc.id,
                    papel: this.item.papel
                };
            });
        });
    }

    variante(id) {
        this.router.navigate(['/tabs/favorito', id]);
    }

}
