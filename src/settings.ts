const OptionalSettings = {
}
const RequiredSettings = {
  writeKey: {
    description: 'The write key of a source to fire the deduping identify events back into',
    type: string
  }
}

validate(OptionalSettings, RequiredSettings)