import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email!: string;
  password!: string;
  utilizadores: any = [];

  constructor(
    private router: Router,
    private http: HttpClient,
    private toastController: ToastController
  ) {}

  ionViewDidEnter() {
    this.carregarUtilizadores();
  }

  carregarUtilizadores() {
    let url = 'http://localhost/api/getUtilizadores.php';
    this.http.get(url).subscribe((data: any) => {
      console.log(data);
      this.utilizadores = data;
    });
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

  login() {
    const utilizador = this.utilizadores.find(
      (u: any) => u.email === this.email && u.password === this.password
    );

    if (utilizador) {
      // Salvar utilizador na sessão
      sessionStorage.setItem('utilizador', JSON.stringify(utilizador));

      this.router.navigate(['/tabs/tab3']);
    } else {
      this.mostrarAviso('Credenciais inválidas. Tente novamente.');
    }
  }
}
