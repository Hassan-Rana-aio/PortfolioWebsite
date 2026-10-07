import type { ProjectVideo } from '@/content/types';
import styles from './VideoPlayer.module.scss';

/**
 * The full narrated walkthrough. Nothing is downloaded until the visitor
 * presses play (preload="none"); captions come from the original subtitles.
 */
export default function VideoPlayer({
  video,
  title,
}: {
  video: ProjectVideo;
  title: string;
}) {
  return (
    <figure className={styles.player}>
      <video
        className={styles.video}
        controls
        playsInline
        preload="none"
        poster={video.poster}
        width={video.width}
        height={video.height}
        aria-label={`${title} product walkthrough`}
      >
        <source src={video.src} type="video/mp4" />
        {video.captions && (
          <track
            kind="captions"
            src={video.captions}
            srcLang="en"
            label="English"
          />
        )}
      </video>
      <figcaption className={styles.caption}>
        Product walkthrough · {video.duration} · recorded from the real product
        running locally, with demo data
      </figcaption>
    </figure>
  );
}
