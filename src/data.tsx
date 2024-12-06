export interface netDataType {
  id: string;
  name: string;
  specs: string[];
  photoURL: string;
}

export const netsData: netDataType[] = [
  {
    id: '1',
    name: 'Stop Net',
    specs: [
      'Width: 1.3m',
      'Height: 1.1m',
      'Mesh size: 4mm',
      '1.6m fibreglass poles, weighted bottom line',
      'Other specs built to order.',
    ],
    photoURL: './assets/Stop Net.png',
  },
  {
    id: '2',
    name: 'Kick Net',
    specs: [
      '500mm wide "D" shape kick net with 500 or 250 micron mesh and 1.2m length handle.',
      '300mm wide Triangular mouth  kick net with 500 or 250 micron mesh and 600 mm length handle.',
      'Other specs built to order.',
    ],
    photoURL: './assets/Kick Net.png',
  },
  {
    id: '3',
    name: 'Scoop Net',
    specs: [
      'Diameter: 200mm or 300mm',
      'Mesh size: 2.5mm, 4.0mm, 6.0mm',
      'Handle length: 1.2m',
      'Other specs built to order.',
    ],
    photoURL: './assets/Scoop Net.png',
  },
  {
    id: '4',
    name: 'Seine Net',
    specs: [
      'Mesh size: 4.0mm or 6.0mm',
      'Length: 4.5m, 6.0m, 10.0m, 15.0m',
      'Height: from 1.2m to 2.5m',
      'Weighted bottom line and floated top line.',
      'Other specs built to order.',
    ],
    photoURL: './assets/Seine Net.png',
  },
  {
    id: '5',
    name: 'Measuring Board',
    specs: ['Length: 1.0m or 600mm'],
    photoURL: './assets/Measuring Board.png',
  },
];
