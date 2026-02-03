function pad2(n: number) {
  return String(n).padStart(2, "0");
}

export function formatKickoff(d: Date) {
  const day = d.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
  const time = d.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });
  return `${day} • ${time}`;
}

export function formatCountdown(ms: number) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  if (days > 0) return `${days}d ${pad2(hours)}h ${pad2(minutes)}m`;
  return `${pad2(hours)}:${pad2(minutes)}:${pad2(seconds)}`;
}

// Next match: upcoming Saturday 6:30 PM local time
export function nextSaturdayAt1830() {
  const now = new Date();
  const d = new Date(now);
  const day = d.getDay(); // 0=Sun ... 6=Sat
  const delta = (6 - day + 7) % 7;
  d.setDate(d.getDate() + delta);
  d.setHours(18, 30, 0, 0);
  if (d <= now) d.setDate(d.getDate() + 7);
  return d;
}

