import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage {
  carrinho: any[] = [];
  utilizador: any;

  constructor(
    private router: Router,
    private http: HttpClient,
    private toastController: ToastController
  ) {}

  ionViewDidEnter() {
    const utilizadorString = sessionStorage.getItem('utilizador');
    if (utilizadorString) {
      this.utilizador = JSON.parse(utilizadorString);
    }
    this.carregarCarrinho();
  }

  @HostListener('window:beforeunload')
  salvarCarrinho() {
    localStorage.setItem('carrinho', JSON.stringify(this.carrinho));
  }

  @HostListener('window:unload')
  limparCarrinho() {
    this.carrinho = [];
    localStorage.removeItem('carrinho');
  }

  carregarCarrinho() {
    const carrinhoData = localStorage.getItem('carrinho');
    if (carrinhoData) {
      this.carrinho = JSON.parse(carrinhoData);
    }
  }

  removerDoCarrinho(produto: any) {
    const index = this.carrinho.indexOf(produto);
    if (index > -1) {
      this.carrinho.splice(index, 1);
      localStorage.setItem('carrinho', JSON.stringify(this.carrinho));
    }
  }

  calcularPrecoTotal() {
    let total = 0;
    for (let produto of this.carrinho) {
      total += parseFloat(produto.preco);
    }
    return total;
  }

  efetuarEncomenda() {
    const idCliente = this.utilizador ? this.utilizador.id : null;

    if (!idCliente) {
      this.mostrarAviso('Efetue login antes de efetuar a encomenda.');
      return;
    }

    // Obter apenas os nomes dos artigos
    const nomesArtigos = this.carrinho.map(produto => produto.nome);

    // Preparar dados da encomenda
    const encomenda = {
      idCliente: idCliente,
      artigos: nomesArtigos,
      precoTotal: this.calcularPrecoTotal(),
    };

    // Enviar dados da encomenda para a base de dados
    let url = 'http://localhost/api/encomendas.php';
    this.http.post(url, encomenda).subscribe(
      (response: any) => {
        if (response.success) {
          this.mostrarAviso('Encomenda efetuada com sucesso!');
          this.limparCarrinho();
        } else {
          this.mostrarAviso('Ocorreu um erro ao efetuar a encomenda. Tente novamente.');
        }
      },
      (error: HttpErrorResponse) => {
        console.error(error);
        this.mostrarAviso('Ocorreu um erro ao efetuar a encomenda. Tente novamente.');
      }
    );
  }

  async mostrarAviso(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000,
      position: 'top',
      cssClass: 'custom-toast',
    });

    toast.style.fontFamily = 'Poppins, sans-serif';
    toast.style.fontSize = '14px';
    toast.style.textAlign = 'center';
    toast.style.padding = '16px';
    toast.style.borderRadius = '8px';

    toast.present();
  }
}
