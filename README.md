# MULTILAB ITEC 3 · Presentación web

Presentación interactiva de la propuesta institucional **MULTILAB ITEC 3** y módulo **EXPO ITEC 2027 · Edición Aniversario** (Instituto Tecnológico N° 3, Posadas, Misiones) para el Rectorado y los equipos docentes.

**Stack:** React + TypeScript + Vite + Tailwind CSS v4 + Framer Motion + Lucide React.

```text
.github/workflows/   deploy-branch.yml → compila dist/ automáticamente en la rama deploy
public/brand/        logo-itec-color.png · logo-itec-negativo.png
public/.htaccess     reglas Apache para DonWeb Ferozo (SPA, caché y headers)
src/data/            projectData.ts   ← todo el contenido, tipado y desacoplado
src/services/        wpClient.ts      ← esqueleto REST API para la Fase 2 (2027)
src/components/      layout · sections · visuals (ilustraciones y pictogramas SVG)
src/styles/          tokens.css       ← paleta y tipografía del Manual de Normas 2023
vercel.json          rutas, caché y headers (alternativa de despliegue en Vercel)
```

## Desarrollo local

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # tsc + vite build  →  dist/
npm run preview
```

### Cómo usarla en una reunión

- **Modo presentación** (botón en la barra superior): pantalla completa, una sección por pantalla. Navegación con `↑` `↓` `←` `→` (o RePág/AvPág). `Esc` cierra el panel abierto; sin paneles abiertos, sale del modo.
- **Exportar Síntesis PDF** (bloque de cierre): usa `window.print()` con hoja de estilos optimizada → elegir "Guardar como PDF".

### Editar contenidos

Todo el texto vive en [`src/data/projectData.ts`](src/data/projectData.ts). Regla de redacción: para la modernización administrativa usar siempre *"la inminente digitalización del sistema académico"* (sin siglas ni nombres internos).

---

## Despliegue Opción A: GitHub (`dgditec3`) → DonWeb Ferozo (Integración Git)

El hosting de DonWeb sirve archivos estáticos directamente (sin compilar Node.js en el servidor). Por eso este repositorio separa el código fuente (`main`) del compilado listo para publicar (`deploy`):

1. Cada `push` a **`main`** dispara `.github/workflows/deploy-branch.yml` en GitHub Actions, ejecuta `npm ci && npm run build` y actualiza la rama **`deploy`** con el contenido de `dist/` (incluido `.htaccess`).
2. En **Ferozo → Dominios → Subdominios**, crear `multilab.itec3misiones.edu.ar` apuntando a `/public_html/multilab/`.
3. En **Ferozo → Mi Sitio Web → GIT → Crear nuevo**:
   - **Repositorio:** `git@github.com:dgditec3/multilab-itec3.git`
   - **Rama:** `deploy`
   - **Ruta de instalación:** `/public_html/multilab/`
4. Si el repositorio es **Privado**, verificar en GitHub (`dgditec3/multilab-itec3` → *Settings → Deploy keys*) que esté autorizada la **Clave SSH** que figura en el panel GIT de Ferozo (si la clave no está cargada a nivel de cuenta `dgditec3`).

---

## Despliegue Opción B (alternativa): GitHub → Vercel + CNAME en DonWeb

1. Importar `dgditec3/multilab-itec3` en [vercel.com](https://vercel.com) (framework **Vite**, build `npm run build`, output `dist`).
2. En **Project → Settings → Domains**, agregar `multilab.itec3misiones.edu.ar`.
3. En **DonWeb → Dominios → `itec3misiones.edu.ar` → Zona DNS**, agregar un registro `CNAME` con host `multilab` apuntando al destino que indique Vercel (`cname.vercel-dns.com`).
