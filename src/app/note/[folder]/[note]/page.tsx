type Props = {
  params: {
    folder: string;
    note: string;
  };
};

const Note = ({ params: { note } }: Props) => {
  if (note !== 'note') {
    return <p>Note not found</p>;
  }
  return (
    <div>
      <h2>{note}</h2>
    </div>
  );
};

export default Note;
