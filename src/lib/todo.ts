/**
 * Content placeholders.
 *
 * Any string created with `todo()` is information that still has to be
 * confirmed. In development it renders as a dashed "TODO" marker so gaps are
 * obvious; in production it is hidden so nothing unverified ships.
 * Every placeholder is listed in CONTENT_TODO.md.
 */
const PREFIX = 'TODO: ';

export const todo = (note: string) => `${PREFIX}${note}`;

export const isTodo = (value?: string | null): boolean =>
  typeof value === 'string' && value.startsWith(PREFIX);

export const todoNote = (value: string) => value.slice(PREFIX.length);

export const showTodos = process.env.NODE_ENV !== 'production';

/** Drops placeholder strings from a list in production. */
export const verified = (items: string[]) =>
  showTodos ? items : items.filter((item) => !isTodo(item));

/**
 * Deep-copies data for client components, blanking placeholder strings in
 * production so they never appear in the page source.
 */
export function stripTodos<T>(value: T): T {
  if (showTodos) return value;
  if (typeof value === 'string') return (isTodo(value) ? '' : value) as T;
  if (Array.isArray(value)) return value.map(stripTodos) as T;
  if (
    value &&
    typeof value === 'object' &&
    Object.getPrototypeOf(value) === Object.prototype
  ) {
    return Object.fromEntries(
      Object.entries(value).map(([k, v]) => [k, stripTodos(v)])
    ) as T;
  }
  return value;
}
