import { defineAsyncComponent } from 'vue';

const componentsName = {
  edit: 'EditIcon',
  delete: 'DeleteIcon',
  move: 'MoveIcon',
};

export const useActionsIcons = () => (action) => {
  if (!Object.hasOwn(componentsName, action)) {
    throw Error(`Action "${action}" doesn't exist in actionIcons.`);
  }

  const component = import(`../components/icons/${componentsName[action]}.vue`);
  return defineAsyncComponent(() => component);
};