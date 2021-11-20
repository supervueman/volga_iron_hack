<template>
  <v-card>
    <v-card-title>Таблица дефектов</v-card-title>
    <v-card-text>
      <div class="d-flex align-center">
        <v-select v-model="filters.itemIlike" :items="objects" label="Объект" outlined dense class="mr-4" hide-details />
        <v-select v-model="filters.sideIlike" :items="sides" label="Сторона" outlined dense class="mr-4" hide-details />
        <v-select v-model="filters.locationIlike" :items="types" label="Тип" outlined dense class="mr-4" hide-details />
        <v-select v-model="filters.typeIlike" :items="defectsTypes" label="Дефект" outlined dense class="mr-4" hide-details />
        <v-select v-model="filters.monthIlike" :items="months" label="Месяц" outlined dense class="mr-4" hide-details />
        <v-select v-model="filters.statusIlike" :items="statuses" label="Статус" outlined dense class="mr-4" hide-details />
        <v-btn @click="clearFilters">Очистить</v-btn>
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

import { statuses, types, sides, months, defectsTypes, objects } from '@/variables'

const defaultFilters = {
  itemIlike: '',
  sideIlike: '',
  locationIlike: '',
  typeIlike: '',
  statusIlike: '',
  monthIlike: '',
}

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
      let filters: any = null

      for (let key in this.filters) {
        if(this.filters[key]) {
          if (!filters) {
            filters = {}
          }

          filters[key] = `%${this.filters[key]}%`
        }
      }
      return {
        offset: this.pagination.page * this.pagination.itemsPerPage,
        limit: this.pagination.itemsPerPage,
        ...(filters && { filters })
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

  private statuses = statuses

  private types = types

  private sides = sides

  private months = months

  private defectsTypes = defectsTypes

  private objects = objects

  private limit = 10

  private offset = 0

  private filters = {
    itemIlike: '',
    sideIlike: '',
    locationIlike: '',
    typeIlike: '',
    statusIlike: '',
    monthIlike: '',
  }

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
      text: 'Месяц',
      value: 'month',
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

  private clearFilters() {
    this.filters = { ...defaultFilters }
  }
}
</script>
