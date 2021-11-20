<template>
  <div>
    <vl-map
      :load-tiles-while-animating="true"
      :load-tiles-while-interacting="true"
      data-projection="EPSG:4326"
      style="height: calc(100vh - 100px)"
    >
      <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"></vl-view>

      <vl-overlay id="overlay" :position="overlayCoordinate">
        <template slot-scope="scope">
          <div class="marker">
            <img :src="require('@/assets/marker.png')">
            <vl-feature v-if="overlayCoordinate" id="position-feature">
              <vl-geom-point :coordinates="overlayCoordinate" />
              <vl-style-box>
                <vl-style-icon src="./marker.png" :scale="0.4" :anchor="[0.5, 1]" />
              </vl-style-box>
            </vl-feature>
          </div>

          <div class="content">
            Hello world!<br>
            Position: {{ scope.position }}
          </div>
        </template>
      </vl-overlay>

      <vl-layer-tile id="osm">
        <vl-source-osm></vl-source-osm>
      </vl-layer-tile>
    </vl-map>
    <!-- <div style="padding: 20px">
      Zoom: {{ zoom }}<br>
      Center: {{ center }}<br>
      Rotation: {{ rotation }}<br>
      My geolocation: {{ geolocPosition }}
    </div> -->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class Map extends Vue {
  private zoom = 2

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