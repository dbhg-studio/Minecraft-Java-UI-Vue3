import { App } from 'vue';
import './assets/style.scss'
import MinecraftButton from './Button/Button.vue';
import MinecraftInput from './Input/Input.vue';
import MinecrafConfig from './config/Config.vue';
import McMessage from './Message';
const MinecraftMessage = McMessage
const install = (app: App): void => {
    McMessage.install();
    app.component('MinecraftConfig', MinecrafConfig);
    app.component('MinecraftButton', MinecraftButton);
    app.component('MinecraftInput', MinecraftInput);

    app.component('McConfig', MinecrafConfig);
    app.component('McButton', MinecraftButton);
    app.component('McInput', MinecraftInput);
};
export default { install };
export { MinecraftButton, MinecraftInput, McMessage, MinecraftMessage };
