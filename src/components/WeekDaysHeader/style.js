export default (theme) => ({
  headerCell: {
    textAlign: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#e6e6e6',
    borderRadius: 4,
    fontSize: 14,
  },
  shortText: {
    display: 'inline',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  fullText: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'inline',
    },
  },
});
