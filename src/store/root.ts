import { BaseStore } from './base';
import { LangStore } from './lang';

export class RootStore {
  base = new BaseStore();
  lang = new LangStore();
}
