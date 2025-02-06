export default {
  durations: {
    room: {
      desk: 1,
      chair: 1, // OLD: non posso cancellare se no si scassano le versioni vecchie
      shadow: 1,
      wallStuff: {
        guitar: 0.8,
        books: 0.8,
        lavagna: 0.8,
        quadro: 0.8
      }
    }
  },
  delays: {
    room: {
      desk: 0.2,
      chair: 0.9, // OLD: non posso cancellare se no si scassano le versioni vecchie
      wallStuff: {
        books: 0.3,
        lavagna: 0.45,
        quadro: 0.6,
        guitar: 0.75
      },
      shadow: 1.0
    }
  },
  ease: {
    power1Out: 'power1.out',
    power4Out: 'power4.out',
    backOut: 'back.inOut(1.7)',
    elasticOut: 'elastic(1, 1)'
  }
}
