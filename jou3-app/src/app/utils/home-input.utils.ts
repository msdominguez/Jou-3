import { HomeInput } from 'src/app/models';

export const buildInput = (label: string, placeholder: string): HomeInput => {
  return { label, placeholder };
};

export const buildInputs = (): HomeInput[] => {
  return [
    buildInput("Time", "Enter the time"),
    buildInput("Date", "Enter the date"),
    buildInput("Title", "Enter your title"),
    buildInput("Song", "Enter your song title and artist"),
    buildInput("Entry", "Enter your entry")
  ];
};

export const HomeInputUtils = {
  buildInput,
  buildInputs
};
