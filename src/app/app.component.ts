import { Component } from '@angular/core';
import { EnderecoService } from './endereco.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  endereco: any = {};

  constructor(private endeServ: EnderecoService) {}

  onSubmit(formulario: any) {
    if(formulario.form.status == 'INVALID') {
      alert('Formulário inválido! Os dados estão incorretos!');
      return;
    }
      

    this.endeServ.getEndereco(formulario.form.value.zipcode).subscribe(endereco => {
      this.endereco = endereco;
      console.log(this.endereco);
    });
  
    console.log(formulario.form.value);
  }
}
