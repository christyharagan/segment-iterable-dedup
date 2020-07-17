export async function onIdentify(event: SegmentIdentifyEvent, settings: FunctionSettings) {
  let email = event.traits.email
  if (email && event.userId) {
    let payload = {
      userId: event.userId,
      anonymousId: email,
      type: 'identify',
      writeKey: settings['Write Key']
    }
    const res = await fetch('https://api.segment.io/v1/identify', {
      body: JSON.stringify(payload),
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      method: 'POST'
    })
    const out = await res.json()
    if (res.status != 200) {
      console.error(out)
      throw new Error(
        'Segment identify request failed - response code ' + res.status
      )
    }
  }
}