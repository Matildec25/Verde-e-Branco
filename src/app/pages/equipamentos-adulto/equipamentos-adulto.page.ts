import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-equipamentos-adulto',
  templateUrl: './equipamentos-adulto.page.html',
  styleUrls: ['./equipamentos-adulto.page.scss'],
})
export class EquipamentosAdultoPage {
  produtos: any = [];

  constructor(private http: HttpClient, private toastController: ToastController) {}

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

  async adicionarAoCarrinho(produto: any) {
    let carrinho: any[] = [];
    const carrinhoData = localStorage.getItem('carrinho');
    if (carrinhoData) {
      carrinho = JSON.parse(carrinhoData);
    }
    carrinho.push(produto);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    const toast = await this.toastController.create({
      message: 'Produto adicionado ao carrinho.',
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }
}
