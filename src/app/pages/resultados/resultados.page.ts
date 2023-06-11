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
  selector: 'app-resultados',
  templateUrl: 'resultados.page.html',
  styleUrls: ['resultados.page.scss']
})
export class ResultadosPage implements OnInit {
  nextGamesEvents: any[] = [];
  teamFormEvents: any[] = [];

  ngOnInit() {
    this.loadNextGamesEvents('Futsal');
    this.loadTeamFormEvents('Futsal');
  }

  async loadNextGamesEvents(modality: string) {
    if (modality === 'Futsal') {
      await this.loadNextGamesFutsalEvents();
    } else if (modality === 'Andebol') {
      await this.loadNextGamesAndebolEvents();
    } else if (modality === 'Basket') {
      await this.loadNextGamesBasketEvents();
    } else if (modality === 'Volley') {
      await this.loadNextGamesVolleyEvents();
    } else {
      const options = {};

      try {
        const response = await axios.request(options);
        const allEvents = response.data.data.events;
        if (allEvents.length > 0) {
          this.nextGamesEvents = allEvents.slice(0, 10);
        } else {
          this.nextGamesEvents = [];
        }
      } catch (error) {
        console.error(error);
        this.nextGamesEvents = []; // Define a lista de jogos como vazia em caso de erro
      }
    }
  }

  async loadTeamFormEvents(modality: string) {
    if (modality === 'Futsal') {
      await this.loadTeamFormFutsalEvents();
    } else if (modality === 'Andebol') {
      await this.loadTeamFormAndebolEvents();
    } else if (modality === 'Basket') {
      await this.loadTeamFormBasketEvents();
    } else if (modality === 'Volley') {
      await this.loadTeamFormVolleyEvents();
    } else {
      const options = {};

      try {
        const response = await axios.request(options);
        const allEvents = response.data.data.events;
        if (allEvents.length > 0) {
          this.teamFormEvents = allEvents.slice(0, 5);
        } else {
          this.teamFormEvents = [];
        }
      } catch (error) {
        console.error(error);
        this.teamFormEvents = []; // Define a lista de jogos como vazia em caso de erro
      }
    }
  }

  async loadTeamFormFutsalEvents() {
    const options = {
      method: 'GET',
      url: 'http://localhost/api/teamformfutsal.php?team_id=26720',
    };

    try {
      const response = await axios.request(options);
      const allEvents = response.data.data.events;
      if (allEvents.length > 0) {
        this.teamFormEvents = allEvents.slice(0, 5);
      } else {
        this.teamFormEvents = [];
      }
    } catch (error) {
      console.error(error);
    }
  }

  async loadTeamFormVolleyEvents() {
    const options = {
      method: 'GET',
      url: 'http://localhost/api/teamformvolley.php?team_id=267522',
    };

    try {
      const response = await axios.request(options);
      const allEvents = response.data.data.events;
      if (allEvents.length > 0) {
        this.teamFormEvents = allEvents.slice(0, 5);
      } else {
        this.teamFormEvents = [];
      }
    } catch (error) {
      console.error(error);
    }
  }

  async loadTeamFormBasketEvents() {
    const options = {
      method: 'GET',
      url: 'http://localhost/api/teamformbasket.php?team_id=326644',
    };

    try {
      const response = await axios.request(options);
      const allEvents = response.data.data.events;
      if (allEvents.length > 0) {
        this.teamFormEvents = allEvents.slice(0, 5);
      } else {
        this.teamFormEvents = [];
      }
    } catch (error) {
      console.error(error);
    }
  }

  async loadTeamFormAndebolEvents() {
    const options = {
      method: 'GET',
      url: 'http://localhost/api/teamformandebol.php?team_id=6795',
    };

    try {
      const response = await axios.request(options);
      const allEvents = response.data.data.events;
      if (allEvents.length > 0) {
        this.teamFormEvents = allEvents.slice(0, 5);
      } else {
        this.teamFormEvents = [];
      }
    } catch (error) {
      console.error(error);
    }
  }

  async loadNextGamesFutsalEvents() {
    const options = {
      method: 'GET',
      url: 'http://localhost/api/nextgamesfutsal.php?team_id=26720',
    };

    try {
      const response = await axios.request(options);
      const allEvents = response.data.data.events;
      if (allEvents.length > 0) {
        this.nextGamesEvents = allEvents.slice(0, 10);
      } else {
        this.nextGamesEvents = [];
      }
    } catch (error) {
      console.error(error);
    }
  }

  async loadNextGamesAndebolEvents() {
    const options = {
      method: 'GET',
      url: 'http://localhost/api/nextgamesandebol.php?team_id=6795',
    };

    try {
      const response = await axios.request(options);
      const allEvents = response.data.data.events;
      if (allEvents.length > 0) {
        this.nextGamesEvents = allEvents.slice(0, 10);
      } else {
        this.nextGamesEvents = [];
      }
    } catch (error) {
      console.error(error);
    }
  }

  async loadNextGamesVolleyEvents() {
    const options = {
      method: 'GET',
      url: 'http://localhost/api/nextgamesvolley.php?team_id=267522',
    };

    try {
      const response = await axios.request(options);
      const allEvents = response.data.data.events;
      if (allEvents.length > 0) {
        this.nextGamesEvents = allEvents.slice(0, 10);
      } else {
        this.nextGamesEvents = [];
      }
    } catch (error) {
      console.error(error);
    }
  }

  async loadNextGamesBasketEvents() {
    const options = {
      method: 'GET',
      url: 'http://localhost/api/nextgamesbasket.php?team_id=326644',
    };

    try {
      const response = await axios.request(options);
      const allEvents = response.data.data.events;
      if (allEvents.length > 0) {
        this.nextGamesEvents = allEvents.slice(0, 10);
      } else {
        this.nextGamesEvents = [];
      }
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

  updateTeamId(teamId: number, modality: string) {
    this.loadNextGamesEvents(modality);
    this.loadTeamFormEvents(modality);

  }
}



