import {Component, NgIf, EventEmitter, FORM_DIRECTIVES} from 'angular2/angular2';
import {Datepicker} from '../datepicker/datepicker';
import {Commitment} from '../../model/Commitment';

declare function initMaterial();

@Component({
    selector: 'modal',
    directives: [FORM_DIRECTIVES, NgIf, Datepicker],
    templateUrl: './frontend/components/modal/modal.html',
    styleUrls: ['./frontend/components/modal/modal.css'],
    outputs: ['callback : callback']
})

export class Modal {
    private callback : EventEmitter;
    private isOpen : boolean = false;
    private dtCompromise : Date;
    private dsCompromise : string;

    constructor() {
        this.callback = new EventEmitter();
    }

    selectDatePicker(datepicker : Object) : void {
        var date : Date = datepicker['value'];
        var model : string = datepicker['model'];
        this[model] = date;
    }

    open() : void {
        this.isOpen = true;
        initMaterial();
    }

    close() : void {
        this.isOpen = false;
    }

    save() : void {
        var commitment : Commitment = new Commitment(this.dtCompromise, this.dsCompromise);
        this.callback.next(commitment);
        this.close();
    }
}
