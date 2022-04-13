const SingleNote = (props) => {
  const sltCard = () => {
    props.rmCard(props.id);
  };
  return (
    <>
      <div className="cardBox">
        <h2 className="taskName">{props.title}</h2>
        <p className="taskContent">{props.content}</p>
        <button className="dlt_note" onClick={sltCard}>
          del
        </button>
      </div>
    </>
  );
};
export default SingleNote;
