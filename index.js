const divFilter = document.getElementsByClassName("filter")[0];

/**
 * 追踪鼠标位置
 * @param ev 事件
 * @returns {*}
 */
mousePosition = (ev) => {
    if (ev.pageX || ev.pageY) {
        return {
            x : ev.pageX,
            y : ev.pageY
        }
    } else {
        return {
            x : ev.clientX + document.body.scrollLeft - document.body.clientLeft,
            y : ev.clientY + document.body.scrollTop - document.body.clientTop
        }
    }
};

document.body.addEventListener("mousemove",ev => {
    const filter = divFilter.style;
    const now = mousePosition(ev);
    filter.cssText = `background: radial-gradient(circle at ${now.x}px ${now.y}px , rgba(0,0,0,0) 0%, rgba(0,0,0,0.95) 25%)`
},true);