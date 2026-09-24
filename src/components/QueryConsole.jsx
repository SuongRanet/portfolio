import { motion } from "framer-motion";

const KEYWORDS =
  /\b(SELECT|FROM|WHERE|ORDER BY|GROUP BY|DESC|ASC|LIMIT|LIKE|AND|OR|AS|INSERT INTO|VALUES|COUNT)\b/gi;

function tokenize(sql) {
  const tokens = [];
  const pattern = new RegExp(`'[^']*'|${KEYWORDS.source}`, "gi");
  let last = 0;
  let match;

  while ((match = pattern.exec(sql)) !== null) {
    if (match.index > last) {
      tokens.push({ type: "text", value: sql.slice(last, match.index) });
    }
    tokens.push({
      type: match[0].startsWith("'") ? "string" : "keyword",
      value: match[0],
    });
    last = match.index + match[0].length;
  }
  if (last < sql.length) tokens.push({ type: "text", value: sql.slice(last) });
  return tokens;
}

export const QueryLine = ({ sql }) => (
  <p className="font-mono text-xs leading-relaxed sm:text-sm wrap-break-word">
    <span className="text-muted select-none">{"> "}</span>
    {tokenize(sql).map((token, i) => (
      <span
        key={i}
        className={
          token.type === "keyword"
            ? "text-primary"
            : token.type === "string"
              ? "text-yellow-600 dark:text-yellow-400"
              : "text-text"
        }
      >
        {token.value}
      </span>
    ))}
    <span aria-hidden className="ml-1 animate-pulse text-primary">
      _
    </span>
  </p>
);

const chipClass = (active) =>
  `inline-flex min-h-11 items-center rounded-md border px-3 font-mono text-xs transition-transform duration-200 hover:-translate-y-0.5 ${
    active
      ? "border-primary/50 bg-primary/15 text-primary"
      : "border-border text-muted hover:text-text"
  }`;

const QueryConsole = ({
  file,
  sql,
  filters = [],
  active = null,
  onFilter,
  count,
  unit = "row",
  children,
  bodyClassName = "",
}) => {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card/40 backdrop-blur-sm">
      {/* terminal-style title bar */}
      <div className="flex items-center gap-3 border-b border-border px-3 py-2 text-muted">
        <span className="window-dots" />
        <span className="font-mono text-[11px] tracking-wide truncate">
          {file}
        </span>
      </div>

      {/* query line */}
      <div className="border-b border-border px-4 py-4 sm:px-5">
        <QueryLine sql={sql} />
      </div>

      {/* optional WHERE clause builder */}
      {filters.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 border-b border-border px-4 py-3 sm:px-5">
          <span className="mono-label mr-1 hidden sm:inline">where</span>
          <button
            type="button"
            onClick={() => onFilter(null)}
            aria-pressed={active === null}
            className={chipClass(active === null)}
          >
            *
          </button>
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => onFilter(filter)}
              aria-pressed={active === filter}
              className={chipClass(active === filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      )}

      {/* result set — keyed by filter so a new result fades in */}
      <motion.div
        key={active ?? "*"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
        className={bodyClassName}
      >
        {children}
      </motion.div>

      {/* result footer */}
      {typeof count === "number" && (
        <div className="border-t border-border px-4 py-3 sm:px-5">
          <p className="mono-label normal-case tracking-normal">
            <span className="text-muted">--</span> {count}{" "}
            {count === 1 ? unit : `${unit}s`} in set
          </p>
        </div>
      )}
    </div>
  );
};

export default QueryConsole;
