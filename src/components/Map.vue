<template>
  <div>
    <vl-map
      :load-tiles-while-animating="true"
      :load-tiles-while-interacting="true"
      data-projection="EPSG:4326"
      style="height: calc(100vh - 100px)"
    >
      <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation" />

      <DefectsLayer />

      <vl-layer-tile id="osm">
        <vl-source-osm />
      </vl-layer-tile>
    </vl-map>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import DefectsLayer from '@/components/DefectsLayer.vue'

@Component({
  components: {
    DefectsLayer,
  },
})
export default class Map extends Vue {
  private zoom = 3

  private center = [0, 0]

  private rotation = 0

  private geolocPosition = undefined

  private overlayCoordinate = [30, 30]
}
</script>

<style scoped lang="scss">
.marker {
  cursor: pointer;
}
</style>
