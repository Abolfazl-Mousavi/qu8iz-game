const Shuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

export default Shuffle();


