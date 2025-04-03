import { defineStore } from 'pinia';
import tempretures from '../data/tempretures.json';
import bases from '../data/bases.json';
import syrups from '../data/syrups.json';
import creamers from '../data/creamers.json';
import { BeverageType } from '../types/beverage';


//^correct


export const useBeverageStore = defineStore('BeverageStore', {
  state: () => ({
    temps: tempretures,
    currentTemp: tempretures[0],
    bases: bases,
    currentBase: bases[0],
    syrups: syrups,
    currentSyrup: syrups[0],
    creamers: creamers,
    currentCreamer: creamers[0],
    currentName: "",
    beverage: [] as  BeverageType[],
    currentBeverage: null as BeverageType | null,

  }),


  actions: {
    
    makeBeverage() {
      this.currentBeverage = {
        name: this.currentName,
        id: '${this.currentBase.id}- ${this.currentTemp.id}-${this.currentSyrup.id}-${this.currentCreamer.id}',
        temp: this.currentTemp,
        base: this.currentBase,
        syrup: this.currentSyrup,
        creamer: this.currentCreamer,
      };
      this.beverage.push(this.currentBeverage);
    },
    

    //v does not work
    showBeverage(bev: BeverageType) {
      this.currentBeverage = bev;
      this.currentBase = bev.base;
      this.currentTemp = bev.temp;
      this.currentSyrup = bev.syrup;
      this.currentCreamer = bev.creamer;
      this.currentName = bev.name || "";  // Set the name as well if you want it to be visible
    },
    
    clearSaves() {
      this.beverage = [];  // Clears the saved beverages list
      localStorage.removeItem('pinia');  // Removes the Pinia store data from localStorage

    },

  },
  persist: true,
});
