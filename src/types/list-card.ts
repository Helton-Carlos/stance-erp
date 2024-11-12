interface Button {
  type: 'primary' | 'secundary';  
  title: string;
  path: string;
  icon: any; 
};

export interface Card {
  title: string;
  describe: string;
  button: Button[]; 
};