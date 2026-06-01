import { useEffect, useMemo, useState } from "react";
import {
  BarChart3,
  CalendarDays,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Circle,
  Clock3,
  Filter,
  LayoutDashboard,
  Plus,
  Search,
  Sparkles,
  Trash2,
} from "lucide-react";

type TaskStatus = "todo" | "doing" | "done";
type TaskPriority = "alta" | "media" | "baixa";

type Task = {
  id: string;
  title: string;
  client: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: string;
  estimate: number;
};

const STORAGE_KEY = "dashboard-g-pro-tasks";

const initialTasks: Task[] = [
  {
    id: "task-1",
    title: "Criar landing page do novo servico",
    client: "LipDev.BR",
    status: "doing",
    priority: "alta",
    dueDate: "2026-06-03",
    estimate: 4,
  },
  {
    id: "task-2",
    title: "Revisar funil de captura de leads",
    client: "Clínica Norte",
    status: "todo",
    priority: "alta",
    dueDate: "2026-06-04",
    estimate: 3,
  },
  {
    id: "task-3",
    title: "Organizar backlog da automacao WhatsApp",
    client: "Imob Prime",
    status: "todo",
    priority: "media",
    dueDate: "2026-06-06",
    estimate: 2,
  },
  {
    id: "task-4",
    title: "Publicar relatorio semanal",
    client: "G-Pro",
    status: "done",
    priority: "baixa",
    dueDate: "2026-06-01",
    estimate: 1,
  },
];

const columns: Array<{ status: TaskStatus; title: string; description: string }> = [
  {
    status: "todo",
    title: "A Fazer",
    description: "Demandas capturadas e priorizadas",
  },
  {
    status: "doing",
    title: "Em Progresso",
    description: "Trabalho ativo do dia",
  },
  {
    status: "done",
    title: "Concluido",
    description: "Entregas finalizadas",
  },
];

const priorityMeta: Record<TaskPriority, { label: string; className: string }> = {
  alta: {
    label: "Alta",
    className: "border-rose-400/30 bg-rose-400/10 text-rose-200",
  },
  media: {
    label: "Media",
    className: "border-cyan-400/30 bg-cyan-400/10 text-cyan-200",
  },
  baixa: {
    label: "Baixa",
    className: "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
  },
};

function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

function formatDate(value: string) {
  const [year, month, day] = value.split("-");
  if (!year || !month || !day) return "Sem prazo";
  return `${day}/${month}`;
}

function nextStatus(status: TaskStatus): TaskStatus {
  if (status === "todo") return "doing";
  if (status === "doing") return "done";
  return "done";
}

function previousStatus(status: TaskStatus): TaskStatus {
  if (status === "done") return "doing";
  if (status === "doing") return "todo";
  return "todo";
}

