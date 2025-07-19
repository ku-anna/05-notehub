export interface Note {
  id: number;
  title: string;
  content: string;
  tag: NoteType;
}
type NoteType = "Todo" | "Work" | "Personal" | "Meeting" | "Shopping";

export interface FormValues {
  title: string;
  content: string;
  tag: NoteType;
}
