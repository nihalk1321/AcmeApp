import { Component, Input, Output,EventEmitter } from '@angular/core';


@Component({
    selector : 'ht-star',
    templateUrl : 'StarComponent.html'
})
export class StarComponent {

    @Input()
    rating:any;
    @Output()
    clickRating: EventEmitter<number> = new EventEmitter<number>();
     
    constructor()
    {
        this.rating="";
        this.clickRating=new EventEmitter<number>();
    }


    
   
}