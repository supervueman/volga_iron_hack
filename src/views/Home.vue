<template>
  <div>
    <Map />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { SmartQuery } from 'vue-apollo-decorators'

import Map from '@/components/Map.vue'

import TestGql from '@/graphql/TestGql.gql'

@Component({
  components: {
    Map,
  },
})
export default class Home extends Vue {
  @SmartQuery({
    query: TestGql,
    fetchPolicy: 'network-only',
    update(data) {
      console.log(data)
      return data
    },
  })
  private readonly shipsRepairPlan = []
  
}
</script>
