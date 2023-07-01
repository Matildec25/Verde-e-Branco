import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-comprarbilhetes',
  templateUrl: 'comprarbilhetes.page.html',
  styleUrls: ['comprarbilhetes.page.scss']
})
export class ComprarbilhetesPage {
  ticketType: string = 'socio';
  sectors: string[] = ['Central A', 'Central B', 'Lateral A', 'Lateral B', 'Superior A', 'Superior B'];
  selectedSector: string = '';
  seats: string[] = ['Lugar 1', 'Lugar 2', 'Lugar 3'];
  selectedSeat: string = '';
  numeroSocio: string = '';
  utilizador: any;

  constructor(
    private alertController: AlertController,
    private http: HttpClient,
    private toastController: ToastController
  ) {}

  ionViewDidEnter() {
    const utilizadorString = sessionStorage.getItem('utilizador');
    if (utilizadorString) {
      this.utilizador = JSON.parse(utilizadorString);
    }
  }

  async comprarBilhete() {
    if (!this.selectedSector || !this.selectedSeat) {
      const alert = await this.alertController.create({
        header: 'Erro',
        message: 'Por favor, escolha um setor e um lugar.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    const ticketTypeText = this.ticketType === 'socio' ? 'Sócio' : 'Não Sócio';

    const alert = await this.alertController.create({
      header: 'Compra de Bilhete',
      message: `Você selecionou um bilhete ${ticketTypeText} para o setor ${this.selectedSector} e o lugar ${this.selectedSeat}. Deseja prosseguir?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary'
        },
        {
          text: 'Confirmar',
          handler: () => {
            const idCliente = this.utilizador ? this.utilizador.id : null;

            if (!idCliente) {
              this.mostrarAviso('Efetue login antes de comprar o bilhete.');
              return;
            }

            // Preparar dados do bilhete
            const bilhete = {
              idCliente: idCliente,
              setor: this.selectedSector,
              lugar: this.selectedSeat,
              num_socio: this.numeroSocio
            };

            // Enviar dados do bilhete para a base de dados
            let url = 'http://localhost/api/bilhetes.php';
            this.http.post(url, bilhete).subscribe(
              (response: any) => {
                if (response.success) {
                  this.mostrarAviso('Bilhete comprado com sucesso!');
                } else {
                  this.mostrarAviso('Ocorreu um erro ao comprar o bilhete. Tente novamente.');
                }
              },
              (error: HttpErrorResponse) => {
                console.error(error);
                this.mostrarAviso('Ocorreu um erro ao comprar o bilhete. Tente novamente.');
              }
            );
          }
        }
      ]
    });

    await alert.present();
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

  onSectorChange() {
    console.log('Setor selecionado:', this.selectedSector);
  }
}
