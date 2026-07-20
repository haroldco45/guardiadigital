🛡️ GUARDIA DIGITAL - DESPLIEGUE EN NETLIFY
==========================================

ARQUITECTURA FINAL:
===================

App (Netlify) → Netlify Functions → API Local (3001) → MySQL (Hostinger)

Hostinger solo tiene la BD (MySQL)
El PHP proxy de Hostinger NO se necesita


ARCHIVOS QUE NECESITAS:
=======================

1. index.html (actualizado)
2. netlify.toml (configuración)
3. netlify/functions/guardia-proxy.js (proxy)


PASO A PASO - DESPLIEGUE (10 MINUTOS):
=====================================

PASO 1: Preparar tu Repo en GitHub
----------------------------------

Tu repo es: https://github.com/haroldco45/guardia-digital

1. En tu PC, clona el repo:
   git clone https://github.com/haroldco45/guardia-digital.git
   cd guardia-digital

2. Crea la estructura de carpetas:
   mkdir -p netlify/functions

3. Agrega los archivos:
   - Copia index.html (actualizado) a la raíz
   - Copia netlify.toml a la raíz
   - Copia guardia-proxy.js a netlify/functions/


PASO 2: Subir a GitHub
---------------------

En tu PC:
   git add .
   git commit -m "Despliegue Netlify: Agregar Functions proxy"
   git push origin main


PASO 3: Conectar con Netlify
---------------------------

1. Ve a: https://app.netlify.com
2. Haz clic en: "Add new site" → "Import an existing project"
3. Selecciona: "GitHub"
4. Busca y selecciona: "haroldco45/guardia-digital"
5. Haz clic en: "Deploy site"

Netlify se conectará automáticamente y hará deploy cada vez que hagas push a GitHub.


PASO 4: Configurar Variables de Entorno (IMPORTANTE)
--------------------------------------------------

En Netlify:
1. Ve a: Site settings → Environment
2. Agrega variable:
   - Key: API_LOCAL
   - Value: http://192.168.1.12:3001

O en netlify.toml ya está configurado por defecto.


PASO 5: Verificar que funciona
-----------------------------

Después de deploy (1-2 minutos):

1. Ve a: https://[tu-subdomain].netlify.app
2. Debe decir: 🟢 Online
3. Haz clic en "📸 Reportar"
4. Llena el formulario con datos de prueba
5. Haz clic en "Enviar Reporte"
6. Debe decir: ✅ Reporte enviado exitosamente

Si dice "🔴 Offline":
- Verifica que tu API local en puerto 3001 está ejecutándose
- Verifica que Netlify Functions puede alcanzar 192.168.1.12:3001


PASO 6: Compartir con Vecinos
----------------------------

URL pública: https://[tu-subdomain].netlify.app

Comparte esto con todos los vecinos del barrio.


¿QUÉ PASA CON HOSTINGER?
=========================

ANTES:
- PHP proxy en Hostinger ✅
- MySQL en Hostinger ✅

AHORA:
- PHP proxy en Hostinger ❌ SE ELIMINA (ya no se necesita)
- MySQL en Hostinger ✅ SE MANTIENE (es donde guardan los datos)

Hostinger solo tiene la BD. Netlify Functions hace el proxy.


ARQUITECTURA FINAL:
====================

Hostinger:
├── MySQL guardia_dig ← MANTENER (base de datos)
└── api-guardia.php ← ELIMINAR (ya no se necesita)

Netlify:
├── App index.html
└── netlify/functions/guardia-proxy.js

Tu PC:
└── API Local (3001) → conecta a MySQL en Hostinger


VENTAJAS:
=========

✅ Mucho más simple (sin PHP proxy)
✅ Funciona igual que Cierre Diario (patrón probado)
✅ Netlify Functions es más rápido que PHP
✅ Todos los vecinos pueden acceder desde internet
✅ Datos guardados en MySQL Hostinger (permanente)


PRÓXIMOS PASOS:
===============

1. ✅ Preparar repo con archivos
2. ✅ Subir a GitHub
3. ✅ Conectar con Netlify
4. ✅ Verificar que funciona
5. ✅ Compartir URL con vecinos


¡LISTO! 🛡️ Guardia Digital en producción
