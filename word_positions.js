const word_positions = {
  "dance the tango": [
    {row: 0, col: 2}, {row: 0, col: 3}, {row: 0, col: 4}, {row: 0, col: 5}, {row: 0, col: 6}, {row: 0, col: 7}, {row: 0, col: 8}, {row: 0, col: 9}, {row: 0, col: 10}, {row: 0, col: 11}, {row: 0, col: 12}, {row: 0, col: 13}, {row: 0, col: 14}
  ],
  "find a parking space": [
    {row: 1, col: 5}, {row: 1, col: 6}, {row: 1, col: 7}, {row: 1, col: 8}, {row: 1, col: 9}, {row: 1, col: 10}, {row: 1, col: 11}, {row: 1, col: 12}, {row: 1, col: 13}, {row: 1, col: 14}, {row: 1, col: 15}, {row: 1, col: 16}, {row: 1, col: 17}, {row: 1, col: 18}, {row: 1, col: 19}, {row: 1, col: 20}, {row: 1, col: 21}
  ],
  "leave your bag on a train": [
    {row: 2, col: 1}, {row: 2, col: 2}, {row: 2, col: 3}, {row: 2, col: 4}, {row: 2, col: 5}, {row: 2, col: 6}, {row: 2, col: 7}, {row: 2, col: 8}, {row: 2, col: 9}, {row: 2, col: 10}, {row: 2, col: 11}, {row: 2, col: 12}, {row: 2, col: 13}, {row: 2, col: 14}, {row: 2, col: 15}, {row: 2, col: 16}, {row: 2, col: 17}, {row: 2, col: 18}, {row: 2, col: 19}, {row: 2, col: 20}
  ],
  "wait for a bus": [
    {row: 3, col: 10}, {row: 3, col: 11}, {row: 3, col: 12}, {row: 3, col: 13}, {row: 3, col: 14}, {row: 3, col: 15}, {row: 3, col: 16}, {row: 3, col: 17}, {row: 3, col: 18}, {row: 3, col: 19}, {row: 3, col: 20}
  ],
  "remember somebody’s name": [
    {row: 4, col: 2}, {row: 4, col: 3}, {row: 4, col: 4}, {row: 4, col: 5}, {row: 4, col: 6}, {row: 4, col: 7}, {row: 4, col: 8}, {row: 4, col: 9}, {row: 4, col: 10}, {row: 4, col: 11}, {row: 4, col: 12}, {row: 4, col: 13}, {row: 4, col: 14}, {row: 4, col: 15}, {row: 4, col: 16}, {row: 4, col: 17}, {row: 4, col: 18}, {row: 4, col: 19}, {row: 4, col: 20}, {row: 4, col: 21}, {row: 4, col: 22}
  ],
  "forget somebody’s name": [
    {row: 5, col: 4}, {row: 5, col: 5}, {row: 5, col: 6}, {row: 5, col: 7}, {row: 5, col: 8}, {row: 5, col: 9}, {row: 5, col: 10}, {row: 5, col: 11}, {row: 5, col: 12}, {row: 5, col: 13}, {row: 5, col: 14}, {row: 5, col: 15}, {row: 5, col: 16}, {row: 5, col: 17}, {row: 5, col: 18}, {row: 5, col: 19}, {row: 5, col: 20}, {row: 5, col: 21}, {row: 5, col: 22}
  ],
  "see a film": [
    {row: 6, col: 15}, {row: 6, col: 16}, {row: 6, col: 17}, {row: 6, col: 18}, {row: 6, col: 19}, {row: 6, col: 20}, {row: 6, col: 21}, {row: 6, col: 22}
  ],
  "help somebody": [
    {row: 7, col: 8}, {row: 7, col: 9}, {row: 7, col: 10}, {row: 7, col: 11}, {row: 7, col: 12}, {row: 7, col: 13}, {row: 7, col: 14}, {row: 7, col: 15}, {row: 7, col: 16}, {row: 7, col: 17}, {row: 7, col: 18}, {row: 7, col: 19}
  ],
  "call (or phone) a taxi": [
    {row: 8, col: 0}, {row: 8, col: 1}, {row: 8, col: 2}, {row: 8, col: 3}, {row: 8, col: 4}, {row: 8, col: 5}, {row: 8, col: 6}, {row: 8, col: 7}, {row: 8, col: 8}, {row: 8, col: 9}, {row: 8, col: 10}, {row: 8, col: 11}, {row: 8, col: 12}, {row: 8, col: 13}, {row: 8, col: 14}, {row: 8, col: 15}
  ],
  "talk to a friend": [
    {row: 9, col: 12}, {row: 9, col: 13}, {row: 9, col: 14}, {row: 9, col: 15}, {row: 9, col: 16}, {row: 9, col: 17}, {row: 9, col: 18}, {row: 9, col: 19}, {row: 9, col: 20}, {row: 9, col: 21}, {row: 9, col: 22}, {row: 9, col: 23}, {row: 9, col: 24}
  ],
  "draw a picture": [
    {row: 10, col: 6}, {row: 10, col: 7}, {row: 10, col: 8}, {row: 10, col: 9}, {row: 10, col: 10}, {row: 10, col: 11}, {row: 10, col: 12}, {row: 10, col: 13}, {row: 10, col: 14}, {row: 10, col: 15}, {row: 10, col: 16}, {row: 10, col: 17}
  ],
  "sing a song": [
    {row: 11, col: 3}, {row: 11, col: 4}, {row: 11, col: 5}, {row: 11, col: 6}, {row: 11, col: 7}, {row: 11, col: 8}, {row: 11, col: 9}, {row: 11, col: 10}, {row: 11, col: 11}
  ],
  "buy a pizza": [
    {row: 12, col: 14}, {row: 12, col: 15}, {row: 12, col: 16}, {row: 12, col: 17}, {row: 12, col: 18}, {row: 12, col: 19}, {row: 12, col: 20}, {row: 12, col: 21}, {row: 12, col: 22}
  ],
  "tell somebody a secret": [
    {row: 13, col: 0}, {row: 13, col: 1}, {row: 13, col: 2}, {row: 13, col: 3}, {row: 13, col: 4}, {row: 13, col: 5}, {row: 13, col: 6}, {row: 13, col: 7}, {row: 13, col: 8}, {row: 13, col: 9}, {row: 13, col: 10}, {row: 13, col: 11}, {row: 13, col: 12}, {row: 13, col: 13}, {row: 13, col: 14}, {row: 13, col: 15}, {row: 13, col: 16}, {row: 13, col: 17}, {row: 13, col: 18}
  ],
  "paint a picture": [
    {row: 14, col: 5}, {row: 14, col: 6}, {row: 14, col: 7}, {row: 14, col: 8}, {row: 14, col: 9}, {row: 14, col: 10}, {row: 14, col: 11}, {row: 14, col: 12}, {row: 14, col: 13}, {row: 14, col: 14}, {row: 14, col: 15}, {row: 14, col: 16}, {row: 14, col: 17}
  ],
  "take a photo": [
    {row: 15, col: 11}, {row: 15, col: 12}, {row: 15, col: 13}, {row: 15, col: 14}, {row: 15, col: 15}, {row: 15, col: 16}, {row: 15, col: 17}, {row: 15, col: 18}, {row: 15, col: 19}, {row: 15, col: 20}
  ],
  "run a race": [
    {row: 16, col: 2}, {row: 16, col: 3}, {row: 16, col: 4}, {row: 16, col: 5}, {row: 16, col: 6}, {row: 16, col: 7}, {row: 16, col: 8}, {row: 16, col: 9}
  ],
  "meet a friend": [
    {row: 17, col: 13}, {row: 17, col: 14}, {row: 17, col: 15}, {row: 17, col: 16}, {row: 17, col: 17}, {row: 17, col: 18}, {row: 17, col: 19}, {row: 17, col: 20}, {row: 17, col: 21}, {row: 17, col: 22}, {row: 17, col: 23}
  ],
  "hear a noise": [
    {row: 18, col: 7}, {row: 18, col: 8}, {row: 18, col: 9}, {row: 18, col: 10}, {row: 18, col: 11}, {row: 18, col: 12}, {row: 18, col: 13}, {row: 18, col: 14}, {row: 18, col: 15}, {row: 18, col: 16}
  ],
  "try to open a door": [
    {row: 19, col: 1}, {row: 19, col: 2}, {row: 19, col: 3}, {row: 19, col: 4}, {row: 19, col: 5}, {row: 19, col: 6}, {row: 19, col: 7}, {row: 19, col: 8}, {row: 19, col: 9}, {row: 19, col: 10}, {row: 19, col: 11}, {row: 19, col: 12}, {row: 19, col: 13}, {row: 19, col: 14}
  ],
  "give somebody flowers": [
    {row: 20, col: 4}, {row: 20, col: 5}, {row: 20, col: 6}, {row: 20, col: 7}, {row: 20, col: 8}, {row: 20, col: 9}, {row: 20, col: 10}, {row: 20, col: 11}, {row: 20, col: 12}, {row: 20, col: 13}, {row: 20, col: 14}, {row: 20, col: 15}, {row: 20, col: 16}, {row: 20, col: 17}, {row: 20, col: 18}, {row: 20, col: 19}, {row: 20, col: 20}, {row: 20, col: 21}, {row: 20, col: 22}
  ],
  "look for your keys": [
    {row: 21, col: 8}, {row: 21, col: 9}, {row: 21, col: 10}, {row: 21, col: 11}, {row: 21, col: 12}, {row: 21, col: 13}, {row: 21, col: 14}, {row: 21, col: 15}, {row: 21, col: 16}, {row: 21, col: 17}, {row: 21, col: 18}, {row: 21, col: 19}, {row: 21, col: 20}, {row: 21, col: 21}, {row: 21, col: 22}
  ],
  "use an app": [
    {row: 22, col: 16}, {row: 22, col: 17}, {row: 22, col: 18}, {row: 22, col: 19}, {row: 22, col: 20}, {row: 22, col: 21}, {row: 22, col: 22}, {row: 22, col: 23}
  ],
  "send a message": [
    {row: 23, col: 2}, {row: 23, col: 3}, {row: 23, col: 4}, {row: 23, col: 5}, {row: 23, col: 6}, {row: 23, col: 7}, {row: 23, col: 8}, {row: 23, col: 9}, {row: 23, col: 10}, {row: 23, col: 11}, {row: 23, col: 12}, {row: 23, col: 13}
  ],
  "swim in the sea": [
    {row: 24, col: 9}, {row: 24, col: 10}, {row: 24, col: 11}, {row: 24, col: 12}, {row: 24, col: 13}, {row: 24, col: 14}, {row: 24, col: 15}, {row: 24, col: 16}, {row: 24, col: 17}, {row: 24, col: 18}, {row: 24, col: 19}, {row: 24, col: 20}
  ]
};