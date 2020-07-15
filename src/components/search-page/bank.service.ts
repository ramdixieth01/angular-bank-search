import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import{catchError,tap,map } from 'rxjs/operators';

import { IBank } from './banklist';

@Injectable({
    providedIn:'root'
})
export class BankService{
private bankurl='https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI';
constructor(private http : HttpClient){}

    getBanks() : Observable<IBank[]>{
        return this.http.get<IBank[]> (this.bankurl).pipe(
            tap(data=>console.log('All:'+ JSON.stringify(data))),
            catchError(this.handleError)
            );
        }
        
    getBank(ifsc: string): Observable<IBank | undefined> {
            return this.getBanks()
      .pipe(map((banks: IBank[]) => banks.find(b => b.ifsc === ifsc))
      );
          }

        private handleError(err :HttpErrorResponse){
            let errorMessage='';
            if(err.error instanceof ErrorEvent){
                errorMessage=`An error Occured :${err.error.message}`;
            }
            else{
                errorMessage=` Server returned code : ${err.status},error message is : ${err.message}`;
            }
            console.log(errorMessage);
            return throwError(errorMessage);
        }
       
    }
