import { ListEntry } from 'src/app/models';

export const buildEntry = (
  date: string,
  time: string,
  entry: string,
  favorite: boolean,
  selected: boolean,
  title?: string,
  song?: string
): ListEntry => {
  return { date, time, title, song, entry, favorite, selected };
};

export const buildEntries = (): ListEntry[] => {
  return [
    buildEntry(
      "Monday, January 6, 2020",
      "4:30 PM",
      "Here is my stupid entry.",
      true,
      false,
      "This is my cool title",
      "Powerlines - Tame Impala"
    ),
    buildEntry(
      "Tuesday, January 7, 2020",
      "7:45 PM",
      "Blah blah entry.",
      false,
      false,
      "Here is a title"
      // no song
    ),
    buildEntry(
      "Wednesday, January 8, 2020",
      "1:01 PM",
      "Entry for ya",
      false,
      false
      // no title
      // no song
    ),
    buildEntry(
      "Thursday, January 8, 2020",
      "11:18 AM",
      "Entry this is one. I am trying to make this pretty long with useless words, but honestly that's how most of my entries are so I guess this is pretty good mock data isn't it? Haha. I guess this has to be longer so I'm gonna try to make it significantly longer. I'm literally just going on about something that doesn't even matter. This is just typical me though, right? LOL",
      true,
      false,
      "Here is a longer title that I am trying to make very long for UI testing purposes. Is this long enough btw? Lmk. Ok so it wasn't long enough but don't worry I gotchu bruh.",
      "Icy - Kim Petras"
    )
  ];
};

export const ListEntryUtils = {
  buildEntry,
  buildEntries
};
