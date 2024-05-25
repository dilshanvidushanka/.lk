document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollFraction = scrollPosition / maxScroll;

    const startColor = [255, 126, 95]; // #ff7e5f
    const endColor = [254, 180, 123]; // #feb47b

    const newColor = startColor.map((start, index) => {
        const end = endColor[index];
        const newValue = start + (end - start) * scrollFraction;
        return Math.round(newValue);
    });

    document.body.style.background = `linear-gradient(120deg, rgb(${newColor[0]}, ${newColor[1]}, ${newColor[2]}), rgb(${254 - scrollFraction * 100}, ${180 + scrollFraction * 50}, ${123 - scrollFraction * 50}))`;
});
