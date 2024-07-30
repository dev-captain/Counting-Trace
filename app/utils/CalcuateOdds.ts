export const CalculateOdds = (removedCard: number[]) => {
    const deck = 8;
    const decks = [
      16 * deck,
      4 * deck,
      4 * deck,
      4 * deck,
      4 * deck,
      4 * deck,
      4 * deck,
      4 * deck,
      4 * deck,
      4 * deck,
    ];
    console.log(decks);

    for (const x of removedCard) {
      decks[x] -= 1;
    }

    console.log(decks);

    let shoe = decks.reduce((a, b) => a + b, 0);

    let playerWin = 0;
    let bankerWin = 0;
    let tieWin = 0;

    let cards4 = 0;
    let cards5b = 0;
    let cards5p = 0;
    let cards6 = 0;

    let player2 = 0;
    let player3 = 0;
    let banker2 = 0;
    let banker3 = 0;

    const outcome: number[][] = Array.from({ length: 10 }, () =>
      Array(10).fill(0)
    );
    const natural: number[][] = Array.from({ length: 10 }, () =>
      Array(10).fill(0)
    );

    for (let p1 = 0; p1 < 10; p1++) {
      let wp1 = decks[p1];
      decks[p1] -= 1;
      shoe -= 1;
      for (let b1 = 0; b1 < 10; b1++) {
        let wb1 = wp1 * decks[b1];
        decks[b1] -= 1;
        shoe -= 1;

        for (let p2 = 0; p2 < 10; p2++) {
          let wp2 = wb1 * decks[p2];
          decks[p2] -= 1;
          shoe -= 1;

          for (let b2 = 0; b2 < 10; b2++) {
            let wb2 = wp2 * decks[b2];
            decks[b2] -= 1;
            shoe -= 1;
            let pt1 = (p1 + p2) % 10;
            let bt1 = (b1 + b2) % 10;

            if (pt1 > 7 || bt1 > 7 || (pt1 > 5 && bt1 > 5)) {
              if (bt1 > pt1) {
                bankerWin += wb2 * shoe * (shoe - 1);
              } else if (pt1 > bt1) {
                playerWin += wb2 * shoe * (shoe - 1);
              } else {
                tieWin += wb2 * shoe * (shoe - 1);
              }

              if (bt1 > 7 || pt1 > 7) {
                natural[bt1][pt1] += wb2 * shoe * (shoe - 1);
              } else {
                outcome[bt1][pt1] += wb2 * shoe * (shoe - 1);
              }

              player2 += wb2 * shoe * (shoe - 1);
              banker2 += wb2 * shoe * (shoe - 1);
              cards4 += wb2 * shoe * (shoe - 1);
            } else if (pt1 < 6) {
              for (let p3 = 0; p3 < 10; p3++) {
                let wp3 = wb2 * decks[p3];
                decks[p3] -= 1;
                shoe -= 1;
                let pt3 = (p1 + p2 + p3) % 10;
                let hit = true;

                if (bt1 === 7) {
                  hit = false;
                } else if (bt1 === 6 && (p3 < 6 || p3 > 7)) {
                  hit = false;
                } else if (bt1 === 5 && (p3 < 4 || p3 > 7)) {
                  hit = false;
                } else if (bt1 === 4 && (p3 < 2 || p3 > 7)) {
                  hit = false;
                } else if (bt1 === 3 && p3 === 8) {
                  hit = false;
                }

                if (hit) {
                  for (let b3 = 0; b3 < 10; b3++) {
                    let wb3 = wp3 * decks[b3];
                    decks[b3] -= 1;
                    let bt3 = (b1 + b2 + b3) % 10;

                    if (bt3 > pt3) {
                      bankerWin += wb3;
                    } else if (pt3 > bt3) {
                      playerWin += wb3;
                    } else {
                      tieWin += wb3;
                    }

                    decks[b3] += 1;

                    outcome[bt3][pt3] += wb3;
                    cards6 += wb3;

                    player3 += wb3;
                    banker3 += wb3;
                  }
                } else {
                  if (bt1 > pt3) {
                    bankerWin += wp3 * shoe;
                  } else if (pt3 > bt1) {
                    playerWin += wp3 * shoe;
                  } else {
                    tieWin += wp3 * shoe;
                  }

                  outcome[bt1][pt3] += wp3 * shoe;
                  cards5p += wp3 * shoe;

                  player3 += wp3 * shoe;
                  banker2 += wp3 * shoe;
                }

                decks[p3] += 1;
                shoe += 1;
              }
            } else if (bt1 < 6) {
              for (let b3 = 0; b3 < 10; b3++) {
                let wb3 = wb2 * decks[b3];
                decks[b3] -= 1;
                shoe -= 1;
                let bt3 = (b1 + b2 + b3) % 10;

                if (bt3 > pt1) {
                  bankerWin += wb3 * shoe;
                } else if (pt1 > bt3) {
                  playerWin += wb3 * shoe;
                } else {
                  tieWin += wb3 * shoe;
                }

                outcome[bt3][pt1] += wb3 * shoe;
                cards5b += wb3 * shoe;

                player2 += wb3 * shoe;
                banker3 += wb3 * shoe;

                decks[b3] += 1;
                shoe += 1;
              }
            }

            decks[b2] += 1;
            shoe += 1;
          }

          decks[p2] += 1;
          shoe += 1;
        }

        decks[b1] += 1;
        shoe += 1;
      }

      decks[p1] += 1;
      shoe += 1;
    }

    const total = bankerWin + playerWin + tieWin;

    const bankerProb = bankerWin / total;
    const playerProb = playerWin / total;
    const tieProb = tieWin / total;

    return {
      banker: bankerProb,
      player: playerProb,
      tie: tieProb,
    };
  };