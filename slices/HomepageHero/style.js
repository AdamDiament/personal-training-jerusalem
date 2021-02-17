const styles = (theme) => ({
  background: {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    '& .MuiGrid-container': {
      height: '100%',
    },
  },
  grid: {
    alignItems: "center",
    justifyContent:"center",
    backgroundColor: "red"
  },
  backgroundOverlay: {
    padding: theme.spacing(20, 2),
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: 600,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(20, 2),
      height: '100%',
    },
  },
  preTitle: {
    backgroundColor: '#1c2834',
    padding: theme.spacing(0.5, 1),
    color: '#fff',
    marginBottom: theme.spacing(-2),
    zIndex: 99,
    textTransform: 'uppercase',
  },
  heroTitle: {
    backgroundPosition: 'center',
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    padding: '33px 32px 26px 34px',
    color: '#fff',
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: '-10px',
    [theme.breakpoints.down('sm')]: {
      backgroundSize: 'cover',
      padding: theme.spacing(2),
    },
  },
  heroSubTitle: {
    letterSpacing: 1,
    //backgroundImage: `url('/homepage-subtitle-background.png')`,
    backgroundPosition: 'center',
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    //width: 'fit-content',
    padding: '20px 120px',
    color: '#fff',
    textAlign: 'center',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      backgroundSize: 'cover',
      padding: theme.spacing(2),
    },
  },
  heroButton: {
    display: 'flex',
    marginTop: theme.spacing(4),
    '& button': {
      margin: theme.spacing(2),
    },
    
      justifyContent: 'center',
      flexDirection: 'column;',
      alignItems: 'center',
    
  },
  pointsWrapper: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      flexDirection: 'column;',
    },
    '& .MuiTypography-root': {
      color: '#fff',
      textTransform: 'uppercase',
    },
    '& .bulletPoint': {
      width: 5,
      height: 5,
      backgroundColor: '#8bc249',
      borderRadius: 5,
      margin: theme.spacing(0, 2.5),
      [theme.breakpoints.down('sm')]: {
        margin: theme.spacing(1, 0),
      },
    },
  },
})

export default styles
