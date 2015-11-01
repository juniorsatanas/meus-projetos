import {Component, EventEmitter, NgIf, ViewEncapsulation} from 'angular2/angular2';

declare function initMaterial();

@Component({
    selector: 'datepicker',
    templateUrl: './frontend/components/datepicker/datepicker.html',
    styleUrls: ['./frontend/components/datepicker/datepicker.css'],
    directives: [NgIf],
    outputs: ['callback : callback'],
    inputs: ['destination'],
    encapsulation: ViewEncapsulation.None
})

export class Datepicker {
    private callback : EventEmitter;
    private destination : String;
    private yearCalendar : number;
    private monthCalendar : number;
    private isOpen : boolean = false;

    constructor() {
        this.yearCalendar = new Date().getFullYear();
        this.callback = new EventEmitter();
    }

    open() : void {
        this.isOpen = !this.isOpen;
        if(this.isOpen) {
            var self = this;
            setTimeout(function() {
                self.initDatepicker();
            }, 100);
        }
    }

    close() : void {
        this.isOpen = false;
    }

    nextYear() : void {
        this.yearCalendar = this.yearCalendar + 1;
        this.initDatepicker();
    }

    prevYear() : void {
        this.yearCalendar = this.yearCalendar - 1;
        this.initDatepicker();
    }

    getDayOfWeek(date : Date) : string {
        var days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
        var day = days[date.getDay()];
        return day;
    }

    getMonthName(index : number) : string {
        var months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto',
                      'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        var month = months[index];
        return month;
    }

    getHeaderDatePicker() : string {
        return `<div class="row week">
                    <div class="cell"><span>Dom</span></div>
                    <div class="cell"><span>Seg</span></div>
                    <div class="cell"><span>Ter</span></div>
                    <div class="cell"><span>Qua</span></div>
                    <div class="cell"><span>Qui</span></div>
                    <div class="cell"><span>Sex</span></div>
                    <div class="cell"><span>Sab</span></div>
                </div>`;
    }

    buildMonth(date : Date) : string {
        var index : number = 0;
        var monthStr : string = '';
        var month : number = date.getMonth();
        var dayFirstOfMonth = new Date(this.yearCalendar, month, 1);

        while(index < dayFirstOfMonth.getDay()) {
            monthStr += '<div class="cell past"><span></span></div>';
            index++;
        }

        var fisrtDayIsSunday =(dayFirstOfMonth.getDay() === 0);
        if(monthStr) monthStr = '<div class="row">' + monthStr;
        if(fisrtDayIsSunday && monthStr) monthStr += '</div>';

        var lastDayOfMonth = new Date(this.yearCalendar, month, 0).getDate();
        for(var i = 1; i <= lastDayOfMonth; i++) {
            var currentDate = new Date(date.getFullYear(), month, i);
            var isSunday = (currentDate.getDay() === 0);
            var isSaturday = (currentDate.getDay() === 6);

            monthStr += (isSunday? '<div class="row">' : '') + '<div class="cell past clickable"><span>'
                     + i + '</span></div>' + (isSaturday? '</div>' : '');
        }
        monthStr = this.getHeaderDatePicker() + monthStr;
        return monthStr;
    }

    initDatepicker() : void {
        var self = this;
        $('.month-item').click(function(e) {
            self.openMonthItem(e, this);
        });

        $('.clickable').click(function(e){
            var daySelected = $(this).text();
            self.selectItemDate(daySelected);
        });

        $('.go-back-month').click(function(e){
            self.goBackMonth(this);
        });
    }

    selectItemDate(daySelected) : void {
        this.callback.next({value : new Date(this.yearCalendar, this.monthCalendar, daySelected), model : this.destination});
        this.close();
    }

    goBackMonth(element) : void {
        $(element).parent().parent('.view-month').fadeOut();
        setTimeout(function(){
            $('.view-month').children('.title').addClass('active');
        }, 500);
        setTimeout(function(){
            $('.view-year').children('.ink').removeClass('animate');
        }, 500);
        setTimeout(function(){
            $('.view-year').children('.ink').remove();
        }, 1000);
    }

    openMonthItem(e, element) : void {
        this.monthCalendar = parseInt($(element).attr('month'));
        var date : Date = new Date(this.yearCalendar, this.monthCalendar, 1);
        var monthStr = this.buildMonth(date);
        var monthName = this.getMonthName(this.monthCalendar);

        $('.month-name').html(monthName);
        $('.date-year').html(String(date.getFullYear()));
        $('.grid-days').html(monthStr);

        var d = 0;
        var month = '.view-month';
        var parent = $('.view-year');

        if(parent.find('.ink').length === 0)
            parent.prepend('<span style="background:' + $(month).children('.title').css('background-color') + '" class="ink"></span>');

        var ink = parent.find('.ink');
        if(!ink.height() && !ink.width()) {
            d = Math.max(parent.outerWidth(), parent.outerHeight());
            ink.css({height: d, width: d});
        }

        var x = e.pageX - parent.offset().left - ink.width()/2;
        var y = e.pageY - parent.offset().top - ink.height()/2;

        ink.css({top: y + 'px', left: x + 'px'}).addClass('animate');

        $(month).delay(500).fadeIn();
        setTimeout(function(){
            $(month).children('.title').removeClass('active');
        }, 500);
        this.initDatepicker();
    }
}
