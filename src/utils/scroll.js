const scroll = () => {
  window.scrollTo(0, 0);
  window.scrollBy({
    top: (window.screen.availHeight * 2) / 3,
    behavior: 'smooth',
  });
};

export default scroll;
