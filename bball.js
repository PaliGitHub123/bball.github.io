
function add() {
    let img = document.createElement("img");
    img.src = "Circle_(transparent).svg";
    img.draggable = false; // Not using HTML5 draggable
    body.appendChild(img);

    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    img.onmousedown = dragMouseDown;
    img.ontouchstart = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
    if (e.type === 'touchstart') {
        pos3 = e.touches[0].clientX;
        pos4 = e.touches[0].clientY;
        document.ontouchend = closeDragElement;
        document.ontouchmove = elementDrag;
    } else {
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }
}

function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    if (e.type === 'touchmove') {
        pos1 = pos3 - e.touches[0].clientX;
        pos2 = pos4 - e.touches[0].clientY;
        pos3 = e.touches[0].clientX;
        pos4 = e.touches[0].clientY;
    } else {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
    }
    img.style.top = (img.offsetTop - pos2) + "px";
    img.style.left = (img.offsetLeft - pos1) + "px";
}

function closeDragElement() {
    if (event.type === 'touchend') {
        document.ontouchend = null;
        document.ontouchmove = null;
    } else {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}}


function add1() {
    let img = document.createElement("img");
    img.src = "Circle_(transparent).svg";
    img.className = "gegenSpieler"
    img.draggable = false; // Not using HTML5 draggable
    body.appendChild(img);

    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    img.onmousedown = dragMouseDown;
    img.ontouchstart = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
    if (e.type === 'touchstart') {
        pos3 = e.touches[0].clientX;
        pos4 = e.touches[0].clientY;
        document.ontouchend = closeDragElement;
        document.ontouchmove = elementDrag;
    } else {
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }
}

function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    if (e.type === 'touchmove') {
        pos1 = pos3 - e.touches[0].clientX;
        pos2 = pos4 - e.touches[0].clientY;
        pos3 = e.touches[0].clientX;
        pos4 = e.touches[0].clientY;
    } else {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
    }
    img.style.top = (img.offsetTop - pos2) + "px";
    img.style.left = (img.offsetLeft - pos1) + "px";
}

function closeDragElement() {
    if (event.type === 'touchend') {
        document.ontouchend = null;
        document.ontouchmove = null;
    } else {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}}

function loschen() { 
    let images = document.getElementsByTagName('img');
    let l = images.length;
    for (var i = 0; i < l; i++) {
        images[0].parentNode.removeChild(images[0]);
    }
}
