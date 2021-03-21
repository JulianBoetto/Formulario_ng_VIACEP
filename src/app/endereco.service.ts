import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(private http: HttpClient) { }

  getEndereco(cep: any) {
    return this.http.get('https://viacep.com.br/ws/'+cep+'/json/')
  }
}
