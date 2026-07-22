# 🛡️ Guardia Digital v4.0 - Colinas del Portal

**Sistema de Seguridad Comunitaria con Integración de Sirena GSM**

---

## 📋 Descripción

Guardia Digital es una aplicación web de seguridad comunitaria diseñada específicamente para **Colinas del Portal** (Caucasia, Antioquia). Integra reportes multimedia con un sistema de alarma comunitaria GSM, creando un ecosistema completo de protección vecinal.

**Características principales:**
- ✅ Reportes de incidentes con multimedia (fotos, videos, audio)
- ✅ Integración con Sirena Comunitaria GSM (200 usuarios, 5 admin)
- ✅ Mapa de 30 manzanas del barrio
- ✅ Contactos de emergencia locales
- ✅ Sincronización vía WhatsApp
- ✅ Almacenamiento local (sin servidor)
- ✅ PWA (funciona offline)

---

## 🚀 Mejoras v4.0 vs v3.0

| Aspecto | v3.0 | v4.0 |
|--------|------|------|
| **Identidad** | Genérica | Colinas del Portal |
| **Sirena** | ❌ No | ✅ Integrada GSM |
| **Manzanas** | ❌ No | ✅ 30 manzanas |
| **Contactos** | ❌ No | ✅ Emergencia local |
| **Admin Panel** | ❌ No | ✅ Historial sirena |
| **Stats** | Básicos | Mejorados |
| **Header** | Genérico | Barrio específico |

---

## 📱 Pestañas Principales

### 1. 📊 Inicio (Dashboard)
- Estado general del barrio
- Estadísticas: total reportes, sirenas activadas hoy
- Últimas alertas en tiempo real
- Últimos 3 reportes

### 2. 🚨 Sirena Comunitaria
- Información de activación (cómo llamar)
- Número principal de sirena GSM
- Contactos de los 5 administradores
- Especificaciones técnicas (200 usuarios)
- **Historial de activaciones del día**

### 3. 📸 Reportar
- Selector de tipo de incidente (7 categorías)
- Selección de manzana (1-30)
- Descripción detallada
- Datos opcionales (nombre, teléfono)
- Captura multimedia (foto, video, audio)
- Envío instantáneo

### 4. 📋 Histórico
- Listado completo de reportes
- Ordenado por fecha (más reciente primero)
- Búsqueda por manzana
- Detalles de cada incidente

### 5. ☎️ Contactos
- Sirena GSM
- Policía local
- Ambulancia/Cruz Roja
- JAC Colinas del Portal
- Datos del barrio

### 6. 💾 Backup
- Descargar backup en JSON
- Restaurar desde archivo
- Compartir por WhatsApp
- Sincronización comunitaria

---

## 🛠️ Instalación

### Opción 1: Netlify Deploy (Recomendado)

1. Clona o descarga este repositorio
2. Sube a Netlify:
   ```
   Conecta GitHub → Netlify
   Deploy directo
   ```
3. URL resultante: `https://guardiadigitalcolina.netlify.app`

### Opción 2: GitHub Pages

1. Fork del repositorio
2. Renombra a: `guardiadigitalcolina`
3. GitHub Pages automáticamente activa
4. URL: `https://[tu-usuario].github.io/guardiadigitalcolina/`

### Opción 3: Servidor Local

```bash
# Abre directamente en navegador
open index.html
```

---

## 💾 Almacenamiento de Datos

Todos los datos se guardan **localmente en el navegador** usando `localStorage`:

```javascript
guardia_reportes = [
  {
    id: timestamp,
    tipo: "robo_vehiculo",
    manzana: "Manzana 5",
    descripcion: "...",
    nombre: "...",
    telefono: "...",
    fecha: "2026-07-22 14:30",
    timestamp: 1721673000000
  }
]
```

**NO requiere servidor, base de datos ni API.**

---

## 📞 Contactos Configurados

### Sirena GSM
- **Número**: 311 770 0431
- **Capacidad**: 200 usuarios
- **Admin**: 5 máximo
- **Activación**: Solo llamada (rechaza números no autorizados)

### Emergencias Locales
- **Policía**: 311 389 6080
- **Ambulancia**: 311 770 0431
- **JAC Colinas**: 311 770 0431

**⚠️ Todos estos números deben actualizarse con datos reales del barrio.**

---

## 📊 Categorías de Incidentes

1. 🚗 Robo de Vehículo
2. 🏠 Robo a Residencia
3. 👤 Sospechoso Rondando
4. ⚠️ Asalto/Violencia
5. 🚑 Accidente
6. 💊 Actividad Sospechosa
7. ❓ Otro

---

## 🚨 Sirena GSM - Especificaciones

### Equipo
- **Modelo**: Alarma Comunitaria GSM + Sirena 110V
- **Precio**: $700.000 COP
- **Instalación**: Incluida
- **Mantenimiento**: ~$100k/año

### Características
✅ Solo responde a números programados
✅ 200 usuarios máximo
✅ Sirena se apaga automáticamente
✅ SMS a admin indicando quién activó
✅ Conexión fácil (solo energía + sirena)
✅ Programación por SMS

