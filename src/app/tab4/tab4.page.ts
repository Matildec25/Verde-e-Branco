import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page {
  utilizador: any;
  encomendas: any[] = [];
  bilhetes: any[] = [];

  constructor(
    private http: HttpClient,
    private alertController: AlertController
  ) {}

  ionViewDidEnter() {
    this.carregarUtilizador();
    this.carregarEncomendas();
    this.carregarBilhetes();
  }

  async carregarUtilizador() {
    const utilizadorString = sessionStorage.getItem('utilizador');
    if (utilizadorString) {
      this.utilizador = JSON.parse(utilizadorString);
    }
  }

  async carregarEncomendas() {
    const idCliente = this.utilizador ? this.utilizador.id : null;
    if (idCliente) {
      const url = `http://localhost/api/getEncomendas.php?idCliente=${idCliente}`;
      try {
        const response: any = await this.http.get(url).toPromise();
        if (response.success) {
          this.encomendas = response.encomendas;
        } else {
          this.mostrarAviso('Ocorreu um erro ao carregar as encomendas.');
        }
      } catch (error) {
        console.error(error);
        this.mostrarAviso('Ocorreu um erro ao carregar as encomendas.');
      }
    }
  }

  async carregarBilhetes() {
    const idCliente = this.utilizador ? this.utilizador.id : null;
    if (idCliente) {
      const url = `http://localhost/api/getBilhetes.php?idCliente=${idCliente}`;
      try {
        const response: any = await this.http.get(url).toPromise();
        if (response.success) {
          this.bilhetes = response.bilhetes;
        } else {
          this.mostrarAviso('Ocorreu um erro ao carregar os bilhetes.');
        }
      } catch (error) {
        console.error(error);
        this.mostrarAviso('Ocorreu um erro ao carregar os bilhetes.');
      }
    }
  }

  async abrirModal() {
    const alert = await this.alertController.create({
      header: 'Valor em Atraso',
      message: `O valor em atraso é ${this.utilizador.quotas}€`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Pagar',
          handler: () => {
            this.atualizarQuotas();
          },
        },
      ],
    });

    await alert.present();
  }

  async atualizarQuotas() {
    const data = {
      quotas: 0,
    };

    const url = 'http://localhost/api/quotas.php';
    try {
      const response: any = await this.http.post(url, data).toPromise();

      if (response.success) {
        this.mostrarAviso('Valor das quotas atualizado com sucesso.');

        // Atualizar o valor das quotas na propriedade utilizador
        this.utilizador.quotas = 0;

        // Atualizar o sessionStorage com o utilizador atualizado
        sessionStorage.setItem('utilizador', JSON.stringify(this.utilizador));
      } else if (response.message) {
        this.mostrarAviso(response.message);
      } else {
        this.mostrarAviso('Ocorreu um erro ao atualizar o valor das quotas.');
      }
    } catch (error) {
      console.error(error);
      this.mostrarAviso('Ocorreu um erro ao atualizar o valor das quotas.');
    }
  }

  async mostrarAviso(mensagem: string) {
    const alert = await this.alertController.create({
      message: mensagem,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
