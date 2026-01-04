import React, { useMemo, useState } from "react";
import {
  Mail,
  Phone,
  Linkedin,
  Layers,
  Briefcase,
  TrendingUp,
  GraduationCap,
  Download,
  ChevronDown,
  FileSpreadsheet,
  GitBranch,
  Braces,
  Database,
  Wrench,
  Workflow,
  LineChart,
  FileBarChart2,
  Share2,
  Boxes,
  ExternalLink,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

/**
 * App "móvil" (max-w-md)
 * - React + Tailwind
 * - Solo modo claro
 * - Tabs: "Trayectoria" / "Stack tecnológico"
 */
export default function App() {
  const [tab, setTab] = useState<"cv" | "stack">("cv");
  const [showOlderExp, setShowOlderExp] = useState(false);

  const primary = "#6B4C5F";

  const rootClass = useMemo(
    () =>
      "min-h-[max(884px,100dvh)] bg-[#F9FAFB] text-[#374151] transition-colors duration-300 antialiased pb-20",
    []
  );

  const experiences: Experience[] = useMemo(
    () => [
      {
        company: "Universidad Internacional de Valencia",
        dates: "nov. 2022 - actualidad",
        role: "Análisis de datos y procesos de calidad",
        bullets: [
          "Gestión y análisis de indicadores, resultados de encuestas y procesos de seguimiento, garantizando coherencia, trazabilidad y fiabilidad del dato para la toma de decisiones.",
          "Coordinación de la migración operativa del departamento al ERP (Microsoft Dynamics).",
          "Definición y seguimiento de KPIs para evaluar el impacto de la mejora de procesos.",
          "Automatización de procesos en Python para reducir tiempos y errores en tareas manuales.",
          "Representación y análisis de rankings en Power BI para apoyar la toma de decisiones.",
          "Diseño e implantación de un proceso de control interno para la revisión de encuestas e informes.",
        ],
        tags: ["Power BI", "Python", "KPIs", "Dynamics"],
        isOlder: false,
      },
      {
        company: "NATURALEX",
        dates: "may. 2021 - nov. 2022 (1 año 7 meses)",
        role: "Gestión y análisis de datos – Dpto. Marketplaces",
        bullets: [
          "Soporte interdepartamental mediante Excel, incluyendo formación y desarrollo de herramientas.",
          "Consultas SQL en coordinación con el DBA para la gestión de datos procedentes de plataformas como Amazon, Cdiscount o Mirakl.",
          "Desarrollo de macros en VBA para automatizar la descarga, transformación y carga de información.",
          "Uso avanzado de Power Query para integrar datos desde múltiples orígenes y generar tablas dinámicas.",
          "Automatización de procesos con Power Automate Desktop.",
          "Diseño y presentación de dashboards en Power BI.",
          "Formulación avanzada: búsquedas con múltiples coincidencias, conexiones online en tiempo real y condiciones dependientes del factor tiempo.",
        ],
        tags: ["Excel", "SQL", "VBA", "Power BI", "Power Query", "Power Automate"],
        isOlder: false,
      },
      {
        company: "Consellería de Hacienda y Modelo Económico",
        dates: "nov. 2018 - oct. 2020 (2 años)",
        role: "Análisis de datos, estadista – Servicio de Financiación Autonómica",
        bullets: [
          "Gestión y seguimiento de indicadores del sistema sanitario.",
          "Diseño de macros y tablas dinámicas en Excel para agilizar la extracción y explotación de datos.",
          "Creación y mantenimiento de una base de datos sanitaria en Microsoft Access.",
          "Análisis estadístico avanzado (regresiones, correlaciones, cargas factoriales) con Stata.",
          "Visualización de resultados y análisis geolocalizado mediante Power BI.",
        ],
        tags: ["Excel", "Access", "Stata", "Power BI"],
        isOlder: true,
      },
      {
        company: "Consellería de Vivienda, O.P. y V.T.",
        dates: "abr. 2017 - may. 2017",
        role: "Técnico superior de informes poblacionales",
        bullets: [
          "Elaboración de ratios e indicadores poblacionales a partir de datos del INE.",
          "Investigación y actualización de indicadores económicos.",
          "Realización de informes de tendencias y gráficos.",
        ],
        tags: ["INE", "Indicadores", "Informes"],
        isOlder: true,
      },
      {
        company: "Hospital Universitario Doctor Peset",
        dates: "oct. 2015 - ene. 2016",
        role: "Técnico superior de compras y logística",
        bullets: [
          "Estudio de aprovisionamiento para comprobar costes.",
          "Recepción de transportistas y registro de pedidos.",
          "Emisión de facturas y etiquetado de lotes.",
        ],
        tags: ["Logística", "Compras"],
        isOlder: true,
      },
      {
        company: "TÜV Rheinland España",
        dates: "ene. 2011 - may. 2011",
        role: "Técnico superior administrativo",
        bullets: [
          "Facturación de servicios a través de SAP S3.",
          "Gestión de la cartera de clientes mediante Microsoft Access.",
          "Cumplimentación auxiliar de informes de calidad.",
          "Atención en oficina, física, virtual y telefónica.",
        ],
        tags: ["SAP", "Access", "Calidad"],
        isOlder: true,
      },
    ],
    [],
  );

  const programs: Program[] = useMemo(
    () => [
      {
        name: "Excel",
        desc: "La herramienta universal para el prototipado de datos. A menudo subestimada, pero un valor seguro para garantizar resultados con plazos ajustados.",
        Icon: FileSpreadsheet,
        tags: ["KPIs", "Reporting", "Automatización"],
      },
      {
        name: "Power Query",
        desc: "Se habla mucho de SQL y muy poco de Power Query. Permite configurar flujos de información de principio a fin: conecta a bases de datos, transforma información desestructurada y construye modelos de datos listos para tablas dinámicas o gráficos.",
        Icon: GitBranch,
        tags: ["ETL", "Trazabilidad"],
      },
      {
        name: "Power BI",
        desc: '\"Si no lo cuentas, no lo has hecho\". Un Dashboard favorece que el dato hable, transformando modelos complejos en narrativas visuales e interactivas, facilitando la toma de decisiones de forma clara, directa y en tiempo real.',
        Icon: FileBarChart2,
        tags: ["Dashboards", "Decisión"],
      },
      {
        name: "SQL",
        desc: "Dominar SQL no es solo escribir código, es entender cómo se vertebra una base de datos. Significa identificar las Primary Keys, definir con precisión los campos, controlar la integridad de los registros, dominar la lógica de las relaciones mediante Joins y Unions, etcétera. Si el dato no es correcto en origen, no lo será en destino.",
        Icon: Database,
        tags: ["Calidad del dato", "Consultas"],
      },
      {
        name: "Python",
        desc: "La navaja suiza para el análisis avanzado. Python permite romper las limitaciones del software convencional, creando automatismos mediante bucles para tareas masivas y ejecutando estadística compleja allí donde las herramientas tradicionales no llegan.",
        Icon: Braces,
        tags: ["Automatización", "Análisis"],
      },
      {
        name: "VBA",
        desc: "Automatizaciones en Office para escalar tareas operativas: exportaciones, validaciones y plantillas que ahorran tiempo a varios equipos.",
        Icon: Wrench,
        tags: ["Office", "Productividad"],
      },
      {
        name: "Power Automate Desktop",
        desc: "Orquestación de procesos repetitivos: descargas, cargas, pasos de validación y tareas de backoffice con menos fricción y menos errores.",
        Icon: Workflow,
        tags: ["RPA", "Procesos"],
      },
      {
        name: "Programas para estadística",
        desc: "R / Stata / Mathematica para elaborar regresiones lineales, correlaciones, análisis de causalidad y refactorización de variables para elaborar indicadores sintéticos, etcétera.",
        Icon: LineChart,
        tags: ["Regresión", "Análisis"],
      },
      {
        name: "Microsoft Dynamics (ERP)",
        desc: "Trabajo con entornos de ERP: migración operativa, adaptación de procesos y definición de indicadores para seguimiento y mejora continua.",
        Icon: Boxes,
        tags: ["ERP", "Procesos"],
      },
      {
        name: "SharePoint / Gestión documental",
        desc: "Estandarización y trazabilidad de evidencias: repositorios, estructura, control de versiones y acceso para auditorías y reporting.",
        Icon: Share2,
        tags: ["Evidencias", "Trazabilidad"],
      },
    ],
    [],
  );

  // ==============================
  // Mini tests en DEV
  // ==============================
  if (typeof window !== "undefined") {
    // @ts-expect-error - import.meta puede no existir fuera de Vite
    const isDev = typeof import.meta !== "undefined" && (import.meta as any).env?.DEV;
    if (isDev) {
      console.assert(experiences.length >= 2, "Debe haber al menos 2 experiencias");
      console.assert(experiences.some((e) => e.isOlder), "Debe existir experiencia anterior (isOlder=true)");
      console.assert(programs.length >= 3, "Debe haber al menos 3 items en Stack tecnológico");
      console.assert(
        new Set(programs.map((p) => p.name)).size === programs.length,
        "Los nombres del Stack deben ser únicos",
      );
      console.assert(programs.every((p) => p.desc.trim().length > 0), "Cada item del Stack debe tener desc");
    }
  }

  return (
    <div className={rootClass}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,700;1,700&display=swap');
        .font-sans { font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"; }
        .font-display { font-family: "Playfair Display", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { animation: fadeInUp .6s ease-out both; }
      `}</style>

      <header className="sticky top-0 z-50 bg-[#F9FAFB]/90 backdrop-blur-md border-b border-gray-200 px-4 py-4">
        <div className="flex justify-between items-center max-w-md mx-auto font-sans">
          <h1 className="text-lg font-bold text-gray-900">Perfil Profesional</h1>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 pt-6 space-y-8 font-sans">
        {/* Hero */}
        <div className="flex flex-col items-center text-center space-y-4 animate-fade-in-up">
          <div className="relative group">
            <div
              className="absolute -inset-0.5 rounded-full opacity-75 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
              style={{ backgroundImage: `linear-gradient(90deg, ${primary}, rgb(192 132 252))` }}
            />
            <img
              alt="Foto de perfil profesional de Pablo López Gil"
              className="relative w-32 h-32 object-cover rounded-full border-4 border-[#F9FAFB] shadow-xl"
              src="https://media.licdn.com/dms/image/v2/D4D03AQFhmh9tr_t4ag/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1668192783338?e=1769040000&v=beta&t=KHZuFqPvK31hnair3JvO0pIjP5fxijzQxNP69LgZnnw"
            />
          </div>

          <div>
            <h2 className="font-display text-3xl font-bold text-gray-900">Pablo López Gil</h2>
            <p className="text-sm tracking-widest uppercase font-semibold mt-1" style={{ color: primary }}>
              Analista de Datos
            </p>
          </div>

          {/* Contacto */}
          <div className="flex items-center gap-3 justify-center w-full">
            <a
              className="p-3 bg-white rounded-full shadow-sm border border-gray-100 hover:scale-105 transition-transform"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=pablolopezgil1990@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" style={{ color: primary }} />
            </a>

            <a
              className="p-3 bg-white rounded-full shadow-sm border border-gray-100 hover:scale-105 transition-transform"
              href="https://wa.me/34654033645"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="h-5 w-5" style={{ color: primary }} />
            </a>

            <a
              className="p-3 bg-white rounded-full shadow-sm border border-gray-100 hover:scale-105 transition-transform"
              href="https://www.linkedin.com/in/pablolopezeconomista/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" style={{ color: primary }} />
            </a>
          </div>

          <p className="text-sm text-gray-600 max-w-xs leading-relaxed">
            Economista especializado en transformar información compleja en indicadores claros para la toma de decisiones.
          </p>
        </div>

        {/* Tabs */}
        <div className="bg-gray-100 p-1 rounded-xl flex gap-1 shadow-inner">
          <button
            className={
              tab === "cv"
                ? "flex-1 py-3 px-4 rounded-lg bg-white shadow-sm font-medium text-sm flex items-center justify-center gap-2 transition-all"
                : "flex-1 py-3 px-4 rounded-lg text-gray-500 hover:text-gray-900 font-medium text-sm flex items-center justify-center gap-2 transition-all"
            }
            onClick={() => setTab("cv")}
          >
            <TrendingUp className="h-4 w-4" style={{ color: tab === "cv" ? primary : undefined }} />
            <span style={tab === "cv" ? { color: primary } : {}}>Trayectoria</span>
          </button>

          <button
            className={
              tab === "stack"
                ? "flex-1 py-3 px-4 rounded-lg bg-white shadow-sm font-medium text-sm flex items-center justify-center gap-2 transition-all"
                : "flex-1 py-3 px-4 rounded-lg text-gray-500 hover:text-gray-900 font-medium text-sm flex items-center justify-center gap-2 transition-all"
            }
            onClick={() => setTab("stack")}
          >
            <Layers className="h-4 w-4" style={{ color: tab === "stack" ? primary : undefined }} />
            <span style={tab === "stack" ? { color: primary } : {}}>Stack tecnológico</span>
          </button>
        </div>

        {tab === "cv" ? (
          <div className="space-y-6">
            {/* Experiencia */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 rounded-lg" style={{ backgroundColor: "rgba(107, 76, 95, 0.1)" }}>
                  <Briefcase className="h-5 w-5" style={{ color: primary }} />
                </div>
                <h3 className="font-bold text-lg text-gray-900">Experiencia profesional</h3>
              </div>

              <p className="text-sm text-gray-600 mb-4">
                Más de 7 años minimizando tiempos y errores en múltiples contextos:
              </p>

              <div className="space-y-4">
                {experiences
                  .filter((e) => !e.isOlder)
                  .map((exp) => (
                    <ExperienceCard key={exp.company + exp.dates} {...exp} primary={primary} />
                  ))}

                {showOlderExp ? (
                  <>
                    {experiences
                      .filter((e) => e.isOlder)
                      .map((exp) => (
                        <ExperienceCard key={exp.company + exp.dates} {...exp} primary={primary} />
                      ))}
                  </>
                ) : null}
              </div>

              <button
                className="w-full mt-3 py-2 text-xs font-semibold flex items-center justify-center gap-1"
                style={{ color: primary }}
                onClick={() => setShowOlderExp((v) => !v)}
              >
                {showOlderExp ? "Ocultar experiencia anterior" : "Ver experiencia anterior"}
                <ChevronDown className={"h-4 w-4 transition-transform " + (showOlderExp ? "rotate-180" : "")} />
              </button>
            </section>

            {/* Formación */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 rounded-lg" style={{ backgroundColor: "rgba(107, 76, 95, 0.1)" }}>
                  <GraduationCap className="h-5 w-5" style={{ color: primary }} />
                </div>
                <h3 className="font-bold text-lg text-gray-900">Formación académica</h3>
              </div>

              <Card>
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 bg-black inline-block" />
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">Máster en Política Económica y E. Pública</h4>
                      <p className="text-xs text-gray-500 mt-1">Universidad de Valencia · 2016–2017</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 bg-black inline-block" />
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">Grado en Economía</h4>
                      <p className="text-xs text-gray-500 mt-1">Universidad de Valencia · 2011–2016</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 bg-black inline-block" />
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">CS Administración y Finanzas</h4>
                      <p className="text-xs text-gray-500 mt-1">IES Abastos · 2009–2011</p>
                    </div>
                  </div>
                </div>
              </Card>
            </section>
          </div>
        ) : (
          <StackTecnologico primary={primary} programs={programs} />
        )}
      </main>

      {/* Fixed CTA */}
      <div className="fixed bottom-6 left-0 right-0 px-6 max-w-md mx-auto z-40">
        <button
          className="w-full text-white font-bold py-3.5 px-4 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-transform active:scale-95"
          style={{ backgroundColor: primary }}
          onClick={() => alert("Conecta aquí la URL de tu PDF (ej. /pablo-lopez-gil-cv.pdf)")}
        >
          <Download className="h-5 w-5" />
          Descargar CV Completo (PDF)
        </button>
      </div>

      <nav className="fixed bottom-0 w-full bg-[#F9FAFB] border-t border-gray-200 pb-safe z-30 hidden" />
    </div>
  );
}

// ==============================
// Tipos y componentes
// ==============================

type Experience = {
  company: string;
  dates: string;
  role: string;
  bullets?: string[];
  tags?: string[];
  isOlder?: boolean;
};

type Program = {
  name: string;
  desc: string;
  Icon: React.ComponentType<{ className?: string }>;
  href?: string;
  tags?: string[];
};

function Card({ children }: { children: React.ReactNode }) {
  return <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">{children}</div>;
}

function ExperienceCard(props: Experience & { primary: string }) {
  const { company, dates, role, bullets, tags, primary } = props;

  return (
    <Card>
      <div className="flex justify-between items-start mb-2">
        <div>
          <h4 className="font-bold text-gray-800">{company}</h4>
          <p className="text-xs font-semibold uppercase" style={{ color: primary }}>
            {dates}
          </p>
        </div>
      </div>

      <p className="text-sm font-medium text-gray-700 mb-3">{role}</p>

      {bullets?.length ? (
        <ul className="text-xs text-gray-600 space-y-1.5 list-disc pl-4 leading-relaxed">
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      ) : null}

      {tags?.length ? (
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((t) => (
            <span key={t} className="px-2 py-1 bg-gray-100 text-gray-600 text-[10px] rounded-md font-medium">
              {t}
            </span>
          ))}
        </div>
      ) : null}
    </Card>
  );
}

function StackTecnologico({ primary, programs }: { primary: string; programs: Program[] }) {
  const [showMoreStack, setShowMoreStack] = useState(false);

  const extraNames = useMemo(
    () =>
      new Set([
        "VBA",
        "Power Automate Desktop",
        "Microsoft Dynamics (ERP)",
        "SharePoint / Gestión documental",
      ]),
    [],
  );

  const mainPrograms = programs.filter((p) => !extraNames.has(p.name));
  const extraPrograms = programs.filter((p) => extraNames.has(p.name));
  const visiblePrograms = showMoreStack ? [...mainPrograms, ...extraPrograms] : mainPrograms;

  return (
    <div className="space-y-6">
      <section>
        <div className="flex items-center gap-2 mb-4">
          <div className="p-1.5 rounded-lg" style={{ backgroundColor: "rgba(107, 76, 95, 0.1)" }}>
            <Layers className="h-5 w-5" style={{ color: primary }} />
          </div>
          <h3 className="font-bold text-lg text-gray-900">Stack tecnológico</h3>
        </div>

        <p className="text-sm text-gray-600 mb-4">
          Trabajo el dato desde origen hasta destino. El método dependerá del propósito y plazo:
        </p>

        <div className="space-y-4">
          {visiblePrograms.map(({ name, desc, Icon, href, tags }) => (
            <div key={name} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-start gap-3">
                <div
                  className="shrink-0 h-10 w-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: "rgba(107, 76, 95, 0.1)" }}
                  aria-hidden
                >
                  <Icon className="h-5 w-5" style={{ color: primary }} />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="font-bold text-gray-900">{name}</h4>
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-semibold inline-flex items-center gap-1 hover:opacity-80"
                        style={{ color: primary }}
                      >
                        Ver ejemplo <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    ) : null}
                  </div>

                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">{desc}</p>

                  {tags?.length ? (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {tags.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-[10px] rounded-md font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>

        {extraPrograms.length ? (
          <button
            className="w-full mt-3 py-2 text-xs font-semibold flex items-center justify-center gap-1"
            style={{ color: primary }}
            onClick={() => setShowMoreStack((v) => !v)}
          >
            {showMoreStack ? "Ver menos" : `Ver más (${extraPrograms.length})`}
            <ChevronDown className={"h-4 w-4 transition-transform " + (showMoreStack ? "rotate-180" : "")} />
          </button>
        ) : null}
      </section>

      <section>
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
          <p className="text-sm text-gray-700 leading-relaxed">
            Propuesta: mantener este Stack tecnológico como un "catálogo" de herramientas (qué haces y qué impacto
            aportas). Si te encaja, el siguiente paso es añadir 1–2 enlaces por herramienta (dashboard, repo, ejemplo)
            para que se vea tu trabajo real.
          </p>
        </div>
      </section>
    </div>
  );
}
