<script setup>
import IconButton from '@components/buttons/IconButton.vue';
import ArrowIcon from '@components/icons/ArrowIcon.vue';
import MarkerList from '@components/ui/MarkerList.vue';
import TagsList from '@components/ui/TagsList.vue';
import { checkArray } from '@helpers/index.js';
import { useKeyBuilder } from '@helpers/useKeyBuilder.js';
import { useActionsIcons } from '@helpers/useActionsIcons.js';
import { ref } from 'vue';

const props = defineProps({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  type: { type: String, default: '' },
  parent: { type: Boolean, default: false },
  markers: { type: Array },
  tags: { type: Array },
  labels: { type: Array },
  children: { type: Array },
  actions: {
    type: Array,
    default: () => [
      { name: 'edit', disabled: false },
      { name: 'delete', disabled: false },
      { name: 'move', disabled: false }
    ]
  },
});

const emit = defineEmits(['event']);
const keyBuilder = useKeyBuilder();
const actionIcon = useActionsIcons();

const exposed = ref(false);

const actionHandler = (action) => emit('event', { action, id: props.id });
const changeExpose = () => exposed.value = !exposed.value;
const exposeChild = () => {
  const exposed = changeExpose();
  emit('event', { action: 'expose', id: props.id, exposed });
};

</script>

<template>
  <article :class="[ 'document-item', { 'document-item--parent': parent } ]">
    <div class="document-item_body">
      <IconButton
        v-if="parent"
        @click="exposeChild"
        :class="[
          'document-item_arrow',
          { 'document-item_arrow--reversed': exposed }
        ]"
      >
        <ArrowIcon />
      </IconButton>
      <h3 class="document-item_name">{{ name }}</h3>
      <MarkerList v-if="checkArray(markers)" :markers="markers" />
      <TagsList v-if="checkArray(labels)" :tags="labels" :important="true" />
      <TagsList v-if="checkArray(tags)" :tags="tags" />
      <nav v-once class="document-item_actions">
        <IconButton
          v-for="action in actions"
          :key="keyBuilder(action.name)"
          @click="actionHandler(action.name)"
          :disabled="action.disabled"
          :class="`document-item_action--${action.name}`"
        >
          <component :is="actionIcon(action.name)" />
      </IconButton>
      </nav>
    </div>
  </article>
</template>

<style scoped>
.document-item_body {
  display: flex;
  align-items: center;
  gap: var(--gap-01);
  width: 100%;
  height: 35px;
  padding: 8px 20px;
  background-color: #fff;
}
.document-item--parent .document-item_body {
  height: 48px;
}
.document-item_name {
  font-size: 13px;
  font-weight: 400;
}
.document-item.document-item--parent .document-item_name {
  font-size: 15px;
  font-weight: 500;
}
.document-item_actions {
  display: flex;
  gap: var(--gap-02);
  margin-left: auto;
}
.document-item_arrow {
  transition: transform var(--transition);
}
.document-item_arrow--reversed {
  transform: rotate(180deg);
}
</style>