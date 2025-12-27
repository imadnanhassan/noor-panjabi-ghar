"use client";

export default function SystemLogsPage() {
  return (
    <div className="min-h-screen bg-[var(--admin-bg)] text-[var(--admin-text)]">
      <div className="max-w-[1600px] mx-auto p-4 md:p-8">
        <h1 className="text-2xl font-bold mb-6">System Logs</h1>
        <div className="bg-[var(--admin-card-bg)] border-[var(--admin-border)] rounded-[2rem] p-8">
          <p className="text-[var(--admin-text-muted)]">
            Application logs, error tracking, and system monitoring will be
            displayed here.
          </p>
        </div>
      </div>
    </div>
  );
}
