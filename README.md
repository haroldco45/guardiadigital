# 🛡️ Guardia Digital - Colinas del Portal

**v4.0 - Sistema de Seguridad Comunitaria Integrado**

---

## 📦 Archivos Incluidos

```
├── index.html           ← App principal (contiene todo el código)
├── og-preview.png       ← Imagen para vista previa en WhatsApp/Redes
└── README.md            ← Este archivo
```

---

## 🚀 Cómo Desplegar a Netlify

### Opción 1: Con GitHub
1. Sube ambos archivos (`index.html` + `og-preview.png`) a tu repositorio GitHub
2. Conecta Netlify con GitHub
3. Netlify automáticamente deployará en `https://guardiasdigitalcolinas.netlify.app/`

### Opción 2: Drag & Drop en Netlify
1. Ve a [netlify.com](https://netlify.com)
2. Inicia sesión o crea cuenta
3. Arrastra la carpeta con los archivos al área de upload
4. ¡Listo! Tu sitio estará en vivo

---

## 🖼️ Imagen de Vista Previa (OG Image)

**Archivo:** `og-preview.png`
- **Tamaño:** 1200 × 630 píxeles (estándar Open Graph)
- **Uso:** Aparece cuando compartes el link en WhatsApp, Facebook, Twitter, etc.
- **Ubicación:** Debe estar en la raíz del sitio (mismo nivel que `index.html`)

### Vista Previa en WhatsApp
Cuando alguien comparte tu link en WhatsApp, verá:
- ✅ Imagen: `og-preview.png` 
- ✅ Título: "🛡️ Guardia Digital - Colinas del Portal"
- ✅ Descripción: "Sistema de seguridad comunitaria integrado: reportes, sirena GSM y red de contactos"

---

## 📝 Cambios Realizados

### En `index.html`:
```html
<!-- OG Image (Open Graph) -->
<meta property="og:image" content="https://guardiasdigitalcolinas.netlify.app/og-preview.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:type" content="image/png">

<!-- Twitter Card -->
<meta name="twitter:image" content="https://guardiasdigitalcolinas.netlify.app/og-preview.png">
```

✅ **Nota:** El HTML NO fue modificado en su funcionalidad. Solo se actualizaron las referencias a la imagen de vista previa.

---

## ✨ Características Incluidas

### Pestañas Principales
- 📊 **Inicio** - Dashboard con resumen de incidentes
- 🚨 **Sirena** - Acceso rápido a la alarma GSM
- 📸 **Reportar** - Crear nuevo reporte de incidente
- 📋 **Histórico** - Ver todos los reportes registrados
- 📍 **Cuadrantes** - Red de contactos por manzana
- ☎️ **Contactos** - Números de emergencia
- 💾 **Backup** - Descargar/Restaurar datos
- 📖 **Ayuda** - Manual completo del usuario ⭐ **NUEVO**

### Funcionalidades
✅ Almacenamiento local (localStorage) - Funciona offline  
✅ PWA (Progressive Web App) - Se puede instalar como app  
✅ Compartir por WhatsApp  
✅ Llamadas directas desde la app  
✅ Gestión de contactos de cuadrantes  
✅ Backups automáticos  
✅ Diseño responsive  
✅ Manual integrado en la app  

---

## 🔧 Requisitos Técnicos

- ✅ Navegador moderno (Chrome, Firefox, Safari, Edge)
- ✅ Conexión a internet (para descargas iniciales)
- ✅ Funciona completamente offline después de cargar
- ✅ Compatible con dispositivos móviles

---

## 💾 Datos Locales

Toda la información se guarda en tu dispositivo:
- `guardia_reportes` - Todos los incidentes reportados
- `guardia_contactos_cuadrantes` - Contactos de vecinos

**Seguridad:** Los datos NO se envían a servidores. Permanecen 100% en tu teléfono.

---

## 📞 Contactos de Emergencia (en la app)

- 🚨 **Sirena GSM:** 311 770 0431
- 🚔 **Policía Local:** 311 389 6080
- 🏥 **Ambulancia:** 311 770 0431
- 👥 **JAC Colinas:** 314 844 7487

---

## 🛡️ Desarrollada por

**Vibras Positivas HM** — Derechos de Autor Reservados

Soluciones digitales para seguridad comunitaria en Caucasia, Antioquia.

---

## 📋 Versión

**v4.0** - Julio 2026

### Cambios v4.0:
- ✅ Pestaña "Ayuda" con manual completo
- ✅ Imagen de vista previa para WhatsApp/Redes
- ✅ Mejorada documentación
- ✅ Optimizado diseño responsivo

---

## 🎯 Próximas Mejoras (Roadmap)

- [ ] Integración DIAN para facturas
- [ ] Estadísticas avanzadas por zona
- [ ] Notificaciones push
- [ ] Integración con Sistema de Cuadrantes oficial
- [ ] API de sincronización en la nube

---

## ❓ Preguntas Frecuentes

**P: ¿Necesito internet para usar la app?**  
R: Solo para la primera carga. Después funciona completamente offline.

**P: ¿Dónde se guardan mis datos?**  
R: En tu teléfono, en localStorage. No se envía a internet.

**P: ¿Puedo reportar anónimamente?**  
R: Sí. Nombre y teléfono son opcionales.

**P: ¿Cómo agrego la app a la pantalla de inicio?**  
R: En móvil: menú → "Agregar a pantalla de inicio" o "Instalar app"

---

**Última actualización:** 22 de Julio de 2026  
**Contacto:** Vibras Positivas HM
