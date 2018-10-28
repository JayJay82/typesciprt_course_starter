export default class UIFactory {
    public createIframe(url : string = "https://www.youtube.com/watch?v=NjN00cM18Z4") : HTMLIFrameElement{
        const iframe = document.createElement("iframe");
        iframe.setAttribute("src",url);
        iframe.className = "embed-responsive-item";
        return iframe;
    }
}