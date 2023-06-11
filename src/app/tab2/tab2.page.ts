import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  nextGamesEvents: any[] = [];
  hasUpcomingGames: boolean = true;

  constructor() { }

  ngOnInit() {
    this.loadNextGamesEvents('Futebol'); // Loads football events by default
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
      const options = {
        method: 'GET',
        url: 'http://localhost/api/nextgames.php?team_id=3001',
      };

      try {
        const response = await axios.request(options);
        const allEvents = response.data.data.events;
        this.nextGamesEvents = allEvents.slice(0, 10);
        this.hasUpcomingGames = this.nextGamesEvents.length > 0;
      } catch (error) {
        console.error(error);
        this.nextGamesEvents = []; // Set the game list as empty in case of an error
        this.hasUpcomingGames = false;
      }
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
      this.nextGamesEvents = allEvents.slice(0, 10);
      this.hasUpcomingGames = this.nextGamesEvents.length > 0;
    } catch (error) {
      console.error(error);
      this.nextGamesEvents = [];
      this.hasUpcomingGames = false;
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
      this.nextGamesEvents = allEvents.slice(0, 10);
      this.hasUpcomingGames = this.nextGamesEvents.length > 0;
    } catch (error) {
      console.error(error);
      this.nextGamesEvents = [];
      this.hasUpcomingGames = false;
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
      this.nextGamesEvents = allEvents.slice(0, 10);
      this.hasUpcomingGames = this.nextGamesEvents.length > 0;
    } catch (error) {
      console.error(error);
      this.nextGamesEvents = [];
      this.hasUpcomingGames = false;
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
      this.nextGamesEvents = allEvents.slice(0, 10);
      this.hasUpcomingGames = this.nextGamesEvents.length > 0;
    } catch (error) {
      console.error(error);
      this.nextGamesEvents = [];
      this.hasUpcomingGames = false;
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
  }
}
