# 🚀 Guardia Digital v4.0 - Guía de Instalación Rápida

## Archivos Descargados

Tienes 3 archivos:

1. **index.html** — La app completa (¡subir esto a Netlify!)
2. **README.md** — Documentación completa
3. **CAMBIOS-CUADRANTES.md** — Guía del sistema de cuadrantes

---

## ⚡ Opción 1: Netlify (5 minutos - RECOMENDADO)

### Paso 1: Preparar archivos
```
Descarga:
- index.html
- README.md
```

### Paso 2: Subir a Netlify
1. Ve a https://netlify.com
2. Inicia sesión (con GitHub o Google)
3. **Drag & Drop** la carpeta con los archivos
4. ✅ Se despliega automáticamente

### Paso 3: Compartir link
- Netlify te da URL: `https://guardiadigitalcolina.netlify.app/`
- ¡Listo! Comparte en Colinas del Portal

---

## 📱 Opción 2: GitHub Pages (2 minutos)

### Paso 1: Crear repositorio
1. Ve a https://github.com
2. Nuevo repo: `guardiadigitalcolina-cuadrantes`
3. Públic (✓)

### Paso 2: Subir archivos
1. Click "Add file" → "Upload files"
2. Sube: `index.html` + `README.md`
3. Click "Commit changes"

### Paso 3: Activar Pages
1. Settings → Pages
2. Source: "Deploy from a branch"
3. Branch: `main` → `root`
4. Save

✅ URL: `https://[tu-usuario].github.io/guardiadigitalcolina-cuadrantes/`

---

## 💻 Opción 3: Servidor Local (Prueba local)

```bash
# Abre el archivo directamente
open index.html

# O con Python
python -m http.server 8000
# Ve a http://localhost:8000
```

---

## 🎯 Nuevas Funciones Agregadas

### ✨ Pestaña "📍 Cuadrantes"

**Antes (v3.0):**
- Dashboard
- Reportar incidentes
- Histórico
- Contactos generales

**Ahora (v4.0):**
- Dashboard
- Sirena GSM
- Reportar incidentes
- Histórico
- **🆕 📍 Cuadrantes** ← NUEVA
- Contactos generales
- Backup

### 📍 ¿Qué hace "Cuadrantes"?

1. **Registro de vecinos** por manzana
2. **Búsqueda rápida** de contactos
3. **Red de seguridad** local
4. **Coordinador** del cuadrante visible
5. **Llamadas directas** a vecinos

---

## 🔧 Configuración Recomendada

Antes de presentar, actualiza estos números en `index.html`:

### En pestaña 🚨 Sirena
- Línea 287: `311 770 0431` → **[número real sirena GSM]**

### En pestaña 📍 Cuadrantes
- Línea 393: `314 844 7487` → **[coordinador real Cuadrante 2]**

### En pestaña ☎️ Contactos
- Línea 407: `311 389 6080` → **[policía local real]**
- Línea 412: `311 770 0431` → **[ambulancia real]**
- Línea 417: `311 770 0431` → **[JAC real]**

---

## 🎓 Cómo Presentar en Reunión

### Demostración (10 minutos)

**"Miren lo que construí para Colinas del Portal..."**

1. **Abre la app** → Muestra diseño limpio
2. **Pestaña Dashboard** → "Aquí ven total de reportes y alertas"
3. **Pestaña Sirena** → "Se conecta con la alarma GSM"
4. **Pestaña Reportar** → "Vecino reporta incidente con foto/video"
5. **Pestaña Cuadrantes** → "**AQUÍ REGISTRAN SUS TELÉFONOS**"
   - "Mira, yo me registro aquí como coordinador"
   - Llena: Nombre "Harold Marín" + Tel "311 770 0431" + Manzana "1"
   - Click "Guardar"
   - "✅ Aparece en la lista"
6. **Busca por manzana** → "Si hay sospechoso en Manzana 1, busco aquí"
7. **Llama directo** → "Click y se abre teléfono"

### Propuesta Concreta

```
"Sistema de 3 niveles:

1️⃣ SIRENA (visual/sonora) = $700k inversión
   → Todos se enteran que hay ALGO

2️⃣ GUARDIA DIGITAL (información) = Gratis piloto
   → Dice QUÉ pasó y DÓNDE

3️⃣ CUADRANTES (coordinación) = Dentro de la app
   → Red de vecinos conectados

Los 3 juntos = seguridad completa"
```

