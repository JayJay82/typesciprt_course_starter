
class RequirementComponent {
    
    public onAdd(url : string) : void  {
        const iframe = this.createIframe(url);
        this.appendIframe("video-content",iframe);
    }

    public createIframe(url : string = "https://www.youtube.com/watch?v=NjN00cM18Z4") : HTMLIFrameElement{
        console.log(url);
        const iframe = document.createElement("iframe");
        iframe.setAttribute("src",url);
        iframe.className = "embed-responsive-item";
        return iframe;
    }
    public appendIframe(id : string, iframe : HTMLIFrameElement) : void {
        const element  = document.getElementById(id)!;
        element.appendChild(iframe);
    }

}


