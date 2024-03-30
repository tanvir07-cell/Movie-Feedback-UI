const wait = (ms) => {
    const start = Date.now();
    let now = start;

    while (now - start < ms) now = Date.now();
};

export default function Block() {
    wait(1000);
    return null;
};