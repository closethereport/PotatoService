<template>
  <DataTable :value="templates" :scrollable="true" scrollHeight="400px" :loading="loading">
    <Column field="name" header="Name" style="min-width: 200px"></Column>
    <Column field="country.name" header="Country" style="min-width: 200px"></Column>
    <Column field="representative.name" header="Representative" style="min-width: 200px"></Column>
    <Column field="status" header="Status" style="min-width: 200px"></Column>
  </DataTable>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
const templateDelectDialog = defineComponent({
  data() {
    return { templates: null, loading: false };
  },
  methods: {},
});

export default templateDelectDialog;
export type templateDelectDialogRef = InstanceType<typeof templateDelectDialog>;
</script>

<style lang="scss" scoped></style>
