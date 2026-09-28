import { isTodo, showTodos, todoNote } from '@/lib/todo';
import styles from './ContentText.module.scss';

/**
 * Renders a content value. Placeholders (see lib/todo) appear as a dashed
 * marker in development and render nothing in production.
 */
export default function ContentText({
  value,
  fallback = null,
}: {
  value?: string;
  fallback?: React.ReactNode;
}) {
  if (!value) return fallback;
  if (!isTodo(value)) return value;
  if (!showTodos) return fallback;
  return (
    <span className={styles.todo} title="Placeholder: see CONTENT_TODO.md">
      TODO · {todoNote(value)}
    </span>
  );
}

/** True when a value should be rendered at all in the current environment. */
export const renders = (value?: string) =>
  Boolean(value) && (!isTodo(value) || showTodos);
