function pal(n) {
    if (n.length === 1) {
        return true;
    }

    if (n[0] != n[n.length - 1]) {
        return false;
    }

    return pal(n.slice(1,-1))
}

console.log(pal("malayalam"))