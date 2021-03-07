import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cell: {
    width: '13vw',
    minHeight: '5vh',
  },
  headerCell: {
    borderRadius: '4px',
    textAlign: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
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
}));

export default useStyles;
