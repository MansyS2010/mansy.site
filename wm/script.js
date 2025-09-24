

function Windows(title = "Test", content = "boring shit", width = 800, height = 600, WindowID = "Window") {
    let WindowBar = document.createElement("div");
    WindowBar.className = "WindowBar";
    WindowBar.id = WindowID + "Bar";
    console.log(WindowBar.id);
    WindowBar.innerHTML = "<button style='top:-10px; right:80px; position: absolute' onclick='DecreaseWindow(" + '\"' + WindowID + '\"' + ', ' + '\"' + width + '\"' + ', ' + '\"' + height + '\"' + ")'>-</button> <button style='top:-10px; right:40px; position: absolute' onclick='ExpandWindow(" + '\"' + WindowID + '\"' + ")'>+</button> <button style='top:-10px; right:0px; position: absolute' onclick='this.parentElement.parentElement.remove()'>X</button>" + "<text style='margin-left:10px;'>" + title + "</text>";

    let WindowContent = document.createElement("div");
    WindowContent.className = "WindowContent";
    WindowContent.innerHTML = content;

    let Window = document.createElement("div");
    Window.className = "Window";
    Window.id = WindowID;
    Window.style.width = width + 'px';
    Window.style.height = height + 'px';
    Window.append(WindowBar);
    Window.append(WindowContent);
    
    if (document.getElementById(WindowID) == null) {
        document.body.appendChild(Window);
        dragElement(Window);
    }
}
function dragElement(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "Bar")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "Bar").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function WebsiteToHtml(URL, height) {
    return "<object type=\"text/html\" data=" + URL + " style=\"object-fit: fill; width:100%; height:" + height + "px \"></object>"
}

function VideoToHtml(URL) {
    return "<iframe width=\"400\" height=\"300\" src=\"" + URL + "\"> </iframe>";
}

function ExpandWindow(ID) {
    let Window = document.getElementById(ID);
    let width = '1200px'
    let height = '1000px';
    Window.style.width = width;
    Window.style.height = height;
    const y = Window.getElementsByTagName("object");
    y[0].style.height = height;
}

function DecreaseWindow(ID, width, height) {
    let Window = document.getElementById(ID);
    console.log(width, height);
    Window.style.width = width + 'px';
    Window.style.height = height + 'px';
    const y = Window.getElementsByTagName("object");
    y[0].style.height = height + 'px';
}
