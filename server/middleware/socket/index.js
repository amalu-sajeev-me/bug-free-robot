function demo(socket, next) {
    // 
}

function wrap(fn) {
    return function (socket, next) {
        return fn(socket.request, socket.request.response || {}, next);
    }
}