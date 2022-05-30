import { model, useModel } from '@modern-js/runtime/model';

const fooModel = model('foo').define(() => {
  return {
    state: {
      current: 1,
      pageSize: 10,
      total: 9,
    },
    actions: {
      setA(state, a: string) {
        // 启用 immer 插件时
        state.a = a;

        // 未启用 immer 插件时
        return {
          ...state,
          a,
        };
      },
    },
  };
});

export default fooModel;
