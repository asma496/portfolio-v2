// import React from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import Grow from '@material-ui/core/Grow';
// import Grid from '@material-ui/core/Grid';
// import Link from '@material-ui/core/Link';
// import Slide from '@material-ui/core/Slide';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import { ExperienceInfo, UrlIcons } from '../Info.json';

// // eslint-disable-next-line no-unused-vars
// const useStyles = makeStyles((theme) => ({
//   root: {
//     padding: '5rem 1rem',
//     textAlign: 'center',
//     minHeight: window.innerHeight - 109,
//     position: 'relative',
//   },
//   background: {
//     position: 'absolute',
//     top: '0',
//     left: '0',
//     opacity: '90%',
//     width: '100%',
//     height: '100%',
//     backgroundImage: `url(${ExperienceInfo.background})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//     zIndex: '-999',
//   },
//   title: {
//     fontWeight: 400,
//     fontSize: '3em',
//     margin: '1rem',
//   },
//   links: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   subtitle: {
//     fontWeight: 300,
//     fontSize: '2rem',
//     margin: '1rem',
//     color: 'black',
//   },
//   caption: {
//     fontSize: '1rem',
//   },
//   picture: {
//     width: '100%',
//   },
//   img: {
//     boxShadow: '0px 10px 15px 5px gray',
//     maxHeight: '10rem',
//     maxWidth: '90%',
//   },
//   article: {
//     padding: '3rem 0',
//   },
//   columnImg: {
//     padding: '1rem 1rem 2rem',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     padding: '1rem',
//     display: 'flex',
//   },
//   iconList: {
//     display: 'flex',
//     justifyContent: 'space-evenly',
//     flexWrap: 'wrap',
//     listStyle: 'none',
//     padding: '0 1rem',
//   },
//   icon: {
//     width: '3rem',
//   },
// }));

// const ExperienceHome = () => {
//   const classes = useStyles();
//   const { title, experience } = ExperienceInfo;
//   return (
//     <Slide direction="up" in timeout={1000}>
//       <Grid component="section" container className={classes.root}>
//         <div className={classes.background} />
//         <Grid item xs={12}>
//           <Typography className={classes.title} variant="h2">
//             {title}
//           </Typography>
//         </Grid>
//         {experience.map((item) => (
//           <Grid key={uuidv4()} item xs={12} md={6} component="article" className={classes.article}>
//             <Typography variant="h4">
//               {item.date}
//             </Typography>
//             <ul>
//               {item.school.map((item) => (
//             <Typography variant="">
//               <Link className={classes.subtitle} rel="noreferrer">
//                <li> {item.school}</li>
//               </Link>
//             </Typography>
//             ))}
//             </ul>
//             <Typography variant="h6">
//               {item.position}
//             </Typography>
//             <ul className={classes.iconList}>
//               {item.skills.map((skill) => (
//                 <li key={uuidv4()}>
//                   <Grow in timeout={4000}>
//                     <img src={UrlIcons[skill]} alt="icon-skill" className={classes.icon} />
//                   </Grow>
//                 </li>
//               ))}
//             </ul>
//             <Typography variant="body2">
//               {item.goals}
//             </Typography>
//           </Grid>
//         ))}
//       </Grid>
//     </Slide>
//   );
// };

// export default ExperienceHome;
