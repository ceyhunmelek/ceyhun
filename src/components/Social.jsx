const socials = [
  { icon: "fab fa-github", url: "https://github.com/ceyhunmelek" },
  { icon: "fab fa-linkedin", url: "https://www.linkedin.com/in/ceyhunmelek/" },
  { icon: "fab fa-twitter", url: "https://twitter.com/ceymio" },
  { icon: "fas fa-envelope", url: "mailto:ceyhunulasmelek@gmail.com" },
];
const Social = () => <div className="social">
  { socials.map(({icon, url}, i) => <a key={i} href={url}><i className={"fa-2x " + icon} /></a>) }
</div>;

export default Social;