// MessageService.ts
import { createVNode, render } from 'vue';
import MessageComponent from './Message.vue';
export type McMessageType = null | 'success' | 'info' | 'warning' | 'error'

class McMessage {
    private static messageInstance: any;

    constructor() {
        throw new Error('Use MessageService.install() instead of new.');
    }

    public static install() {
        // 创建一个挂载点并挂载组件
        const container = document.createElement('div');
        document.body.appendChild(container);
        const messageVNode = createVNode(MessageComponent);
        render(messageVNode, container);
        this.messageInstance = messageVNode.component?.exposed;
    }

    public static show(msg: string, type: McMessageType = null, timeout: number = 3000) {
        try {
            this.messageInstance?.showMessage(msg, type, timeout);
        }
        catch (Error) {
            console.log('Error showing message:', Error);
        }
    }
}

export default McMessage;
