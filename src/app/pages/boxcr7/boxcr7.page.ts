import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { HttpClient } from '@angular/common/http';

import { ToastController } from '@ionic/angular';

interface Video {
  videoUrl: string;
  title: string;
  thumbnailUrl: string;
}

@Component({
  selector: 'app-boxcr7',
  templateUrl: './boxcr7.page.html',
  styleUrls: ['./boxcr7.page.scss'],
})
export class Boxcr7Page implements OnInit {
  video!: Video;
  produtos: any = [];


  constructor(private http: HttpClient, private toastController: ToastController) {}

  ngOnInit() {
    this.getVideo('7febDWzCISY');
    this.carregarProdutos();
  }

  async getVideo(videoId: string) {
    const apiKey = 'AIzaSyD6C9HJTqnmCcMDQv3l3fohINsHn2i7XwA';
    const videoUrlApi = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`;

    try {
      const videoItems = await axios.get(videoUrlApi);
      const item = videoItems.data.items[0];
      const videoUrl = `https://www.youtube.com/embed/${videoId}`;
      const title = item.snippet.title;
      const thumbnailUrl = item.snippet.thumbnails.maxres.url;

      // Preload image
      const img = new Image();
      img.src = thumbnailUrl;
      img.onload = () => {
        this.video = { videoUrl, title, thumbnailUrl };
      };
    } catch (error) {
      console.error(error);
    }
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







  
