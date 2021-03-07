export default (theme) => ({
  headerCell: {
    textAlign: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    fontSize: 14,
    borderRadius: 4,
    backgroundColor: '#e6e6e6',
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
