<script setup>
import DocumentItem from '@components/documents/DocumentItem.vue';
import draggable from 'vuedraggable';
import { ref, reactive, inject, computed } from 'vue';

const props = defineProps({
  list: { type: Array, default: () => [] },
  parentGroup: { type: String, default: 'section' },
  childGroup: { type: String, default: 'document' }
});

const changeSections = inject('setSections');
const changeChildren = inject('setChildren');

const exposedItems = reactive({});
let itemType = ref(props.parentGroup);

const copiedList = computed({
  get() {
    return props.list;
  },
  set(val) {
    const handlers = {
      'document': () => changeChildren(val),
      'section': () => changeSections(val),
    };
    handlers[itemType.value]();
  }
});

const eventHandlers = {
  'expose': ({ id, exposed }) => exposedItems[id] = exposed,
};
const eventHandler = (payload) => {
  const event = eventHandlers[payload.action];
  if (event) event(payload);
}

const changeDocType = (event) => itemType.value = event.item.dataset.type;
</script>

<template>
  <draggable
    v-model="copiedList"
    @start="changeDocType"
    item-key="id"
    tag="div"
    :group="parentGroup"
    class="document-list"
    handle=".document-item_action--move"
  >
    <template #item="{ element }">
      <section
        :data-type="element.type"
        :class="[
          'document-list_wrap',
          { 'document-list_wrap--no-children': !element.children }
        ]"
      >
        <DocumentItem
          v-bind="element"
          :parent="Array.isArray(element.children)"
          @event="eventHandler"
          :class="[
            'document-list_item',
            { 'document-list_item--collapsed': !exposedItems[element.id] }
          ]"
        />
        <draggable
          v-if="element.children"
          v-model="element.children"
          @start="changeDocType"
          item-key="id"
          tag="div"
          :group="childGroup"
          handle=".document-item_action--move"
          class="document-list document-list--children"
        >
          <template #item="{ element: child }" >
            <section
              v-show="exposedItems[element.id]"
              :data-type="child.type"
              class="document-list_item document-list_item--child"
            >
              <DocumentItem v-bind="child" @event="eventHandler" />
            </section>
          </template>
        </draggable>
      </section>
    </template>
  </draggable>
</template>

<style scoped>
.document-list {
  display: grid;
  width: 100%;
  border-collapse: collapse;
  min-height: 30px;
}
.document-list.document-list--children {
  width: calc(100% - 20px);
  margin-left: 20px;
  min-height: 0;
}
.document-list_wrap {
  display: table;
  width: 100%;
}
.document-list_item {
  display: table-row;
  border: 1px solid var(--color-border-01);
}
.document-list_item--child {
  border-top: none;
}
.document-list_wrap:not(:last-child) .document-list_item--child:last-child,
.document-list_wrap:not(:last-child) .document-list_item--collapsed,
.document-list_wrap--no-children:not(:last-child) .document-list_item {
  border-bottom: none;
}
.document-list_item.document-item--parent + .document-list_child {
  border-bottom: 1px solid var(--color-border-01);
}
.document-list .sortable-ghost .document-list_item,
.document-list .sortable-ghost.document-list_item--child .document-item {
  display: none;
}
.document-list .sortable-ghost:before {
  content: '';
  display: block;
  width: 100%;
  border-top: 5px solid var(--color-hover);
}
</style>
