export default class UIRender {
    public appendIframe(id : string, iframe : HTMLIFrameElement) : void {
        const element  = document.getElementById(id)!;
        element.appendChild(iframe);
    }
}