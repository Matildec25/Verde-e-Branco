import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-equipamentos-crianca',
  templateUrl: './equipamentos-crianca.page.html',
  styleUrls: ['./equipamentos-crianca.page.scss'],
})
export class EquipamentosCriancaPage {
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