export default function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [query, setQuery] = useState("");
  const [priorityFilter, setPriorityFilter] = useState<"todas" | TaskPriority>(
    "todas",
  );
  const [newTask, setNewTask] = useState({
    title: "",
    client: "",
    priority: "media" as TaskPriority,
    dueDate: todayIso(),
    estimate: 2,
  });

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return;

    try {
      const parsed = JSON.parse(stored) as Task[];
      if (Array.isArray(parsed)) {
        setTasks(parsed);
      }
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const filteredTasks = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return tasks.filter((task) => {
      const matchesQuery =
        !normalizedQuery ||
        task.title.toLowerCase().includes(normalizedQuery) ||
        task.client.toLowerCase().includes(normalizedQuery);
      const matchesPriority =
        priorityFilter === "todas" || task.priority === priorityFilter;

      return matchesQuery && matchesPriority;
    });
  }, [tasks, query, priorityFilter]);

  const stats = useMemo(() => {
    const total = tasks.length;
    const done = tasks.filter((task) => task.status === "done").length;
    const doing = tasks.filter((task) => task.status === "doing").length;
    const hours = tasks
      .filter((task) => task.status !== "done")
      .reduce((sum, task) => sum + task.estimate, 0);
    const progress = total === 0 ? 0 : Math.round((done / total) * 100);

    return { total, done, doing, hours, progress };
  }, [tasks]);

  function addTask() {
    if (!newTask.title.trim()) return;

    setTasks((current) => [
      {
        id: `task-${Date.now()}`,
        title: newTask.title.trim(),
        client: newTask.client.trim() || "Projeto interno",
        status: "todo",
        priority: newTask.priority,
        dueDate: newTask.dueDate || todayIso(),
        estimate: Number(newTask.estimate) || 1,
      },
      ...current,
    ]);

    setNewTask({
      title: "",
      client: "",
      priority: "media",
      dueDate: todayIso(),
      estimate: 2,
    });
  }

  function updateStatus(id: string, status: TaskStatus) {
    setTasks((current) =>
      current.map((task) => (task.id === id ? { ...task, status } : task)),
    );
  }

  function deleteTask(id: string) {
    setTasks((current) => current.filter((task) => task.id !== id));
  }

  return (
    <main className="min-h-screen bg-[#070a12] text-slate-100">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_82%_4%,rgba(132,92,246,0.16),transparent_30%),linear-gradient(135deg,rgba(8,13,28,0.98),rgba(3,7,18,1))]" />
        <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.09)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1480px] gap-5 px-4 py-4 lg:px-6">
        <aside className="hidden w-72 shrink-0 flex-col rounded-[28px] border border-white/10 bg-white/[0.045] p-5 shadow-2xl shadow-black/30 lg:flex">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/20">
              <LayoutDashboard size={22} />
            </div>
            <div>
              <p className="text-sm font-black">Dashboard G-Pro</p>
              <p className="text-xs text-slate-400">Organizador de tarefas</p>
            </div>
          </div>

          <nav className="mt-8 space-y-2">
            {[
              ["Painel", LayoutDashboard],
              ["Tarefas", CheckCircle2],
              ["Agenda", CalendarDays],
              ["Relatorios", BarChart3],
            ].map(([label, Icon], index) => (
              <button
                key={String(label)}
                className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold transition ${
                  index === 0
                    ? "bg-cyan-400 text-slate-950"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon size={18} />
                {String(label)}
              </button>
            ))}
          </nav>

          <div className="mt-auto rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-4">
            <div className="flex items-center gap-2 text-cyan-200">
              <Sparkles size={16} />
              <span className="text-xs font-black uppercase tracking-[0.18em]">
                Sprint ativo
              </span>
            </div>
            <p className="mt-3 text-3xl font-black">{stats.progress}%</p>
            <p className="mt-1 text-xs leading-relaxed text-slate-400">
              Entregas concluidas no ciclo atual. Continue movendo tarefas para
              concluido.
            </p>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-cyan-300"
                style={{ width: `${stats.progress}%` }}
              />
            </div>
          </div>
        </aside>

        <section className="flex min-w-0 flex-1 flex-col">
          <header className="flex flex-col gap-4 rounded-[28px] border border-white/10 bg-white/[0.045] p-5 shadow-2xl shadow-black/20 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
                Workspace profissional
              </p>
              <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                Organize tarefas, prazos e prioridades.
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                Um painel operacional para freelancers e pequenas equipes
                acompanharem demandas, foco do dia e progresso de entrega.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:w-[520px]">
              {[
                ["Total", stats.total],
                ["Em progresso", stats.doing],
                ["Concluidas", stats.done],
                ["Horas abertas", stats.hours],
              ].map(([label, value]) => (
                <div
                  key={String(label)}
                  className="rounded-2xl border border-white/10 bg-slate-950/40 p-3"
                >
                  <p className="text-2xl font-black text-white">{value}</p>
                  <p className="mt-1 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-slate-500">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </header>

          <div className="mt-5 grid gap-5 xl:grid-cols-[380px_1fr]">
            <section className="rounded-[28px] border border-white/10 bg-white/[0.045] p-5">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-black">Nova tarefa</h2>
                  <p className="text-sm text-slate-400">
                    Capture a demanda antes que ela escape.
                  </p>
                </div>
                <div className="rounded-2xl bg-cyan-300/10 p-3 text-cyan-200">
                  <Plus size={20} />
                </div>
              </div>

              <div className="mt-5 space-y-3">
                <label className="block">
                  <span className="mb-1.5 block text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                    Tarefa
                  </span>
                  <input
                    value={newTask.title}
                    onChange={(event) =>
                      setNewTask((task) => ({
                        ...task,
                        title: event.target.value,
                      }))
                    }
                    onKeyDown={(event) => {
                      if (event.key === "Enter") addTask();
                    }}
                    placeholder="Ex: Revisar proposta comercial"
                    className="h-12 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/60"
                  />
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                    Cliente ou projeto
                  </span>
                  <input
                    value={newTask.client}
                    onChange={(event) =>
                      setNewTask((task) => ({
                        ...task,
                        client: event.target.value,
                      }))
                    }
                    placeholder="Ex: G-Pro"
                    className="h-12 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/60"
                  />
                </label>

                <div className="grid grid-cols-2 gap-3">
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                      Prazo
                    </span>
                    <input
                      type="date"
                      value={newTask.dueDate}
                      onChange={(event) =>
                        setNewTask((task) => ({
                          ...task,
                          dueDate: event.target.value,
                        }))
                      }
                      className="h-12 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 text-sm text-white outline-none transition focus:border-cyan-300/60"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-1.5 block text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                      Horas
                    </span>
                    <input
                      type="number"
                      min="1"
                      max="24"
                      value={newTask.estimate}
                      onChange={(event) =>
                        setNewTask((task) => ({
                          ...task,
                          estimate: Number(event.target.value),
                        }))
                      }
                      className="h-12 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 text-sm text-white outline-none transition focus:border-cyan-300/60"
                    />
                  </label>
                </div>

                <div>
                  <span className="mb-1.5 block text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                    Prioridade
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    {(["alta", "media", "baixa"] as TaskPriority[]).map(
                      (priority) => (
                        <button
                          key={priority}
                          type="button"
                          onClick={() =>
                            setNewTask((task) => ({ ...task, priority }))
                          }
                          className={`rounded-2xl border px-3 py-2 text-xs font-black transition ${
                            newTask.priority === priority
                              ? priorityMeta[priority].className
                              : "border-white/10 bg-slate-950/40 text-slate-500 hover:text-slate-300"
                          }`}
                        >
                          {priorityMeta[priority].label}
                        </button>
                      ),
                    )}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={addTask}
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-cyan-300 font-black text-slate-950 transition hover:bg-cyan-200"
                >
                  <Plus size={17} />
                  Adicionar tarefa
                </button>
              </div>

              <div className="mt-5 rounded-3xl border border-white/10 bg-slate-950/40 p-4">
                <div className="flex items-center gap-2 text-slate-300">
                  <Clock3 size={16} />
                  <span className="text-sm font-black">Foco de hoje</span>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Termine uma tarefa de alta prioridade antes de abrir novas
                  demandas. O painel destaca o que ainda consome horas.
                </p>
              </div>
            </section>

            <section className="min-w-0 rounded-[28px] border border-white/10 bg-white/[0.045] p-5">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h2 className="text-lg font-black">Quadro de tarefas</h2>
                  <p className="text-sm text-slate-400">
                    Priorize, mova e acompanhe cada entrega.
                  </p>
                </div>

                <div className="flex flex-col gap-2 sm:flex-row">
                  <label className="relative">
                    <Search
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                    />
                    <input
                      value={query}
                      onChange={(event) => setQuery(event.target.value)}
                      placeholder="Buscar tarefa"
                      className="h-11 w-full rounded-2xl border border-white/10 bg-slate-950/60 pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/60 sm:w-56"
                    />
                  </label>

                  <label className="relative">
                    <Filter
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                    />
                    <select
                      value={priorityFilter}
                      onChange={(event) =>
                        setPriorityFilter(
                          event.target.value as "todas" | TaskPriority,
                        )
                      }
                      className="h-11 w-full appearance-none rounded-2xl border border-white/10 bg-slate-950/60 pl-10 pr-8 text-sm text-white outline-none transition focus:border-cyan-300/60 sm:w-44"
                    >
                      <option value="todas">Todas</option>
                      <option value="alta">Alta</option>
                      <option value="media">Media</option>
                      <option value="baixa">Baixa</option>
                    </select>
                  </label>
                </div>
              </div>

              <div className="mt-5 grid gap-4 lg:grid-cols-3">
                {columns.map((column) => {
                  const columnTasks = filteredTasks.filter(
                    (task) => task.status === column.status,
                  );

                  return (
                    <div
                      key={column.status}
                      className="min-h-[520px] rounded-3xl border border-white/10 bg-slate-950/35 p-3"
                    >
                      <div className="px-2 py-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-black">{column.title}</h3>
                          <span className="rounded-full bg-white/10 px-2 py-1 text-xs font-black text-slate-300">
                            {columnTasks.length}
                          </span>
                        </div>
                        <p className="mt-1 text-xs text-slate-500">
                          {column.description}
                        </p>
                      </div>

                      <div className="mt-2 space-y-3">
                        {columnTasks.map((task) => (
                          <article
                            key={task.id}
                            className="rounded-3xl border border-white/10 bg-[#0b1020] p-4 shadow-xl shadow-black/20"
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div>
                                <span
                                  className={`inline-flex rounded-full border px-2.5 py-1 text-[0.65rem] font-black uppercase tracking-[0.12em] ${
                                    priorityMeta[task.priority].className
                                  }`}
                                >
                                  {priorityMeta[task.priority].label}
                                </span>
                                <h4 className="mt-3 text-sm font-black leading-5 text-white">
                                  {task.title}
                                </h4>
                              </div>
                              <button
                                type="button"
                                onClick={() => deleteTask(task.id)}
                                className="rounded-xl p-2 text-slate-600 transition hover:bg-rose-400/10 hover:text-rose-200"
                                aria-label="Remover tarefa"
                              >
                                <Trash2 size={15} />
                              </button>
                            </div>

                            <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-400">
                              <span className="rounded-full bg-white/5 px-2.5 py-1">
                                {task.client}
                              </span>
                              <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2.5 py-1">
                                <CalendarDays size={12} />
                                {formatDate(task.dueDate)}
                              </span>
                              <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2.5 py-1">
                                <Clock3 size={12} />
                                {task.estimate}h
                              </span>
                            </div>

                            <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
                              <button
                                type="button"
                                disabled={task.status === "todo"}
                                onClick={() =>
                                  updateStatus(task.id, previousStatus(task.status))
                                }
                                className="inline-flex items-center gap-1 rounded-xl px-2.5 py-1.5 text-xs font-bold text-slate-400 transition hover:bg-white/5 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
                              >
                                <ChevronLeft size={14} />
                                Voltar
                              </button>

                              <button
                                type="button"
                                onClick={() =>
                                  updateStatus(task.id, nextStatus(task.status))
                                }
                                disabled={task.status === "done"}
                                className="inline-flex items-center gap-1 rounded-xl px-2.5 py-1.5 text-xs font-bold text-cyan-200 transition hover:bg-cyan-300/10 disabled:cursor-not-allowed disabled:opacity-30"
                              >
                                {task.status === "done" ? (
                                  <CheckCircle2 size={14} />
                                ) : (
                                  <Circle size={14} />
                                )}
                                Avancar
                                <ChevronRight size={14} />
                              </button>
                            </div>
                          </article>
                        ))}

                        {columnTasks.length === 0 && (
                          <div className="rounded-3xl border border-dashed border-white/10 p-6 text-center text-sm text-slate-600">
                            Nenhuma tarefa aqui.
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
