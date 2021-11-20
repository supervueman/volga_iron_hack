<template>
  <div class="defects-items">
    <div v-for="(item, i) in defects" :key="i">
      <vl-overlay v-if="item.coordinates" id="overlay" :position="item.coordinates">
        <template slot-scope="scope">
          <vl-feature id="position-feature">
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

  private readonly defectsMock: any[] = [
    {
      item: 'Маяч. метка',
      pn: '1 - 12702',
      kilometer: '857',
      meter: '898',
      side: 'Левая (1)',
      parameter: '-0.0',
      location: 'Полностью',
      type: 'Отсутствует разметка контрольных сечений рельсовой плети',
      speedLimit: '15 км/ч',
      status: null,
      coordinates: [-1.324, 423],
      id: '5f92e47f-04da-4388-9b41-dbecbc58263d',
      dateCreated: '2021-11-20T12:16:40.725183',
      dateUpdated: '2021-11-20T12:16:40.725192',
      dateDeleted: null,
    },
  ]
}
</script>
