import Row from "./row.js";

function grid() {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="grid grid-flow-col gap-2">
        <div>
          <Row />
        </div>
        <div>
          <Row />
        </div>
        <div>
          <Row />
        </div>
        <div>
          <Row />
        </div>
        <div>
          <Row />
        </div>
      </div>
    </div>
  );
}

export default grid;
