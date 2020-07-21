import { test_dest } from 'segment-sloth'
import { dest_payload } from './payload'

const settings: FunctionSettings = {
  writeKey: 'INSERT A WRITE KEY OF A SOURCE TO FIRE TEST EVENTS INTO'
}

test_dest(dest_payload, settings, 3001).then(async r => {
  console.log('HHDH')
  console.log(r)
}).catch(e =>{
  console.error('Error')
  console.error(e)
})