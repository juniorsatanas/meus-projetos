import {Component, NgFor, FORM_DIRECTIVES} from 'angular2/angular2';
import {Modal} from '../modal/modal';
import {Commitment} from '../../model/Commitment';

declare function initMaterial();

@Component({
    selector: 'home',
    templateUrl: './frontend/components/home/home.html',
    styleUrls: ['./frontend/components/home/home.css'],
    directives: [NgFor, Modal, FORM_DIRECTIVES]
})

export class Home {
    private items : Array<Commitment>;
    private selectAll : boolean;

    constructor() {
        this.items = new Array<Commitment>();
        this.items.push(new Commitment(undefined, undefined));
        this.items.push(new Commitment(undefined, undefined));
        this.items.push(new Commitment(undefined, undefined));
        this.items.push(new Commitment(undefined, undefined));
    }

    addCommitment(commitment : Commitment) : Commitment {
        this.items.push(commitment);
        initMaterial();
        return commitment;
    }

    removeCommitment() : void {
        var confirmRemove = confirm('Remover itens selecionados?');
        if (confirmRemove)
            this.removeSelectedCommitment();
    }

    removeSelectedCommitment() : void {
        var itemsUpdate : Array<Commitment> = new Array<Commitment>();
        this.items.forEach(item => {
            if (!this.selectAll && !item['remove'])
                itemsUpdate.push(item);
        });
        this.items = itemsUpdate;
    }
}
