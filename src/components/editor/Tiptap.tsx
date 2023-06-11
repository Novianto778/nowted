import { Editor, EditorContent } from '@tiptap/react';

type Props = {
  editor: Editor | null;
};

export const TipTap = ({ editor }: Props) => {
  if (!editor) return null;

  return <EditorContent className="py-4" editor={editor} />;
};
