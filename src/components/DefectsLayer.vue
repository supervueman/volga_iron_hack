<template>
  <div class="defects-items">
    <div v-for="(item, i) in mockDefects" :key="i">
      <vl-overlay v-if="item.coordinates" :position="item.coordinates">
        <div class="marker" @click="selectDefect(item)">
          <img src="/marker.png">
        </div>
      </vl-overlay>
    </div>

    <v-dialog v-model="isDefectItemOpen" width="500">
      <DefectItem :defect="selectedDefect" />
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { SmartQuery } from 'vue-apollo-decorators'

import Map from '@/components/Map.vue'
import DefectItem from './DefectItem.vue';

import TestGql from '@/graphql/DefectsGql.gql'

import { parseCoordinates } from '@/helpers/index'

import mockDefects from '@/mocks/defects.json'

const e = 45;

@Component({
  components: {
    Map,
    DefectItem,
  },
})
export default class DefectsLayer extends Vue {
  private isDefectItemOpen = false

  private selectedDefect = null

  @SmartQuery({
    query: TestGql,
    fetchPolicy: 'network-only',
    update: ({ defects }) => defects?.edges?.filter((edge: any) => edge?.node).map((edge: any) => ({
      ...edge.node,
      coordinates: edge?.node?.coordinates ? parseCoordinates(edge.node.coordinates) : null,
    }),
  )})
  private readonly defects: any[] = []

  private readonly mockDefects: any[] = mockDefects

  private selectDefect(item: any) {
    this.isDefectItemOpen = true
    this.selectedDefect = item
  }
}
</script>

<style scoped lang="scss">
.marker {
  width: 30px;
  cursor: pointer;
  transition: transform 0.5s;
  position: relative;
  top: -30px;
  left: -15px;

  &:hover {
    transform: scale(1.2);
  }

  img {
    width: 100%;
  }
}
</style>