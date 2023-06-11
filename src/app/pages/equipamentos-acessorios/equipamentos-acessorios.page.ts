import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-equipamentos-acessorios',
  templateUrl: './equipamentos-acessorios.page.html',
  styleUrls: ['./equipamentos-acessorios.page.scss'],
})
export class EquipamentosAcessoriosPage{

  produtos: any = [];

  constructor(private http: HttpClient) {}

  ionViewDidEnter() {
    this.carregarProdutos();
  }

  carregarProdutos() {
    let url = 'http://localhost/api/getProdutos.php';
    this.http.get(url).subscribe((data: any) => {
      console.log(data);
      this.produtos = data;
    });
  }

}
