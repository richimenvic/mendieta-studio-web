# Auditoría técnica de archivos del sitio

Fecha de auditoría: 2026-04-25

## 1) Inventario auditado

- `index.html`
- `projects.html`
- `studio.html`
- `services.html`
- `contact.html`
- `aviso-legal.html`
- `politica-privacidad.html`
- `cookies.html`
- `projects/lds-temple.html`
- `projects/avicola-sofia.html`
- `projects/prodimsa.html`
- `styles.css`
- `CNAME`
- `img/imagen1.jpg`

## 2) Resumen ejecutivo

Estado general: **sitio funcional y consistente en navegación**, pero con **riesgos relevantes de seguridad/privacidad y SEO técnico**.

Prioridad recomendada:

1. **Alta**: retirar la `access_key` pública del formulario (`contact.html`) y migrar a endpoint propio/serverless.
2. **Alta**: alinear textos legales con la implementación real del formulario (la política de privacidad indica que Web3Forms sería “futuro”, pero ya está activo).
3. **Media**: añadir metadatos SEO base (description y Open Graph) en todas las páginas internas.
4. **Media**: mejorar accesibilidad de navegación móvil (no hay menú visible bajo 640px).
5. **Baja**: incorporar imágenes reales optimizadas y atributos `alt` descriptivos para contenido visual.

## 3) Hallazgos por categoría

### 3.1 Seguridad

- **[Alta] Credencial expuesta en cliente**: en `contact.html` se publica una `access_key` de Web3Forms dentro de un `input hidden`, visible para cualquier visitante.
- **[Media] Dependencia directa de tercero en frontend**: el envío de formulario depende directamente de `https://api.web3forms.com/submit` sin capa de control propia (rate limiting, logging, validación avanzada del lado servidor).

### 3.2 Privacidad y cumplimiento legal

- **[Alta] Inconsistencia legal/operativa**: `politica-privacidad.html` menciona “si en el futuro se habilita ... Web3Forms”, pero el formulario ya está funcionando con ese proveedor.
- **[Media] Política de cookies genérica**: `cookies.html` no documenta de forma explícita catálogo de cookies, duración y base jurídica por cookie/proveedor.

### 3.3 SEO técnico

- **[Media] Meta description ausente** en 10/11 HTML (solo `index.html` la incluye).
- **[Media] Sin etiquetas sociales (`og:*`, `twitter:*`)** en las páginas revisadas.
- **[Baja] Sin `canonical` explícito** en los HTML analizados.

### 3.4 Accesibilidad y UX

- **[Media] Navegación móvil limitada**: `styles.css` oculta `.nav-links` en `<640px` sin alternativa visible (botón menú/hamburguesa).
- **[Media] Imágenes de proyecto como placeholders CSS** (`.hero-image`, `.project-img`, `.image-placeholder`) sin `alt`, lo que reduce valor semántico para lectores de pantalla y SEO de imagen.
- **[Baja] Contraste potencialmente justo** en algunos textos secundarios (`--muted`) sobre fondo claro; conviene validar con WCAG (AA).

### 3.5 Rendimiento

- **[Media] Activo no utilizado**: existe `img/imagen1.jpg`, pero el contenido visual principal se renderiza como gradientes/placeholders CSS.
- **[Baja] HTML minificado/monolínea** en varios archivos; complica mantenimiento y revisión manual (no afecta mucho runtime, sí mantenibilidad).

### 3.6 Arquitectura / mantenibilidad

- **[Media] Repetición de cabecera y pie** en casi todas las páginas (sin plantillas/componentes), elevando costo de cambios futuros.
- **[Baja] Mezcla de idiomas** (p. ej., “Home”, “Projects”, “Services”) en una web con `lang='es'`; conviene estrategia de i18n consistente.

## 4) Chequeos ejecutados

- Integridad de enlaces internos `href`: **sin rotos detectados**.
- Cobertura de metadatos básicos: título/h1 en todas las páginas; `description` ausente en la mayoría.

## 5) Plan de remediación sugerido

### Fase 1 (prioridad alta)

1. Migrar envío de contacto a función backend (Netlify/Vercel/Cloudflare Worker o servidor propio).
2. Regenerar credencial y eliminar exposición en frontend.
3. Actualizar `politica-privacidad.html` y `cookies.html` con el proveedor realmente activo y detalles de tratamiento.

### Fase 2 (prioridad media)

1. Añadir `meta name="description"`, `canonical`, Open Graph y Twitter Cards a cada página.
2. Implementar menú móvil accesible (`button`, `aria-expanded`, foco teclado).
3. Sustituir placeholders por imágenes reales optimizadas (`webp/avif`) con `alt` semántico.

### Fase 3 (prioridad baja)

1. Homogeneizar idioma de UI y nomenclatura.
2. Revisar contraste con herramienta WCAG.
3. Considerar templating (SSG o includes) para header/footer compartidos.

## 6) Estado final

- **Riesgo global actual**: **medio**.
- **Producción**: viable para web corporativa simple, pero recomendable corregir puntos de **seguridad/privacidad** antes de campañas de adquisición o incremento de tráfico.
