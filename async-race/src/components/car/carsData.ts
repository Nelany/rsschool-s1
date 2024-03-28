export const carsData = {
  selectedId: -1,
  numberGaragePage: 1,
  totalCars: 0,
  createName: '',
  createColor: '#000000',
  stoppedCars: [] as number[],

  checkNumberGaragePage() {
    const totalPages = Math.ceil(carsData.totalCars / 7);
    if (carsData.numberGaragePage <= 0) {
      carsData.numberGaragePage = totalPages;
    } else if (carsData.numberGaragePage > totalPages) {
      carsData.numberGaragePage = 1;
    }
  },

  randomBrand: [
    'banan',
    'apelsin',
    'titan',
    'kebab',
    'malysh',
    'kotopes',
    'volk',
    'programmer',
    'begemot',
    'sportsmen',
    'boss',
    'arangutang',
    'idealist',
    'kolobok',
    'porosenok',
    'robot',
    'molot',
    'ogoniok',
    'tsvetochek',
    'uragan',
    'ananas',
    'kotsionok',
    'prints',
    'svetliachok',
    'chempion',
    'zajats',
    'krasavets',
    'parovozik',
    'negodiaj',
    'baklazhan',
    'peniok',
    'drozd',
    'piatochok',
    'kotelok',
    'kartofel',
    'gigant',
    'pirozhok',
    'puh',
    'kapitan',
  ],

  randomModel: [
    'krasivyy',
    'bolshoy',
    'idealnui',
    'kruglyi',
    'shokoladnyy',
    'stalnoi',
    'krutoj',
    'molnienosnyi',
    'plokhoi',
    'bystryi',
    'sladkij',
    'lubimyi',
    'dorogoj',
    'krasnyy',
    'beztsennyi',
    'nezhnyi',
    'novyi',
    'tseleustremlennyi',
    'drugoy',
    'dobryi',
    'milyi',
    'zhguchij',
    'veselyy',
    'kommunikabelnyi',
    'zolotoi',
    'neProstoy',
    'vysokiy',
    'nepokolebimyi',
    'goryachiy',
    'holodnyy',
    'zharkiy',
    'pushistyi',
    'belyi',
    'nesokrushimyi',
    'bespodobnyi',
    'malenkiy',
    'volshebnyi',
    'neobychnyi',
    'interesnyi',
    'neSkuchnyi',
    'bessmertnyi',
  ],

  getRandomCarName(): string {
    const model = this.randomBrand[Math.floor(Math.random() * this.randomBrand.length)];
    const brand = this.randomModel[Math.floor(Math.random() * this.randomModel.length)];
    const randomCarName = `${brand} ${model}`;
    return randomCarName;
  },

  getRandomColor(): string {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    const redHex = red.toString(16).padStart(2, '0');
    const greenHex = green.toString(16).padStart(2, '0');
    const blueHex = blue.toString(16).padStart(2, '0');

    const color = `#${redHex}${greenHex}${blueHex}`;
    return color;
  },
};
