type BookLoaderProps = {
  text?: string;
  fullPage?: boolean;
  inline?: boolean;
  className?: string;
};

export function BookLoader({ text, fullPage = false, inline = false, className = '' }: BookLoaderProps) {
  const classes = ['book-loader', fullPage ? 'book-loader-full-page' : '', inline ? 'book-loader-inline' : '', className].filter(Boolean).join(' ');

  return (
    <div className={classes} role="status" aria-live="polite" aria-label={text || 'Loading'}>
      <span className="book-loader-art" aria-hidden="true">
        <span className="book-loader-bookshelf">
          <span className="book-loader-book book-loader-book-one" />
          <span className="book-loader-book book-loader-book-two" />
          <span className="book-loader-book book-loader-book-three" />
          <span className="book-loader-book book-loader-book-four" />
          <span className="book-loader-book book-loader-book-five" />
          <span className="book-loader-book book-loader-book-moving" />
        </span>
        <span className="book-loader-shelf" />
      </span>
      {text && <span className="book-loader-text">{text}</span>}
    </div>
  );
}