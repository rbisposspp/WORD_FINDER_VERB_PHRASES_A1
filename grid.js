const grid = [
  // 0: dance the tango (col 2 a 14)
  ['X','K','D','A','N','C','E','T','H','E','T','A','N','G','O','V','B','N','M','Q','W','E','R','T','Y'],
  // 1: find a parking space (col 5 a 21)
  ['A','S','D','F','G','F','I','N','D','A','P','A','R','K','I','N','G','S','P','A','C','E','Z','X','C'],
  // 2: leave your bag on a train (col 1 a 20)
  ['P','L','E','A','V','E','Y','O','U','R','B','A','G','O','N','A','T','R','A','I','N','O','I','U','Y'],
  // 3: wait for a bus (col 10 a 20)
  ['Q','W','E','R','T','Y','U','I','O','P','W','A','I','T','F','O','R','A','B','U','S','H','J','K','L'],
  // 4: remember somebody’s name (col 2 a 22)
  ['M','N','R','E','M','E','M','B','E','R','S','O','M','E','B','O','D','Y','S','N','A','M','E','X','Z'],
  // 5: forget somebody’s name (col 4 a 22)
  ['Z','X','C','V','F','O','R','G','E','T','S','O','M','E','B','O','D','Y','S','N','A','M','E','Q','W'],
  // 6: see a film (col 15 a 22)
  ['A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','S','E','E','A','F','I','L','M','O','P'],
  // 7: help somebody (col 8 a 19)
  ['Q','W','E','R','T','Y','U','I','H','E','L','P','S','O','M','E','B','O','D','Y','A','S','D','F','G'],
  // 8: call (or phone) a taxi (col 0 a 15)
  ['C','A','L','L','O','R','P','H','O','N','E','A','T','A','X','I','V','B','N','M','Q','W','E','R','T'],
  // 9: talk to a friend (col 12 a 24)
  ['Y','U','I','O','P','A','S','D','F','G','H','J','T','A','L','K','T','O','A','F','R','I','E','N','D'],
  // 10: draw a picture (col 6 a 17)
  ['Z','X','C','V','B','N','D','R','A','W','A','P','I','C','T','U','R','E','M','Q','W','E','R','T','Y'],
  // 11: sing a song (col 3 a 11)
  ['U','I','O','S','I','N','G','A','S','O','N','G','P','A','S','D','F','G','H','J','K','L','Z','X','C'],
  // 12: buy a pizza (col 14 a 22)
  ['V','B','N','M','Q','W','E','R','T','Y','U','I','O','P','B','U','Y','A','P','I','Z','Z','A','A','S'],
  // 13: tell somebody a secret (col 0 a 18)
  ['T','E','L','L','S','O','M','E','B','O','D','Y','A','S','E','C','R','E','T','D','F','G','H','J','K'],
  // 14: paint a picture (col 5 a 17)
  ['L','Z','X','C','V','P','A','I','N','T','A','P','I','C','T','U','R','E','B','N','M','Q','W','E','R'],
  // 15: take a photo (col 11 a 20)
  ['T','Y','U','I','O','P','A','S','D','F','G','T','A','K','E','A','P','H','O','T','O','H','J','K','L'],
  // 16: run a race (col 2 a 9)
  ['Z','X','R','U','N','A','R','A','C','E','C','V','B','N','M','Q','W','E','R','T','Y','U','I','O','P'],
  // 17: meet a friend (col 13 a 23)
  ['A','S','D','F','G','H','J','K','L','Z','X','C','V','M','E','E','T','A','F','R','I','E','N','D','B'],
  // 18: hear a noise (col 7 a 16)
  ['N','M','Q','W','E','R','T','H','E','A','R','A','N','O','I','S','E','Y','U','I','O','P','A','S','D'],
  // 19: try to open a door (col 1 a 14)
  ['F','T','R','Y','T','O','O','P','E','N','A','D','O','O','R','G','H','J','K','L','Z','X','C','V','B'],
  // 20: give somebody flowers (col 4 a 22)
  ['N','M','Q','W','G','I','V','E','S','O','M','E','B','O','D','Y','F','L','O','W','E','R','S','E','R'],
  // 21: look for your keys (col 8 a 22)
  ['T','Y','U','I','O','P','A','S','L','O','O','K','F','O','R','Y','O','U','R','K','E','Y','S','D','F'],
  // 22: use an app (col 16 a 23)
  ['G','H','J','K','L','Z','X','C','V','B','N','M','Q','W','E','R','U','S','E','A','N','A','P','P','T'],
  // 23: send a message (col 2 a 13)
  ['Y','U','S','E','N','D','A','M','E','S','S','A','G','E','I','O','P','A','S','D','F','G','H','J','K'],
  // 24: swim in the sea (col 9 a 20)
  ['L','Z','X','C','V','B','N','M','Q','S','W','I','M','I','N','T','H','E','S','E','A','W','E','R','T']
];