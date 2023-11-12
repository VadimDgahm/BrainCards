export const versionTheme = (version: string) => {
  switch (version) {
    case 'dark':
      return 'white'
    default:
      return 'black'
  }
}
