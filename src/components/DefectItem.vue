<template>
  <v-card>
    <v-card-title>Объект: {{ defect.item }}</v-card-title>
    <v-card-text>
      <v-list>
        <v-list-item v-for="(item, i) in defectInfo" :key="i">
          {{ item.name }} - {{ item.value }}
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { serverUrl } from '@/variables/index'

const defectFields: any = {
  item: 'Объект',
  pn: 'П-Н',
  kilometer: 'Км',
  meter: 'М',
  side: 'Сторона',
  parameter: 'Параметр',
  location: 'Тип',
  type: 'Дефект',
  speedLimit: 'Ограничение скорости (км/ч)',
  status: 'Статус',
  month: 'Месяц источника данных',
}

@Component({})
export default class DefectItem extends Vue {
  @Prop({ type: Object, default: () => ({})})
  private declare readonly defect: any

  get defectInfo() {
    const fields = ['item', 'pn', 'kilometer', 'meter', 'side', 'parameter', 'location', 'type', 'speedLimit', 'status', 'month']

    if (this.defect) {
      return fields.map((field) => ({
        name: defectFields[field],
        value: this.defect[field],
      }))
    }

    return []
  }
}
</script>
