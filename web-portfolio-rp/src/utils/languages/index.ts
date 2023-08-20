export interface LanguagesProps {
  code: string;
  name: string;
}

export const Languages: LanguagesProps[] = [
  { code: 'en', name: 'EN' },
  { code: 'pt', name: 'PT' }
];

export const GetLanguage = (code: string | undefined) => Languages.find((elem: LanguagesProps) => elem.code === code) || null; 
