import { Editor } from '@tiptap/react';
// import { HiOutlineChevronDown } from 'react-icons/hi';
// import {
//   AiOutlineBold,
//   AiOutlineItalic,
//   AiOutlineUnderline
// } from 'react-icons/ai';
import { cn } from '@/lib/utils';
import { Bold, ChevronDown, Italic } from 'lucide-react';
// import { ImageToolbar } from './Image';
// import { LinkToolbar } from './Link';
// import { TableToolbar } from './Table';

type TProps = {
  editor: Editor | null;
};

export const Toolbar = (props: TProps) => {
  const onClickBold = () => {
    if (!props.editor) return;
    const editor = props.editor;
    editor.chain().focus().toggleBold().run();
  };
  const onClickItalic = () => {
    if (!props.editor) return;
    const editor = props.editor;
    editor.chain().focus().toggleItalic().run();
  };
  //   const onClickUnderline = () => {
  //     if (!props.editor) return;
  //     const editor = props.editor;
  //     editor.chain().focus().toggleUnderline().run();
  //   };

  return (
    <div className="border-accent-4 flex w-full flex-col border-y py-4 lg:flex-row">
      <div className="mb-6 mr-[30px] flex lg:mb-0">
        <button
          disabled
          title="Feature note available 😢"
          className="mr-[30px] flex w-[133px] items-center justify-between disabled:cursor-not-allowed disabled:opacity-60"
        >
          <span>Paragraph</span>
          <ChevronDown />
        </button>

        <button
          disabled
          title="Feature note available 😢"
          className="flex w-[44px] items-center justify-between disabled:cursor-not-allowed disabled:opacity-60"
        >
          <span>16</span>
          <ChevronDown />
        </button>
      </div>

      <div className="flex">
        <div className="mr-[30px] flex items-center space-x-2.5">
          <button
            onClick={onClickBold}
            className={cn(
              props.editor?.isFocused &&
                props.editor?.isActive('bold') &&
                'text-white'
            )}
          >
            <Bold className="h-5 w-5" />
          </button>

          <button
            onClick={onClickItalic}
            className={cn(
              props.editor?.isFocused &&
                props.editor?.isActive('italic') &&
                'text-blue-500'
            )}
          >
            <Italic className="h-5 w-5" />
          </button>

          {/* <button
            onClick={onClickUnderline}
            className={cn(
              props.editor?.isFocused &&
                props.editor?.isActive('underline') &&
                'text-blue-500'
            )}
          >
            <AiOutlineUnderline className="h-5 w-5" />
          </button> */}
        </div>
        {/* 
        <div className="mr-[30px] flex items-center space-x-2.5">
          <ImageToolbar editor={props.editor} />

          <LinkToolbar editor={props.editor} />
        </div>

        <TableToolbar editor={props.editor} /> */}
      </div>
    </div>
  );
};