### Integración Guardia Digital
1. Usuario ve "Sirena" en la app
2. Llama al número programado
3. Sirena se activa
4. App registra en historial
5. Admin recibe SMS
6. Vecinos ven alerta en app

---

## 🔐 Privacidad y Seguridad

**✅ Protección Garantizada:**
- Datos 100% privados en navegador (localStorage)
- NO se envían a servidores externos
- NO requiere login
- TÚ tienes control total
- Puedes eliminar datos cuando quieras

**⚠️ Importante:**
Si limpias el caché del navegador, se pierden los datos.
Por eso **descarga backup regularmente** y comparte en grupo WhatsApp.

---

## 📱 PWA - Instalación en Teléfono

### Android
1. Abre en Chrome
2. Menú → Instalar app
3. Se añade a pantalla de inicio

### iPhone
1. Abre en Safari
2. Compartir → Añadir a pantalla de inicio
3. Se comporta como app nativa

---

## 💡 Casos de Uso

### Reportar Robo de Vehículo
```
Tipo: Robo de Vehículo
Manzana: Manzana 12
Descripción: "Vehículo gris robado de mi casa esta mañana"
Foto: Placa del vehículo
Video: Entrada de la casa
Audio: Descripción de lo que pasó
```

### Alertar Sospechoso
```
Tipo: Sospechoso Rondando
Manzana: Manzana 5
Descripción: "Personas rondando las casas"
Video: Grabación de las personas
Audio: Descripción de características
```

### Coordinación en Accidente
```
Tipo: Accidente
Manzana: Manzana 8
Descripción: "Accidente en la esquina de la tienda"
Foto: Lugar del accidente
Teléfono: Para seguimiento
```

---

## 🎯 Flujo de Uso Comunitario

### Día 1
1. **Coordinador elige PC central**
2. **Distribuye link de app** a vecinos
3. **Todos descargan** Guardia Digital

### Día 2-30
1. **Vecinos reportan** incidentes
2. **Coordinador monitorea** dashboard
3. **Descarga backup** cada 2-3 días
4. **Comparte en WhatsApp** del barrio

### Mensualmente
1. **Revisar estadísticas**
2. **Ajustar categorías** si es necesario
3. **Actualizar contactos** de emergencia
4. **Hacer backup** de archivos antiguos

---

## 🔧 Personalización

### Cambiar Números de Sirena
Abre `index.html` y edita:
```javascript
// Línea ~350
<div class="contact-phone" onclick="llamar('NUEVO_NUMERO')">XXX XXX XXXX</div>
```

### Cambiar Nombre del Barrio
```javascript
// Línea ~20 aprox
Guardia Digital - [NUEVO BARRIO]
```

### Agregar Manzanas
```javascript
// Línea ~95
const MANZANAS = Array.from({length: 30}, ...)
// Cambiar 30 al número real de manzanas
```

### Cambiar Categorías
Edita el `<select id="tipoIncidente">` en la pestaña Reportar

---

## 📊 Estadísticas Barrio Colinas del Portal

- **Manzanas**: 30
- **Población estimada**: 400-500 familias
- **Cuota comunitaria propuesta**: $33-50k/mes
- **Usuarios de sirena**: Hasta 200
- **Administradores**: 5 máximo

---

## 🤝 Integración con JAC

1. **Coordinador JAC** usa PC central
2. **Recibe reportes** en la app
3. **Comparte** con grupo WhatsApp
4. **Coordina respuesta** con policía/sirena
5. **Mantiene histórico** de eventos

---

## ⚡ Rendimiento

- **Tamaño**: 50KB (HTML + CSS + JS)
- **Carga**: < 2 segundos
- **Offline**: ✅ Funciona sin internet
- **Almacenamiento**: Hasta ~10MB por navegador
- **Compatibilidad**: Chrome, Firefox, Safari, Edge

---

## 📞 Soporte

**Desarrollada por:** Vibras Positivas HM
**Contacto**: harold@vibraspositivas.co
**Versión**: 4.0
**Última actualización**: Julio 2026

---

## 📝 Cambios Log

### v4.0 (Julio 2026)
- ✅ Integración Sirena GSM
- ✅ Identidad Colinas del Portal
- ✅ 30 manzanas incluidas
- ✅ Contactos de emergencia locales
- ✅ Historial de activaciones de sirena
- ✅ Panel de stats mejorado
- ✅ UI optimizada para móvil

### v3.0 (Anterior)
- Reportes con multimedia
- Backup/restore
- WhatsApp sharing
- Dashboard básico

---

## 🎓 Manual Rápido

1. **Reportar**: Click "📸 Reportar" → Completa formulario → Enviar
2. **Ver reportes**: Click "📋 Histórico"
3. **Activar sirena**: Click "🚨 Sirena" → Llama al número
4. **Backup**: Click "💾 Backup" → Descarga → Comparte en WhatsApp
5. **Restaurar**: Otro usuario recibe backup → Click "📤 Restaurar"

---

**🛡️ Guardia Digital v4.0 - Seguridad Comunitaria para Colinas del Portal**

*Desarrollada por Vibras Positivas HM — Derechos de Autor Reservados*
