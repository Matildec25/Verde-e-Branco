import { Component, OnInit } from '@angular/core';
import axios from 'axios';

interface Playlist {
  id: string;
  videos: any[];
  name: string;
  playlistUrl: string;
  descricao: string;
}

@Component({
  selector: 'app-futebol',
  templateUrl: 'futebol.page.html',
  styleUrls: ['futebol.page.scss']
})
export class FutebolPage implements OnInit {

  teamFormEvents: any;  currentVideoIndex: number = 0;
  nextGamesEvents: any;

  playlists: Playlist[] = [
    { 
      id: 'PLqorv6VY2dSfiobkpgKeUkYjM8AT24SOp', 
      playlistUrl: 'https://youtube.com/playlist?list=PLqorv6VY2dSfiobkpgKeUkYjM8AT24SOp', 
      name: 'Último Jogo', 
      videos: [], 
      descricao: 'Assiste aos destaques do último jogo do Sporting Clube de Portugal e acompanha os melhores momentos da partida.',
    },
  ];

  constructor() { }

  ngOnInit() {
    this.loadTeamFormEvents();
    
    for (const playlist of this.playlists) {
      this.getPlaylistVideos(playlist);
    }
    this.loadNextGamesEvents();
  }

  async loadTeamFormEvents() {
    const options = {
      method: 'GET',
      url: 'http://localhost/api/teamform.php?team_id=3001',
    };

    try {
      const response = await axios.request(options);
      const allEvents = response.data.data.events;
      const reversedEvents = allEvents.reverse();
      this.teamFormEvents = reversedEvents.slice(0, 5);
    } catch (error) {
      console.error(error);
    }
  }

  async loadNextGamesEvents() {
    const options = {
      method: 'GET',
      url: 'http://localhost/api/nextgames.php?team_id=3001',
    };
  
    try {
      const response = await axios.request(options);
      const allEvents = response.data.data.events;
      this.nextGamesEvents = allEvents.slice(0,10);
    } catch (error) {
      console.error(error);
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
    const maxResults = 5;
    const playlistItemsUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${maxResults}&playlistId=${playlist.id}&key=${apiKey}`;

    try {
      const playlistItems = await axios.get(playlistItemsUrl);
      for (const item of playlistItems.data.items) {
        const videoId = item.snippet.resourceId.videoId;
        const videoUrl = `https://www.youtube.com/embed/${videoId}`;
        const title = item.snippet.title;
        const thumbnailUrl = item.snippet.thumbnails.maxres.url;

        const img = new Image();
        img.src = thumbnailUrl;
        await new Promise<void>((resolve) => {
          img.onload = () => {
            playlist.videos[this.currentVideoIndex] = { videoUrl, title, thumbnailUrl };
            this.currentVideoIndex++;
            resolve();
          };
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  
  
}  


