
module.exports = {
  siteMetadata: {
    title: `Hug A Pet - Mobiler Tierarzt`,
    author: `Hug A Pet`,
    description: `Buchen Sie die besten mobilen Tierärzte für Ihr Haustier`,
    siteUrl: `https://hug-a-pet-de.firebaseapp.com`,
    social: {
      twitter: `hugapet`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: 'gatsby-source-flamelink',
      options: {
        firebaseConfig: {
          privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC0BfNdPXN1+WCS\n92zlmsWDIWFNCKnC1odoHoKqle6V8/1vWxX5SLAZoVKFyIx4Kj1FLgiNToINl28V\nynXe3G9kCMdtQzRY7VVHm2z+EWZhBknRaUuN8X4dawskEODEwcVT554fQ/tBo5BO\nszCxCVmeCuiOK2Cb4WIhCjdlRc5XYO0DkPVf8wzoXTYrNtJN6gbdGzwtykC2yYp7\ncj1jXzSAJBvCBxGPUzsb9FUejD5hU56FpAaafewMgJ/501VE5g4bqSzJNE68m0+a\n1hSylr6HTx+Yl8oFHoPyezcP3YYpthSsOUdmp+A1CR6EBsTQBB6bH5F21942XCO3\nGb3oYjARAgMBAAECggEAAaTeRJc3kze8TItK6MvhiuGGqHPwTPG1mdtReSpWW/M2\n+MndqQGjbhB9lvAubDiCh7u0Y0n4wRQFdS78pZTgxYqY+6P1+evs7/L461cQVsl+\nahWqlXjDnJQqLWGkE9frK+l9Fa8Cv+Y0/qr/QlaiBWH3HrlBsBq+USvtNpUNHdom\nUybyI+oaXUsXAf0icZ7h2O9n6eHGTQlJxHPYz19DTEDr7phOv2QfRgThUzvFbxVI\nHho3f8Fpbd7j7MddakpXkiUVNuVgZJYiFOH7ns7mmpFl91Dih3I7NDCjgGSUfvaV\nIaCBMVd21QLng+8/e5M2vDgdD48IUFiR+lMWhnFcWQKBgQDgoRY71FoQn55bXyS5\naU98NJqfis+/ObVTLO/navxfGYbTYuUGIuk0NqT4t5ixAW0HQCuwy4HAHi20chU2\nXwbWA/YzkznmUy7Namiu7sjjd32acwFyg4LT5+PBQTtfSRj5sj6Dfbjqy1OAiial\n98kfC/h+EB2eAyIQHs22f0tNJQKBgQDNKh3H7yfxopbySfpi/vvdgNQVxtPubaRy\ncfZalOgAKtnxGzv9b+RJ/WlOPP31zfNWThh6mw2hOUFBpY9qHPCaDLngoASMyQL/\n78/GhcX68QVC+E+eJ6wXX5CI0/H44JSCnOOH4PQEZOc5GWpQiagm8Ib7lpgWHr7A\nBHxtaZDhfQKBgBpg0EuWVD0/gUkZkyZyx3K+eqnhkyPRkwmBbWqvlZNVXA/WvS5L\nSzdmc1kBtlyS3krLrlXEkCgPYy6ddwA7iIH5VSAZWeNCQWy94i0ovU546bcJalIY\nP3TC9mvrTR2TZ+tqkwy95skrt1KQ5pj20BdlQHkNS20S0R0zgNS9fgpBAoGBAIJE\nV5x3EZmvbsBwkHcDB9Dg18jr8ezV2TCBg7aIDbbtfmxEqpaE0SLZsF9pAqdsGTGX\nbJuMj97qh7Cy+piZv3tQ0UT61Wi+yRTQo9CdZ9Op7XlUSNlWv0In/5GhYWZw0lsM\nWrwP7WBM4TO0G3j/rrDq0Ao22GJTKzKopoiiGsfRAoGAYIYU8dNzpBiPLSAKn7Il\ndN52C8vnl7uVd5K+CGzLh2rIdDP89QCnm5FSzTZDCWzU091hfOUj+yQktEM90o52\nJF1O/MSgwkcCKY3+x0FYVEyp1qR1xOR5VvWHV7wJ574Xff4xM+3MvXtyV3TYDd43\n2FsFdHT60rgPwFh442zhBQk=\n-----END PRIVATE KEY-----\n",
          databaseURL: 'https://hug-a-pet-201315.firebaseio.com',
          storageBucket: 'hug-a-pet-201315.appspot.com',
          projectId: 'hug-a-pet-201315>',
          clientEmail: 'firebase-adminsdk-n1rlv@hug-a-pet-201315.iam.gserviceaccount.com',
        },
        environment: 'production',
        content: true,
        populate: true,
        navigation: true,
        globals: true,
      },
    },
    
  ],
}
