function debounce(func: Function, time: number) {
    time = time || 100; // 100 by default if no param
    let timer;
    return function(event){
        if(timer) clearTimeout(timer);
        timer = setTimeout(func, time, event);
    };
}