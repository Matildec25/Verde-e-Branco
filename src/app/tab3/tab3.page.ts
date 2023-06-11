import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import Swiper from 'swiper';

interface Playlist {
  id: string;
  videos: any[];
  name: string;
  playlistUrl: string;
  descricao: string;
}

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  playlists: Playlist[] = [

    { id: 'PLqorv6VY2dSfiobkpgKeUkYjM8AT24SOp', playlistUrl: 'https://www.youtube.com/playlist?list=PLqorv6VY2dSfiobkpgKeUkYjM8AT24SOp', name: 'Último Jogo', videos: [], descricao: 'Assiste aos destaques do último jogo do Sporting Clube de Portugal e acompanha os melhores momentos da partida.', },
    { id: 'PLqorv6VY2dSdLgPp1MfLhItu_bvtf31VA', playlistUrl: 'https://www.youtube.com/playlist?list=PLqorv6VY2dSdLgPp1MfLhItu_bvtf31VA', name: 'Pós Jogo', videos: [], descricao: 'Acompanha de perto a análise do mister Rúben Amorim ao último jogo.', },
    { id: 'PLgvl_oySzGc02-IYUmvq8IdR3uiB3Ui7T', playlistUrl: 'https://www.youtube.com/playlist?list=PLgvl_oySzGc02-IYUmvq8IdR3uiB3Ui7T', name: 'Backstages', videos: [], descricao: 'Aqui podes ver o último Backstage lançado no Youtube. Pré jogo, balneário, adeptos, golos e muito mais...' },
    { id: 'PLgvl_oySzGc23_hJPeKdbpX2g4C6ymKCW', playlistUrl: 'https://www.youtube.com/playlist?list=PLgvl_oySzGc23_hJPeKdbpX2g4C6ymKCW', name: 'ADN DE LEÃO', videos: [], descricao: 'Fica a conhecer o podcast do leão. Convidados todas as semanas num podcast dirigido por Guilherme Gieirinhas.' },
    { id: 'PLgvl_oySzGc3zUx1C07OqYAmMKtfTHKaB', playlistUrl: 'https://www.youtube.com/playlist?list=PLgvl_oySzGc3zUx1C07OqYAmMKtfTHKaB', name: 'INSIDE SPORTING', videos: [], descricao: 'Queres ver de perto como são os treinos do Sporting? Agora isso já é possível. Não percas o vídeo mais recente!' }


  ];



  news: any[] = [];


  constructor() { }

  ionViewDidEnter() {
    const apiUrl = `https://newsapi.org/v2/top-headlines?q=Sporting&country=pt&category=sports&apiKey=c373671f4ffb4431a3269fd41a0a9dcd`;

    axios.get(apiUrl)
      .then(response => {
        console.log(response.data);
        this.news = response.data.articles.slice(0, 5);
        this.sortNewsByDate();
        this.initSwiper();
      })
      .catch(error => {
        console.error(error);
      });
  }

  sortNewsByDate() {
    this.news.sort((a, b) => {
      const dateA = new Date(a.publishedAt);
      const dateB = new Date(b.publishedAt);
      return dateB.getTime() - dateA.getTime();
    });
  }



  initSwiper() {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
    });
  }


  ngOnInit() {
    for (const playlist of this.playlists) {
      this.getPlaylistVideos(playlist);
    }

  }
   
  
  formatDate(timestamp: number): string {
    const date = new Date(timestamp * 1000);
    const formattedDate = date.toLocaleDateString(); 
    const formattedTime = date.toLocaleTimeString(); 
    return `${formattedDate} ${formattedTime}`; 
  }

  async getPlaylistVideos(playlist: Playlist) {
    const apiKey = 'AIzaSyD6C9HJTqnmCcMDQv3l3fohINsHn2i7XwA';
    const maxResults = 1;
    const playlistItemsUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${maxResults}&playlistId=${playlist.id}&key=${apiKey}`;

    try {
      const playlistItems = await axios.get(playlistItemsUrl);
      for (const item of playlistItems.data.items) {
        const videoId = item.snippet.resourceId.videoId;
        const videoUrl = `https://www.youtube.com/embed/${videoId}`;
        const title = item.snippet.title;
        const thumbnailUrl = item.snippet.thumbnails.maxres.url;
        const date = item.snippet.publishedAt.substring(0, 10);

        const img = new Image();
        img.src = thumbnailUrl;
        img.onload = () => {
          playlist.videos.push({ videoUrl, title, thumbnailUrl, date });
        };
      }
    } catch (error) {
      console.error(error);
    }
  }
}
