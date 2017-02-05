# moisture
> Custom emitter for Most

## Examples of use
```js
import moist from 'moisture';

const stream = moist();
stream
  .map(x => x * 2)
  .observe(console.log.bind(console));
stream
  .emit(1)
  .emit(2)
  .emit(3);

const value = moist();
value
  .map(input => input.trim())
  .observe(console.log.bind(console));
const input = h('input', {
  oninput: e => value.emit(e.target.value)
});
```
