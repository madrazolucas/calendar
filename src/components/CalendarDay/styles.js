export default () => ({
  cardDisabled: {
    backgroundColor: '#ededed',
    cursor: 'not-allowed',
  },
  cardCalendarDay: {
    cursor: 'cell',
    '&:hover': {
      background: '#aaeedd',
    },
  },
  cardText: {
    color: '#3c4043',
    textAlign: 'center',
    fontSize: 10,
    margin: 0,
  },
  cardContent: {
    paddingTop: 8,
    paddingLeft: 0,
    paddingRight: 0,
  },
});
