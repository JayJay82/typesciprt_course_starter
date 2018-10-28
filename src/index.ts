import UIRender from './components/uiRender.service';
import UIFactory from './components/factory.service';


export function addVideo() {
     const factory = new UIFactory();
     const ui = new UIRender();
     const input = <HTMLInputElement>document.getElementById("url");
     let iframe = factory.createIframe(input.value);
     ui.appendIframe("video-content",iframe);
}
