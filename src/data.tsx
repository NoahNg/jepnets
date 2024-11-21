export interface netDataType {
  id: string;
  name: string;
  specs: string;
  photoURL: string;
}

export const netsData: netDataType[] = [
  {
    id: '1',
    name: 'Stop Net',
    specs: '1.4m',
    photoURL: 'src/assets/Stop Net.png',
  },
  {
    id: '2',
    name: 'Kick Net',
    specs: '500mm',
    photoURL: 'src/assets/Kick Net.png',
  },
  {
    id: '3',
    name: 'Scoop Net',
    specs: '200mm',
    photoURL: 'src/assets/Scoop Net.png',
  },
  {
    id: '4',
    name: 'Seine Net',
    specs: '4.5m',
    photoURL: 'src/assets/Seine Net.png',
  },
  {
    id: '5',
    name: 'Measuring Board',
    specs: '1m',
    photoURL: 'src/assets/Measuring Board.png',
  },
];
