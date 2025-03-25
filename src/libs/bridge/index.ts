import type { BridgeStore } from '@webview-bridge/types';
import { linkBridge } from '@webview-bridge/web';

type AbstractBridgeFunctions = {
  copyClipboard: (text: string) => Promise<void>;
  openExternalUrl: (url: string) => Promise<void>;
};

export type AppBridge = BridgeStore<AbstractBridgeFunctions>;

export const bridge = linkBridge<AppBridge>();
