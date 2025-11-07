import Link from 'next/link';
import { ArrowUpRight, PlayCircle } from 'lucide-react';
import styles from './page.module.css';
import {
  impactStats,
  highlightStories,
  videoSpotlights,
  partnershipLogos,
  pressQuotes
} from '@/data/content';

const timelineMoments = [
  {
    year: '2019',
    title: 'The First Viral Giveaway',
    body: 'Steve shows up with a brand-new Dodge Hellcat and $50,000 in cash, jump-starting a movement of life-altering surprises.'
  },
  {
    year: '2020',
    title: 'Pandemic Relief Blitz',
    body: 'Rent checks, tuition coverage, and direct relief to service workers across Florida helped keep families steady through lockdowns.'
  },
  {
    year: '2022',
    title: 'National Tour of Gratitude',
    body: 'From Miami to Los Angeles, SteveDidIt linked up with community leaders to deliver cars, scholarships, and emergency funds.'
  },
  {
    year: '2024',
    title: 'Philanthropy Without Borders',
    body: 'Collaborations with Make-A-Wish and Boys & Girls Clubs expanded into recurring programs and global giving campaigns.'
  }
] as const;

export default function HomePage() {
  return (
    <main>
      <header className={`${styles.siteHeader} container`}>
        <Link href="#top" className={styles.brandLink}>
          <span className="badge">SteveDidIt Philanthropy</span>
        </Link>
        <nav className={styles.siteNav}>
          <a className={styles.navLink} href="#impact">
            Impact
          </a>
          <a className={styles.navLink} href="#videos">
            Footage
          </a>
          <a className={styles.navLink} href="#partners">
            Partners
          </a>
          <a className={styles.navLink} href="#timeline">
            Timeline
          </a>
        </nav>
      </header>

      <section id="top" className={`${styles.hero}`}>
        <div className="container">
          <div className={styles.heroInner}>
            <div>
              <h1 className={styles.heroHeadline}>
                When giving feels cinematic, the receipts are legendary.
              </h1>
              <p className={styles.heroCopy}>
                SteveWillDoIt turned generosity into a sport. Welcome to the SteveDidIt hub—a high-energy archive of the
                giveaways, missions, and partners helping deliver real wins to real people.
              </p>
              <div className={styles.heroActions}>
                <button className="cta" type="button">Submit a Story</button>
                <a href="#videos" aria-label="Jump to video highlights">
                  <PlayCircle size={22} /> Watch iconic drops
                </a>
              </div>
            </div>

            <div id="impact" className={styles.heroStats}>
              {impactStats.map((stat) => (
                <article key={stat.label} className={styles.statCard}>
                  <span className={styles.statLabel}>{stat.label}</span>
                  <span className={styles.statValue}>{stat.value}</span>
                  <p className={styles.statDescription}>{stat.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ padding: '4.5rem 0 2rem' }}>
        <h2 className="section-title">Impact Playbook</h2>
        <p className="section-subtitle">
          Each drop is more than content—it is strategic, intentional impact built with community leads, grassroots donors,
          and the SteveDidIt crew on the ground.
        </p>
        <div className={styles.storyGrid}>
          {highlightStories.map((story) => (
            <article key={story.title} className={styles.storyCard}>
              <h3>{story.title}</h3>
              <p>{story.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="videos" className="container" style={{ padding: '4.5rem 0 1rem' }}>
        <div className={styles.videoGallery}>
          <header>
            <h2 className="section-title">Legendary Giveaways, On Replay</h2>
            <p className="section-subtitle">
              Full transparency. No paywall. Relive the raw reactions, the tears, and the moments generosity changed the storyline.
            </p>
          </header>

          <div className={styles.videoGrid}>
            {videoSpotlights.map((video) => (
              <article key={video.id} className={styles.videoCard}>
                <div className={styles.videoFrame}>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                    title={video.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <div>
                  <h3>{video.title}</h3>
                  <p>{video.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="partners" className="container" style={{ padding: '4.5rem 0 2rem' }}>
        <header>
          <h2 className="section-title">Partners Pushing the Mission</h2>
          <p className="section-subtitle">
            Philanthropy becomes a force-multiplier when paired with organizations already doing frontline work. These partners
            help convert viral energy into sustainable change.
          </p>
        </header>
        <div className={styles.partners}>
          <div className={styles.partnerRow}>
            {partnershipLogos.map((partner) => (
              <Link key={partner.name} href={partner.href} target="_blank" className={styles.partnerTag} rel="noreferrer">
                {partner.name}
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.pressGrid}>
          {pressQuotes.map((press) => (
            <Link key={press.outlet} href={press.href} target="_blank" rel="noreferrer" className={styles.pressCard}>
              <span className={styles.pressOutlet}>{press.outlet}</span>
              <p className={styles.pressQuote}>“{press.quote}”</p>
              <span className="secondaryLink">
                Read feature <ArrowUpRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section id="timeline" className="container" style={{ padding: '4.5rem 0 2rem' }}>
        <div className={styles.timeline}>
          <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
            Timeline of Game-Changing Drops
          </h2>
          <ul className={styles.timelineList}>
            {timelineMoments.map((moment) => (
              <li key={moment.year} className={styles.timelineItem}>
                <span className={styles.timelineYear}>{moment.year}</span>
                <h3 className={styles.timelineTitle}>{moment.title}</h3>
                <p className={styles.timelineBody}>{moment.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container" style={{ padding: '4.5rem 0 6rem' }}>
        <div className={styles.ctaPanel}>
          <h3>Bring the next impossible story to life.</h3>
          <p className={styles.ctaCopy}>
            SteveDidIt is fueled by tips from the community, frontline workers, and you. Nominate the next deserving family, drop a
            location for us to pull up on, or partner with the crew to scale something devs would call “too ambitious.”
          </p>
          <div className={styles.ctaActions}>
            <button className="cta" type="button">Nominate a Recipient</button>
            <Link href="mailto:impact@stevedidit.com" className="secondaryLink">
              impact@stevedidit.com <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <footer>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <p>Follow the daily drops on <Link href="https://www.instagram.com/stevewilldoit" target="_blank" rel="noreferrer">Instagram</Link> and <Link href="https://x.com/stevewilldoit" target="_blank" rel="noreferrer">X</Link>.</p>
          <p style={{ fontSize: '0.82rem' }}>© {new Date().getFullYear()} SteveDidIt Collective. Crafted for the community.</p>
        </div>
      </footer>
    </main>
  );
}
