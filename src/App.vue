<template>
  <div>
    <Beverage :isIced="beverageStore.currentTemp === 'Cold'" />
    <ul>
      <li>
        <template v-for="temp in beverageStore.temps" :key="temp.id">
          <label>
            <input
              type="radio"
              name="temperature"
              :id="`r${temp}`"
              :value="temp"
              v-model="beverageStore.currentTemp"
            />
            {{ temp }}
          </label>
        </template>
      </li>
      <li>
        <template v-for="base in beverageStore.bases" :key="base.id">
          <label>
            <input
              type="radio"
              name="Base Beverage"
              :id="`r${base.id}`"
              :value="base"
              v-model="beverageStore.currentBase"
            />
            {{ base.name }}
          </label>
        </template>
      </li>
      <li>
      <template v-for="syrup in beverageStore.syrups" :key="syrup.id">
        <label>
          <input
            type="radio"
            name="Syrups"
            :id="`r${syrup.id}`"
            :value="syrup"
            v-model="beverageStore.currentSyrup"
          />
          {{ syrup.name }}
        </label>
      </template>
    </li>
    <li>
    <template v-for="creamer in beverageStore.creamers" :key="creamer.id">
      <label>
        <input
          type="radio"
          name="Creamer"
          :id="`r${creamer.id}`"
          :value="creamer"
          v-model="beverageStore.currentCreamer"
        />
        {{ creamer.name }}
      </label>
    </template>
  </li>
    </ul>
    <input type="text" placeholder="Beverage Name" v-model="beverageStore.currentName"/>
    <button @click= "beverageStore.makeBeverage">🍺 Make Beverage</button>
  </div>
  <div id="beverage-container" style="margin-top: 20px">
    <h3>Saved Beverages</h3>
    <ul>
      <li v-for="bev in beverageStore.beverage" :key="bev.id">
        <label>
          <input 
            type="radio" 
            name="savedBeverages" 
            @change="beverageStore.showBeverage(bev)" 
          />
          {{ bev.name || 'Unnamed Beverage' }}
        </label>
      </li>
    </ul>
  </div>
  <div>
    <button @click="beverageStore.clearSaves">Clear Saved Beverages</button>
  </div>
</template>

<script setup lang="ts">
import Beverage from './components/Beverage.vue';
import { useBeverageStore } from './stores/beverageStore';
const beverageStore = useBeverageStore();
</script>


<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}
ul {
  list-style: none;
}
</style>
