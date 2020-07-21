import { test_dest } from 'segment-sloth'
import { dest_payload } from './payload'

describe('Test destination function', function () {
  it('verifies successful response', async () => {
    const settings: FunctionSettings = {
      writeKey: 'INSERT A WRITE KEY OF A SOURCE TO FIRE TEST EVENTS INTO'
    }

    await test_dest(dest_payload, settings, 3001)
  }).timeout(10000);
});
