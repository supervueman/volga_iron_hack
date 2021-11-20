<template>
  <v-card>
    <v-card-title>Таблица дефектов</v-card-title>
    <v-card-text>
      <div class="d-flex">
        <v-select label="Статус" outlined dense />
      </div>
      <v-data-table
        :items="defects.items"
        :headers="headers"
        :items-per-page="pagination.itemsPerPage"
        :page="pagination.page"
        :server-items-length="defects.total"
        @pagination="changePagination"
      />
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { SmartQuery } from 'vue-apollo-decorators'

import Map from '@/components/Map.vue'

import TestGql from '@/graphql/DefectsGql.gql'

@Component({
  components: {
    Map,
  },
})
export default class DefectsTable extends Vue {
  @SmartQuery({
    query: TestGql,
    fetchPolicy: 'network-only',
    variables() {
      return {
        offset: this.pagination.page * this.pagination.itemsPerPage,
        limit: this.pagination.itemsPerPage,
      }
    },
    update: ({ defects }) => {
      return {
        items: defects?.edges?.filter((edge: any) => edge?.node).map((edge: any) => edge.node),
        total: defects.total,
      }
    },
  })
  private readonly defects: any[] = []

  private limit = 10

  private offset = 0

  private pagination = {
    page: 1,
    itemsPerPage: 10,
    pageStart: 1,
    pageStop: 1,
    pageCount: 1,
    itemsLength: 0,
  }

  private headers = [
    {
      text: 'Объект',
      value: 'item',
    },
    {
      text: 'П-Н',
      value: 'pn',
    },
    {
      text: 'Км',
      value: 'kilometer',
    },
    {
      text: 'М',
      value: 'meter',
    },
    {
      text: 'Сторона',
      value: 'side',
    },
    {
      text: 'Параметр',
      value: 'parameter',
    },
    {
      text: 'Тип',
      value: 'location',
    },
    {
      text: 'Дефект',
      value: 'type',
    },
    {
      text: 'Огр.скорости (км/ч)',
      value: 'speedLimit',
    },
    {
      text: 'Статус',
      value: 'status',
    },
  ]

  private changePagination(pagination: any) {
    this.pagination = {
      ...pagination,
      itemsPerPage: pagination.itemsPerPage === -1 ? null : pagination.itemsPerPage
    }
  }
}
</script>
