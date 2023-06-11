import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

interface ApiResponse {
  success: boolean;
  message: string;
}

@Component({
  selector: 'app-registar',
  templateUrl: './registar.page.html',
  styleUrls: ['./registar.page.scss'],
})
export class RegistarPage {
  nome: string;
  email: string;
  password: string;

  constructor(
    private router: Router,
    private http: HttpClient,
    private toastController: ToastController
  ) {
    this.nome = '';
    this.email = '';
    this.password = '';
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

  async registar() {
    const data = {
      nome: this.nome,
      email: this.email,
      password: this.password,
    };

    const url = 'http://localhost/api/registo.php';
    try {
      const response: any = await this.http.post(url, data).toPromise();

      if (response.success) {
        this.mostrarAviso('Utilizador registado com sucesso.');
        this.router.navigate(['/login']);
      } else if (response.message) {
        this.mostrarAviso(response.message);
      } else {
        this.mostrarAviso('Ocorreu um erro ao registar o utilizador.');
      }
    } catch (error) {
      console.error(error);
      this.mostrarAviso('Ocorreu um erro ao registar o utilizador.');
    }
  }
}
