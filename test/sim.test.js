import { test } from 'node:test';
import assert from 'node:assert/strict';
import { step } from '../src/sim/step.js';

test('step gives the same result on two runs with the same input', () => {
  const inputs = [{ delta: 3 }, { delta: -1 }, { delta: 7 }, { delta: 0 }];

  const run = () => inputs.reduce(step, { tick: 0, value: 0 });

  const first = run();
  const second = run();

  assert.deepEqual(first, second);
  assert.deepEqual(first, { tick: 4, value: 9 });
});

test('step does not modify its arguments', () => {
  const state = Object.freeze({ tick: 0, value: 1 });
  const input = Object.freeze({ delta: 2 });
  assert.deepEqual(step(state, input), { tick: 1, value: 3 });
});
