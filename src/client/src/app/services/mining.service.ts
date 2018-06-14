import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';

import { Mining } from '../Mining' ;

@Injectable()
export class MiningService {
  domain: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

    getMinings(){
      return this.http.get<Mining[]>(`${this.domain}/api/mining`)
        .map(res => res);
    }

    addMining(newMining: Mining){
      return this.http.post<Mining>(`${this.domain}/api/mining`, newMining)
        .map(res => res);
    }

    deleteMining(id){
      return this.http.delete<Mining>(`${this.domain}/api/mining/${id}`)
        .map(res => res);
    }

    updateMining(newMining){
      return this.http.put<Mining>(`${this.domain}/api/mining/${newMining._id}`, newMining)
        .map(res => res)
    }

}
