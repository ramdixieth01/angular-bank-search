import { Component,OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import{IBank} from './banklist';
import { BankService } from './bank.service';
@Component({
    selector:'banklist-detail',
    templateUrl:'banklist-detail.component.html',
    styleUrls:['./banklist-detail.component.css']
})
export class BanklistDetailComponent implements OnInit{
pageTitle:string='Bank Detail'; 
errorMessage = '';   
bank: IBank | undefined;
constructor(private route:ActivatedRoute,private router:Router,private bankService:BankService){
 console.log(this.route.snapshot.paramMap.get('ifsc'));
}
ngOnInit(){
   
    let id = +this.route.snapshot.paramMap.get('ifsc');
    // this.pageTitle = `${id}`;
    // this.bank={
    // "ifsc": "ABHY0065001",
    // "bank_id": 60,
    // "branch": "RTGS-HO",
    // "address": "ABHYUDAYA BANK BLDG., B.NO.71, NEHRU NAGAR, KURLA (E), MUMBAI-400024",
    // "city": "MUMBAI",
    // "district": "GREATER MUMBAI",
    // "state": "MAHARASHTRA",
    // "bank_name": "ABHYUDAYA COOPERATIVE BANK LIMITED"
    // };


    const param = this.route.snapshot.paramMap.get('ifsc');
    if (param) {
      const ifsc = param;
      this.getBank(ifsc);
    }
   
}
getBank(ifsc: string) {
    this.bankService.getBank(ifsc).subscribe(
      bank => this.bank = bank,
      error => this.errorMessage = <any>error);
  }
onBack(): void {
    this.router.navigate(['/searchpage']);
  }
}