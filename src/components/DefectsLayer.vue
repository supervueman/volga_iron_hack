<template>
  <div class="defects-items">
    <div v-for="(item, i) in mockDefects" :key="i">
      <vl-overlay v-if="item.coordinates" :position="item.coordinates">
        <template slot-scope="scope">
          <vl-feature>
            <vl-geom-point :coordinates="item.coordinates" />
            <vl-style-box>
              <vl-style-icon src="./marker.png" :scale="0.4" :anchor="[0.5, 1]" />
            </vl-style-box>
          </vl-feature>

          <div class="content">
            Hello world!<br>
            Position: {{ scope.position }}
          </div>

          <v-dialog v-model="isDefectItemOpen"></v-dialog>
        </template>
      </vl-overlay>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { SmartQuery } from 'vue-apollo-decorators'

import Map from '@/components/Map.vue'

import TestGql from '@/graphql/DefectsGql.gql'

import { parseCoordinates } from '@/helpers/index'

import mockDefects from '@/mocks/defects.json'

const e = 45;

@Component({
  components: {
    Map,
  },
})
export default class DefectsLayer extends Vue {
  private isDefectItemOpen = false

  @SmartQuery({
    query: TestGql,
    fetchPolicy: 'network-only',
    update: ({ defects }) => defects?.edges?.filter((edge: any) => edge?.node).map((edge: any) => ({
      ...edge.node,
      coordinates: edge?.node?.coordinates ? parseCoordinates(edge.node.coordinates) : null,
    }),
  )})
  private readonly defects: any[] = []

  private readonly mockDefects: any[] = mockDefects.map(item => ({
    ...item,
    coordinates: [2 * e * Math.random() - e, 2 * e * Math.random() - e]
  }))

  private mounted() {
    console.log(this.mockDefects)
  }
}
</script>
