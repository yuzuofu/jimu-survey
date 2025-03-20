/*
 * @Author: moling
 * @Date: 2022-06-22 14:02:18
 * @LastEditTime: 2022-06-23 11:13:34
 * @LastEditors: your name
 * @Description:
 * @FilePath: /lowcode-collection/cms-lowcode-engine/cms-lowcode-engine-client/config/layoutSettings.ts
 */
import type {
  Settings as LayoutSettings,
  BasicLayoutProps,
  HeaderProps,
} from '@ant-design/pro-layout';

const layoutSettings: LayoutSettings &
  BasicLayoutProps &
  HeaderProps & {
    pwa?: boolean;
    logo?: string;
  } = {};

export default layoutSettings;