---

## 📊 Flujo de Uso Colinas del Portal

### Semana 1: Lanzamiento
```
1. Reunión barrio: "Presentamos Guardia Digital v4.0"
2. Distribuyen link (Netlify)
3. Vecinos descargan app
```

### Semana 2-3: Registro
```
1. JAC pide: "Registren en 📍 Cuadrantes"
2. Puerta a puerta: Nombre + Teléfono + Manzana
3. Red crece: 10 → 50 → 100 vecinos
```

### Semana 4: Operación
```
1. Incidente en Manzana 12
2. Vecino reporta en 📸 Reportar
3. Todos ven en 📊 Dashboard
4. Buscan en 📍 Cuadrantes: "Manzana 12"
5. Llaman a vecinos coordinados
6. Llaman a 🚨 Sirena
7. Activación inmediata
```

---

## 💡 Tips de Uso

### Para JAC/Coordinador
- ✅ Mantén actualizado el número del **Cuadrante 2**
- ✅ Haz backup de cuadrantes cada 2 semanas
- ✅ Comparte contactos en WhatsApp privado

### Para Vecinos
- ✅ Registra tu teléfono en **📍 Cuadrantes**
- ✅ Instala app en teléfono (PWA)
- ✅ Reporta incidentes con fotos

### Para Funcionarios
- ✅ Puedes ver historial de reportes
- ✅ Coordina con **314 844 7487** (Cuadrante 2)
- ✅ Acceso a red de 200+ usuarios

---

## 🆘 Solución de Problemas

### "No me carga la app"
- Limpia caché: `Ctrl+Shift+Del`
- Vuelve a cargar: `F5`

### "Perdí mis contactos"
- Descarga backup en **💾 Backup**
- Restaura en otra pestaña

### "Teléfono no se registra"
- Debe tener 10 dígitos
- Sin espacios ni caracteres especiales
- Ej: `3114532190` ✅ (no `311 453 2190`)

### "¿Se pierden datos?"
- NO. Se guardan en navegador
- Son privados en tu teléfono
- Solo desaparecen si borras caché

---

## 📞 Contactos Para Colinas del Portal

```
🚨 SIRENA GSM
Número: 311 770 0431 (ACTUALIZAR)
Usuarios: 200 máx
Admin: 5

📍 CUADRANTE 2
Coordinador: 314 844 7487 (ACTUALIZAR)
Barrios: Asovivienda, El Triángulo, Buenos Aires

👥 RED DE VECINOS
Registrados: [dinámico]
Manzanas: 30
Barrio: Colinas del Portal

👮 EMERGENCIAS
Policía: 311 389 6080 (ACTUALIZAR)
Ambulancia: 311 770 0431 (ACTUALIZAR)
JAC: 311 770 0431 (ACTUALIZAR)
```

---

## 🎯 Meta Semana 1

```
Objetivo: 
✅ App desplegada en Netlify
✅ Presentada en reunión barrio
✅ Primeros 20 vecinos registrados en Cuadrantes
✅ Sirena GSM cotizada

Resultado:
📱 Guardia Digital v4.0 live
🛡️ Seguridad comunitaria integrada
👥 Red de 200+ contactos posibles
```

---

## 📁 Archivos Necesarios

Para subir a Netlify/GitHub:
1. ✅ `index.html` (app completa)
2. ✅ `README.md` (documentación)
3. ⚠️ `CAMBIOS-CUADRANTES.md` (opcional pero recomendado)

---

## 🎉 ¡Listo!

**¿Pasos siguientes?**

1. ✅ Descarga los 3 archivos
2. ✅ Revisa números a actualizar
3. ✅ Sube a Netlify (5 min)
4. ✅ Prueba en teléfono
5. ✅ Presenta en reunión Colinas del Portal
6. ✅ Vecinos se registran
7. ✅ **Seguridad comunitaria activada**

---

**Guardia Digital v4.0 — Con Cuadrantes Integrados**

*Desarrollada por Vibras Positivas HM — Derechos de Autor Reservados*

Preguntas: harold@vibraspositivas.co
