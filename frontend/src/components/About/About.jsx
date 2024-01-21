// // Import necessary libraries and components
// import React from 'react';
// import Helmet from 'react-helmet';

// import './About.css';
// import store from '../../images/store.jpg';

// // Home component
// const About = () => {
//   return (
//     <div>
//       {/* Helmet for setting document title */}
//       <Helmet title="Electro Shop - Your Electronics Destination" />

//       {/* Banner section */}
//       <div className="banner">
//         <p>About Our Shop</p>
//         <h1>We are little but we have great products</h1>
//       </div>

//       {/* About section */}
//       <div className="about-section">
//         <h2 className="homeHeading">About Us</h2>
//         <div className="about-content">
//           <div className="about-image">
//             <img src={store} alt="" />
//           </div>
//           <div className="about-text">
//             <p>
//               Welcome to "Oy Vey Delights" – where Judaica meets a sprinkle of schmaltz! We're not your average online store; we're the mishmash of Jewish joy you never knew you needed.

//               From "Mazel Tov Mishloach Manot" for celebrating life's victories to "Chuppah Chic" for weddings that wow, we've got it all. Our "Kosher Kitsch" is your go-to for quirky Jewish decor, and "Meshuggeneh Mugs" bring a dose of humor to your morning brew.

//               For the little ones, our "Kinder Corner" has kosher baby gear that's downright adorable. Because let's face it, even the tiniest mensches deserve a touch of Jewish style.

//               So, dive into our virtual mishpocha and let the Oy Vey adventures begin. Why settle for regular retail when you can shop with a side of Jewish humor? Explore, click, and Mazel Tov – you just found your new favorite online shopping haven!
//             </p>
//             <p>
//               Our objective We ensure that all of our orders are shipped within
//               1 business day only. What this means to you is that when you buy
//               something from us, you can be sure that we will ship it as soon as
//               possible as we process our orders on a daily basis. And if you are
//               trying to find shipping costs on our website, there are none
//               because we offer FREE shipping. So full transparency and no
//               surprises in the box. We know what it’s like to take the time to
//               add your items to your shopping cart and then at checkout an
//               amazing shipping cost … so we’ve incorporated the best deals into
//               our products without charging you for shipping.
//             </p>
//             <p>
//               Our store In fact, you can find the best deals in our store for
//               all our products and we always have our best deals at very
//               affordable prices. Feel free to compare our prices online with any
//               local or online retailer because we are confident that our prices
//               (including shipping) will give you the best deal, service, and
//               quality assurance you are looking for when shopping online. We
//               also keep track of the latest trends that are at our fingertips
//               and if you can’t find what you’re looking for, let us know and
//               we’ll provide it for you.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import './About.css';
import store from '../../images/store.jpg';
import Helmet from 'react-helmet';


const About = () => {
  return (
    <>
      {/* Helmet for setting document title */}
//       <Helmet title="JewishShop - Your Judica Destination" />
      <Container sx={{ mt: 5 }}>
        <Typography variant="h2" sx={{ mb: 3 }}>
          About Us
        </Typography>
        <Grid container spacing={3}>
          <Grid item md={12} xs={12}>
            <Paper
              elevation={3}
              sx={{
                padding: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <img
                src={store}
                alt="About Us"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </Paper>
          </Grid>
          <Grid item md={6} xs={12}>
            <Paper
              elevation={3}
              sx={{
                padding: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography variant="h4" sx={{ mb: 2 }}>
                Our Story
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Welcome to "Oy Vey Delights" – where Judaica meets a sprinkle of schmaltz! We're not your average online store; we're the mishmash of Jewish joy you never knew you needed.

                From "Mazel Tov Mishloach Manot" for celebrating life's victories to "Chuppah Chic" for weddings that wow, we've got it all. Our "Kosher Kitsch" is your go-to for quirky Jewish decor, and "Meshuggeneh Mugs" bring a dose of humor to your morning brew.

                For the little ones, our "Kinder Corner" has kosher baby gear that's downright adorable. Because let's face it, even the tiniest mensches deserve a touch of Jewish style.

                So, dive into our virtual mishpocha and let the Oy Vey adventures begin. Why settle for regular retail when you can shop with a side of Jewish humor? Explore, click, and Mazel Tov – you just found your new favorite online shopping haven!
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Nulla facilisi. Duis lacinia fermentum eros, a sagittis ligula
                aliquet in. Proin et risus vel purus dictum congue. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia Curae; Proin nec leo quis tellus tristique rhoncus ac
                sit amet tortor.
              </Typography>
              <Typography variant="body1">
                Fusce feugiat est at egestas scelerisque. Sed laoreet volutpat
                libero, at rutrum arcu sodales in.
              </Typography>
            </Paper>
          </Grid>
          <Grid item md={6} xs={12}>
            <Paper
              elevation={3}
              sx={{
                padding: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography variant="h4" sx={{ mb: 2 }}>
                Where are We ?
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Our objective We ensure that all of our orders are shipped within
                something from us, you can be sure that we will ship it as soon as
                possible as we process our orders on a daily basis. And if you are
                1 business day only. What this means to you is that when you buy
                trying to find shipping costs on our website, there are none
                because we offer FREE shipping. So full transparency and no
                surprises in the box. We know what it’s like to take the time to
                add your items to your shopping cart and then at checkout an
                amazing shipping cost … so we’ve incorporated the best deals into
                our products without charging you for shipping.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Nulla facilisi. Duis lacinia fermentum eros, a sagittis ligula
                aliquet in. Proin et risus vel purus dictum congue. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia Curae; Proin nec leo quis tellus tristique rhoncus ac
                sit amet tortor.
              </Typography>
              <Typography variant="body1">
                Fusce feugiat est at egestas scelerisque. Sed laoreet volutpat
                libero, at rutrum arcu sodales in.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default About;
