/* eslint-disable filenames/match-exported */
import { model } from '@modern-js/runtime/model';

const allModel = model('all').define(() => {
  return {
    state: {
      login: false,
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
      changeLogin(state, flag: boolean) {
        state.login = flag;
        return {
          ...state,
          flag,
        };
      },
    },
  };
});

export default allModel;
