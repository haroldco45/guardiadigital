# 🛡️ Guardia Digital v3.0 - CON MULTIMEDIA

## ✨ NUEVAS CARACTERÍSTICAS

### 📸 MULTIMEDIA COMPLETA:
✅ **Fotos** - Captura desde cámara del teléfono/PC
✅ **Videos** - Graba video con audio
✅ **Audio** - Graba solo sonido (para denuncias anónimas)
✅ **Archivos** - Sube fotos/videos/audios desde galería

### 💾 ALMACENAMIENTO:
✅ La multimedia se guarda **con cada reporte**
✅ Se incluye en el **backup JSON**
✅ Se descarga **en formato Base64** (comprimido)
✅ Se restaura automáticamente

### 📊 DASHBOARD:
✅ Contador de reportes **con multimedia**
✅ Vista previa en histórico

---

## 🚀 CÓMO USAR MULTIMEDIA

### **📷 CAPTURAR FOTO:**
1. Click en tab **"📸 Reportar"**
2. Completa tipo, descripción y ubicación
3. Click en **"📷 Foto"**
4. Se abre cámara en tiempo real
5. Click **"📸 Capturar"** para tomar foto
6. Se muestra preview de la foto
7. Llena el resto del formulario
8. Click **"📤 Enviar Reporte"**

### **🎥 GRABAR VIDEO:**
1. Click en **"🎥 Video"**
2. Se abre cámara
3. Aparece botón **"⏹️ Detener Video"**
4. Graba mientras desees
5. Click **"⏹️ Detener"** cuando termines
6. Se procesa y muestra preview
7. Envía el reporte

### **🎙️ GRABAR AUDIO:**
1. Click en **"🎙️ Audio"**
2. Se abre micrófono
3. El botón se vuelve **rojo parpadeante** (grabando)
4. Habla lo que necesites
5. Click **"⏹️ Detener Audio"**
6. Se muestra reproductor de audio
7. Envía el reporte

### **📁 SUBIR ARCHIVO:**
1. Click en **"📁 Archivo"**
2. Selecciona foto/video/audio de tu galería
3. Se carga y muestra preview
4. Envía el reporte

---

## 📊 CARACTERÍSTICAS TÉCNICAS

### Formatos soportados:
**Fotos**: JPEG, PNG, GIF, WebP
**Videos**: MP4, WebM (con audio)
**Audio**: MP3, WAV, M4A

### Tamaño máximo:
~5 MB por archivo (comprimido en Base64)

### Almacenamiento:
localStorage del navegador (máximo ~10 MB total)

### Compresión:
Las fotos se comprimen a JPEG 80% automáticamente

---

## 💾 BACKUP CON MULTIMEDIA

### ¿Qué se guarda?
✅ Todos los datos del reporte
✅ **Toda la multimedia en Base64** (integrada en JSON)
✅ Fechas, horas, ubicaciones

### Tamaño del backup:
- Sin multimedia: ~1-5 KB
- Con multimedia: 100 KB - 5 MB (según cantidad)

### Cómo descargar:
1. Tab **"💾 Backup"**
2. Click **"📥 Descargar Backup"**
3. Se descarga: `guardia-backup-2026-07-20.json`
4. Guarda en PC

### Cómo restaurar:
1. Tab **"💾 Backup"**
2. Click **"📤 Restaurar Backup"**
3. Selecciona archivo `.json`
4. Se restauran **todos los reportes + multimedia**

### Compartir:
La multimedia se incluye automáticamente en el backup.
Cuando compartes el archivo, el otro usuario puede ver:
- Todas las fotos
- Todos los videos
- Todos los audios

---

## ⚙️ DIFERENCIAS v2.1 → v3.0

| Feature | v2.1 | v3.0 |
|---------|------|------|
| **Fotos** | ❌ | ✅ |
| **Videos** | ❌ | ✅ |
| **Audio** | ❌ | ✅ |
| **Cámara en vivo** | ❌ | ✅ |
| **Preview multimedia** | ❌ | ✅ |
| **Media en backup** | ❌ | ✅ |
| **Contador con media** | ❌ | ✅ |

---

## 🔒 PRIVACIDAD

✅ Multimedia se guarda **solo en tu navegador**
✅ NO se envía a servidores
✅ Control total: tú decides qué compartir
✅ Si limpias caché, necesitas tener backup

---

## 🆘 TROUBLESHOOTING

### "La cámara no funciona"
- Verifica permisos del navegador
- Debe permitir acceso a cámara/micrófono
- Algunos navegadores antiguos no lo soportan

### "El video es muy grande"
- Los videos se guardan en alta calidad
- Para compartir, los puedes comprimir externamente

### "No puedo restaurar multimedia"
- Verifica que el archivo JSON sea válido
- La multimedia debe estar en Base64

---

## 📱 COMPATIBILIDAD

**Funciona en:**
✅ Chrome/Edge (desktop + móvil)
✅ Firefox (desktop + móvil)
✅ Safari (iPhone - limitado)
✅ Navegadores Android modernos

**Limitaciones:**
⚠️ Safari: a veces pide permisos especiales
⚠️ Navegadores muy antiguos: no soportan

---

## 💡 CASOS DE USO

### 1. **Reportar robo con evidencia:**
- Toma foto del vehículo
- Graba video del lugar
- Adjunta ambos al reporte

### 2. **Denunciar sospechoso:**
- Graba audio describiendo persona
- Toma foto del lugar
- Video de la ronda

### 3. **Accidente:**
- Video de daños
- Fotos de placa
- Audio de testigos

### 4. **Compartir barrio completo:**
- Descarga backup con todas las multimedia
- Comparte archivo por WhatsApp
- Otros usuarios ven fotos/videos/audios

---

## 🚀 DEPLOYMENT

1. **Descarga:** `guardia-digital-v3.0.html` ⬆️
2. **GitHub:** Reemplaza `index.html`
3. **Commit:** "feat: multimedia completa - v3.0"
4. **Espera:** 2-3 minutos

---

**Version**: 3.0
**Fecha**: 20/07/2026
**Status**: Production Ready ✅
