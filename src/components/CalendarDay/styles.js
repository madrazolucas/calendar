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
    marginTop: 8,
  },
  cardContent: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: 6,
  },
  cardNumber: {
    marginTop: 8,
  },
});
