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

  constructor(
    private http: HttpClient,
    private alertController: AlertController
  ) {}

  ionViewDidEnter() {
    const utilizadorString = sessionStorage.getItem('utilizador');
    if (utilizadorString) {
      this.utilizador = JSON.parse(utilizadorString);
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
