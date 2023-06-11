import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-equipamentos-mulher',
  templateUrl: './equipamentos-mulher.page.html',
  styleUrls: ['./equipamentos-mulher.page.scss'],
})
export class EquipamentosMulherPage  {

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
