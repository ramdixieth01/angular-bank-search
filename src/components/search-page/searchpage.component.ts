import {Component,OnInit} from '@angular/core';
import{IBank} from './banklist';
import {BankService} from './bank.service';
@Component({
    selector:'search-page',
    templateUrl:'./searchpage.component.html',
    styleUrls:['./searchpage.component.css']
})
export class SearchPageComponent implements OnInit{
    // cities :string[];
    output:number [];
    // count=5;
    page:number;
    _bankinput:string;
    errorMessage:string;
    selectedNumber: number=1;
    Favourite: boolean = false;
    p : number=1;
    // private _bankService;
//     _bankinput:string; 
   banks:IBank[]=[ ];
    constructor( private bankService : BankService){
        // this._bankService= bankService;
        // this.cities=['Mumbai','Ahmedabad','Kolkata','Chennai','Bangalore']; 
        this.output=[1,2,4,6,8];
       
    }
   

    //event handler for the select element's change event
    selectChangeHandler (event: any) {
      //update the ui
      this.selectedNumber = event.target.value;
    }
    get bankinput():string{
        return this._bankinput;
    }
    set bankinput(value:string){
        this._bankinput=value;
        this.filteredBanks = this.bankinput ? this.performFilter(this.bankinput) : this.banks;
    }
    filteredBanks: IBank[];
    performFilter(filterBy: string): IBank[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.banks.filter((bank: IBank) =>
              bank.bank_name.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
   
    ngOnInit() : void{
        this.bankService.getBanks().subscribe({
            next:banks =>{
                this.banks=banks
                this.filteredBanks=this.banks;
            },
            error:err =>{
                this.errorMessage=err;
            }
        });
        // this.filteredBanks=this.banks;
    }
}