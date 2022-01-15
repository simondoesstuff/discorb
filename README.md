[Discor*b*](https://discorb.simonwalker.tech) is a [Discord](https://discord.com) website clone.
Fully responsive. Features all graphics from the original site.
A showcase of web development; the website is non-functional. Currently, only includes the home page.

Built with NextJS and Material-UI in roughly three weeks to improve at web development.

## See for yourself! [Discorb](https://discorb.simonwalker.tech)

# Discor*b* vs Discord

### Discor*b*

![DiscorbDemo](githubDemo/discorbDemo.gif)

### Discord

![DiscordDemo](githubDemo/discordDemo.gif)

They look pretty close. But Look carefully at the logo.

Who did it better?

# Development

Discor*b* is a react-based website using Material-UI and NextJS for server-side rendering.
Discor*b* is hosted with [vercel](https://vercel.com/).

### Material-UI

Discor*b* uses [Material-UI](https://mui.com/). A react component library based on the principles of material design (invented by Google).
MUI helps you follow these principles which normally makes their resulting apps conform, but it can be heavily customized as demoed here.
Fonts are imported directly from CSS. The discord color palette and other various design choices [override](components/theming/rootTheme.js) the MUI defaults.
MUI depends on EmotionJS, a CSS in JS library.

### EmotionJS

Material-UI is based on [EmotionJS](https://emotion.sh/). Emotion is a **CSS in JS** library designed for writing css styles with JavaScript.

## Review

I found CSS in JS to be very ergonomic. Keeping everything in the JSX is definitely convenient.
There are some concerns about the performance with CSS in JS. I not only found
the loading times to be instantaneous, Discor*b* actually loads faster than Discord.

Overall, I went from basic experience in react, html, and css to understanding and using Material-UI
and NextJS to make Discor*b* in roughly three total weeks. Speaks to the power of Material-UI.
My experience with web development so far has been a good one.
