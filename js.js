
let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > 0 || entry.isIntersecting) {
      const image = entry.target;
      observer.unobserve(image);

      if (image.hasAttribute('src')) {
        return;
      }
      const sourceUrl = image.getAttribute('data-src');
      image.setAttribute('src', sourceUrl);
      observer.unobserve(image);
    }
  });
});

document.querySelectorAll('.lazyload').forEach((el) => {
  observer.observe(el);
});