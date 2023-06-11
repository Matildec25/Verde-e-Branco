
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-colecoes',
  templateUrl: './colecoes.page.html',
  styleUrls: ['./colecoes.page.scss'],
})
export class ColecoesPage {

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
