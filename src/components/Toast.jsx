export default function Toast({ message }) {
  const visible = Boolean(message)

  return (
    <div
      aria-live="polite"
      className={`fixed bottom-5 right-5 z-50 transition-all duration-300 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-ink dark:bg-night-ink text-paper dark:text-ink px-4 py-3 rounded-sm flex items-center gap-3 text-sm font-medium shadow-lg">
        <i className="fa-solid fa-circle-info text-clay-soft dark:text-clay text-xs" />
        <span>{message || 'Notification'}</span>
      </div>
    </div>
  )
}
