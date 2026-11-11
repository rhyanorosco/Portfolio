// True when a value is empty or still an [ADD ...] placeholder.
export const isMissing = (value) => !value || (typeof value === 'string' && value.trim().startsWith('['))
