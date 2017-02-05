import { fromEvent } from 'most';

const Moisture = _ => {
  const moisture = Object.create(null);
  let emit = data => moisture;

  moisture.addListener = (_, callback) => {
    const oldEmit = emit;
    emit = data => {
      oldEmit(data);
      callback(data);
    };
  };
  moisture.removeListener = _ => null;

  let stream = fromEvent(null, moisture);
  stream.emit = data => {
    emit(data);
    return stream;
  };

  return stream;
};

export default Moisture;
