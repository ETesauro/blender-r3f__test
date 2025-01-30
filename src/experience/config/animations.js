export default {
  durations: {
    room: {
      desk: 1,
      chair: 1,
      shadow: 1,
      wallStuff: {
        guitar: 0.8,
        books: 0.8,
        quadro: 0.8
      }
    }
  },
  delays: {
    room: {
      desk: 0.2,
      chair: 0.9,
      wallStuff: {
        guitar: 0.3,
        books: 0.5,
        quadro: 0.6
      },
      shadow: 0.8
    }
  },
  ease: {
    power1Out: 'power1.out',
    power4Out: 'power4.out',
    backOut: 'back.inOut(1.7)',
    elasticOut: 'elastic(1, 1)'
  }
}
